"use client";

import { useEffect, useRef } from "react";

interface AudioVisualizerProps {
    color?: string;
    className?: string;
    lineWidth?: number;
}

export default function AudioVisualizer({ color = "rgba(216, 227, 206, 0.8)", className = "w-full h-16", lineWidth = 2 }: AudioVisualizerProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const audioElement = document.getElementById("bg-music") as HTMLAudioElement;
        if (!audioElement) return;

        let animationFrameId: number;

        const draw = () => {
            animationFrameId = requestAnimationFrame(draw);

            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const width = canvas.width;
            const height = canvas.height;

            const anyAudio = audioElement as any;
            const analyser = anyAudio.__analyser as AnalyserNode | undefined;

            // If no analyser or music is paused, clear the screen and draw nothing
            if (!analyser || audioElement.paused) {
                ctx.clearRect(0, 0, width, height);
                return;
            }

            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            analyser.getByteTimeDomainData(dataArray);

            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = color;

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
    }, [color, lineWidth]);

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
