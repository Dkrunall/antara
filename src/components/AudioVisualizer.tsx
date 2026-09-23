"use client";

import { useEffect, useRef } from "react";

interface AudioVisualizerProps {
    color?: string;
    className?: string;
    lineWidth?: number;
    getAnalyser?: () => AnalyserNode | null;
    active?: boolean;
}

export default function AudioVisualizer({ color = "rgba(216, 227, 206, 0.8)", className = "w-full h-16", lineWidth = 2, getAnalyser, active = true }: AudioVisualizerProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const audioElement = document.getElementById("bg-music") as HTMLAudioElement;
        if (!audioElement && !getAnalyser) return;

        let animationFrameId: number;
        const dataArray = new Uint8Array(128);
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        const draw = () => {
            animationFrameId = requestAnimationFrame(draw);

            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const width = canvas.width;
            const height = canvas.height;

            const anyAudio = audioElement as HTMLAudioElement & { __analyser?: AnalyserNode };
            const analyser = getAnalyser ? getAnalyser() : anyAudio?.__analyser;

            // If no analyser or music is paused, clear the screen and draw nothing
            if (!analyser || !active || (!getAnalyser && (!audioElement || audioElement.paused || audioElement.muted || audioElement.volume === 0)) || document.hidden || reducedMotion.matches) {
                ctx.clearRect(0, 0, width, height);
                return;
            }

            const bufferLength = dataArray.length;
            analyser.getByteFrequencyData(dataArray);

            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;

            ctx.fillStyle = color;
            const bars = 48;
            const barWidth = width / bars;
            for (let bar = 0; bar < bars; bar++) {
                const value = dataArray[Math.floor(bar / bars * bufferLength)] / 255;
                const barHeight = Math.max(1, value * height * 0.9);
                ctx.globalAlpha = 0.3 + value * 0.7;
                ctx.fillRect(bar * barWidth, (height - barHeight) / 2, Math.max(1, barWidth - 3), barHeight);
            }
            ctx.globalAlpha = 1;
            analyser.getByteTimeDomainData(dataArray);
            ctx.beginPath();

            const sliceWidth = width * 1.0 / bufferLength;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                // v ranges from 0 to 2 for ByteTimeDomainData, 1 is the center point
                const v = dataArray[i] / 128.0;
                const y = v * (height / 2);

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
                x += sliceWidth;
            }

            ctx.lineTo(width, height / 2);
            ctx.stroke();
        };

        draw();

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [color, lineWidth, getAnalyser, active]);

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const rect = canvas.getBoundingClientRect();
                canvas.width = rect.width * (window.devicePixelRatio || 1);
                canvas.height = rect.height * (window.devicePixelRatio || 1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={className}>
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
        </div>
    );
}
