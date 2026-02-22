"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Clock from "@/components/Clock";
import Preloader from "@/components/Preloader";
import { useAudioEngine, DrumStyle } from "@/hooks/useAudioEngine";
import AudioVisualizer from "@/components/AudioVisualizer";

const TRACKS = ["KICK", "CLAP", "HAT", "PERC"];
const STEPS = 16;

export default function Studio() {
    const { playKick, playClap, playHat, playPerc, playBaseMusic, getAudioContext } = useAudioEngine();

    // Initial 4x16 empty grid
    const [grid, setGrid] = useState<boolean[][]>(() => {
        const init = [];
        for (let i = 0; i < 4; i++) {
            init.push(new Array(STEPS).fill(false));
        }
        return init;
    });

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [bpm, setBpm] = useState(130);
    const [style, setStyle] = useState<DrumStyle>("techno");

    // Refs for interval closure
    const isPlayingRef = useRef(isPlaying);
    const currentStepRef = useRef(currentStep);
    const gridRef = useRef(grid);
    const styleRef = useRef(style);

    useEffect(() => {
        isPlayingRef.current = isPlaying;
        currentStepRef.current = currentStep;
        gridRef.current = grid;
        styleRef.current = style;
    }, [isPlaying, currentStep, grid, style]);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isPlaying) {
            // Resume context if browser suspended it (requires user gesture, which click PLAY provides)
            const ctx = getAudioContext();
            if (ctx && ctx.state === 'suspended') {
                ctx.resume();
            }

            const tick = () => {
                if (!isPlayingRef.current) return;

                const step = currentStepRef.current;
                const g = gridRef.current;
                const s = styleRef.current;
                const audioCtx = getAudioContext();

                if (audioCtx) {
                    const time = audioCtx.currentTime + 0.05; // slight audio lookahead
                    if (g[0][step]) playKick(time, s);
                    if (g[1][step]) playClap(time, s);
                    if (g[2][step]) playHat(time, s);
                    if (g[3][step]) playPerc(time, s);

                    // Always play the base music track for the current step
                    playBaseMusic(time, step, s);
                }

                setCurrentStep((prev) => (prev + 1) % STEPS);
            };

            // Calculate milliseconds per step (16th notes)
            const stepTimeMs = 15000 / bpm;
            intervalId = setInterval(tick, stepTimeMs);
        } else {
            setCurrentStep(0);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isPlaying, bpm, playKick, playClap, playHat, playPerc, playBaseMusic, getAudioContext]);

    const toggleStep = (trackIdx: number, stepIdx: number) => {
        const newGrid = [...grid];
        newGrid[trackIdx] = [...newGrid[trackIdx]];
        newGrid[trackIdx][stepIdx] = !newGrid[trackIdx][stepIdx];
        setGrid(newGrid);
    };

    const clearGrid = () => {
        const reset = [];
        for (let i = 0; i < 4; i++) {
            reset.push(new Array(STEPS).fill(false));
        }
        setGrid(reset);
        setIsPlaying(false);
        setCurrentStep(0);
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
            <Preloader />

            <div className="fixed bottom-0 left-0 w-full pointer-events-none z-0 opacity-20 mix-blend-screen" style={{ height: '30vh' }}>
                <AudioVisualizer className="w-full h-full" color="#c8d4b8" lineWidth={1} />
            </div>

            <main className="w-full border-x border-foreground flex flex-col min-h-screen relative overflow-hidden z-10 text-sm bg-background/80 backdrop-blur-sm">

                {/* Header */}
                <header className="flex flex-col border-b border-foreground">
                    <div className="flex justify-between items-center px-4 py-1 text-[10px] uppercase tracking-widest border-b border-foreground whitespace-nowrap overflow-hidden bg-background">
                        <span>[ 014 ]</span>
                        <span className="hidden sm:inline-block">// IN-BROWSER AUDIO ENGINE //</span>
                        <span className="inline-block sm:hidden">// ENGINE: OK //</span>
                        <Clock />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 sm:py-2 text-[10px] uppercase border-b border-foreground bg-background gap-3 sm:gap-0">
                        <span className="flex flex-wrap justify-center gap-3 sm:gap-4">
                            <a href="/" className="hover:text-[#c8d4b8] transition-colors">● HOME</a>
                            <a href="/about" className="hover:text-[#c8d4b8] transition-colors">● ABOUT</a>
                            <a href="/venues" className="hover:text-[#c8d4b8] transition-colors">● VENUES</a>
                            <a href="/press" className="hover:text-[#c8d4b8] transition-colors">● ASSETS</a>
                            <span className="text-foreground/50 cursor-default">● STUDIO</span>
                            <a href="/contact" className="hover:text-[#c8d4b8] transition-colors">● CONTACT</a>
                        </span>
                        <span className="hidden sm:inline-block tracking-widest leading-none">[SEQ_VIEW]</span>
                    </div>
                </header>

                <div className="flex flex-1 flex-col p-4 sm:p-8">

                    {/* Top Controls */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6 w-full max-w-5xl mx-auto">
                        <div>
                            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-widest uppercase mb-2">
                                STUDIO.
                            </h1>
                            <p className="font-mono text-xs opacity-60 uppercase tracking-widest border-l-2 border-foreground pl-3">
                                PROGRAM YOUR OWN BEAT &gt; SELECT KIT &gt; EXECUTE
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 font-mono w-full sm:w-auto">
                            {/* BPM Slider */}
                            <div className="flex items-center gap-4 bg-dark-surface p-3 border border-foreground">
                                <span className="text-xs font-bold w-8">BPM</span>
                                <input
                                    type="range"
                                    min="80"
                                    max="160"
                                    value={bpm}
                                    onChange={(e) => setBpm(parseInt(e.target.value))}
                                    className="w-full sm:w-32 accent-foreground cursor-pointer"
                                />
                                <span className="text-xs w-8 text-right font-display text-[#c8d4b8]">{bpm}</span>
                            </div>

                            {/* Kit Toggle */}
                            <div className="flex items-center gap-4 bg-dark-surface p-3 border border-foreground">
                                <span className="text-xs font-bold w-8">KIT</span>
                                <div className="flex gap-2 text-xs w-full">
                                    <button
                                        onClick={() => { setStyle("techno"); setBpm(130); }}
                                        className={`flex-1 sm:flex-none px-3 py-1 border transition-colors ${style === 'techno' ? 'bg-foreground text-background border-foreground font-bold' : 'border-foreground/30 hover:bg-foreground/10'}`}
                                    >
                                        TECHNO
                                    </button>
                                    <button
                                        onClick={() => { setStyle("afro"); setBpm(118); }}
                                        className={`flex-1 sm:flex-none px-3 py-1 border transition-colors ${style === 'afro' ? 'bg-foreground text-background border-foreground font-bold' : 'border-foreground/30 hover:bg-foreground/10'}`}
                                    >
                                        AFRO HOUSE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Transport Controls */}
                    <div className="flex gap-4 mb-8 max-w-5xl mx-auto w-full">
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className={`flex-[3] sm:flex-[4] py-4 font-display text-3xl sm:text-4xl tracking-widest border transition-all ${isPlaying ? 'bg-[#c8d4b8] text-background border-[#c8d4b8] shadow-[0_0_20px_rgba(200,212,184,0.3)]' : 'bg-foreground hover:bg-background hover:text-foreground border-foreground text-background shadow-[4px_4px_0_var(--color-foreground)] active:shadow-none active:translate-y-1 active:translate-x-1'}`}
                        >
                            {isPlaying ? "■ STOP" : "► PLAY"}
                        </button>
                        <button
                            onClick={clearGrid}
                            className="flex-1 px-4 py-4 font-display text-xl sm:text-2xl tracking-widest border border-foreground hover:bg-foreground hover:text-background transition-colors text-foreground bg-dark-surface"
                        >
                            CLEAR
                        </button>
                    </div>

                    {/* Step Sequencer Grid */}
                    <div className="w-full max-w-5xl mx-auto border-2 border-foreground bg-dark-surface overflow-x-auto relative z-20 shadow-[8px_8px_0_var(--color-foreground)] mb-12">
                        <div className="min-w-[700px] flex flex-col">
                            {TRACKS.map((track, trackIdx) => (
                                <div key={track} className="flex border-b border-foreground/30 last:border-0 hover:bg-background/20 transition-colors">

                                    {/* Track Label */}
                                    <div className="w-24 sm:w-32 flex-shrink-0 flex items-center p-3 border-r-2 border-foreground font-display font-bold tracking-widest text-[#c8d4b8] bg-background">
                                        {track}
                                    </div>

                                    {/* Steps */}
                                    <div className="flex-1 grid" style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}>
                                        {grid[trackIdx].map((isActive, stepIdx) => {
                                            const isCurrentBeat = isPlaying && currentStep === stepIdx;
                                            const isQuarterNote = stepIdx % 4 === 0;

                                            let bgClass = "bg-transparent";
                                            if (isActive) bgClass = "bg-[#c8d4b8]";
                                            else if (isQuarterNote) bgClass = "bg-foreground/5";

                                            let borderClass = isQuarterNote ? "border-r border-foreground/40" : "border-r border-foreground/10";
                                            if (stepIdx === 15) borderClass = "";

                                            return (
                                                <button
                                                    key={stepIdx}
                                                    onClick={() => toggleStep(trackIdx, stepIdx)}
                                                    className={`h-14 sm:h-16 w-full ${borderClass} border-b border-foreground/5 transition-all duration-75 relative group ${isCurrentBeat ? 'bg-foreground/20 z-10' : bgClass}`}
                                                    aria-label={`Toggle ${track} step ${stepIdx + 1}`}
                                                >
                                                    {/* Glow behind current beat */}
                                                    {isCurrentBeat && <div className="absolute inset-0 bg-[#c8d4b8]/20 mix-blend-screen pointer-events-none"></div>}

                                                    {/* Central marker */}
                                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ${isActive ? (isCurrentBeat ? 'w-full h-full bg-[#c8d4b8] scale-100 shadow-[0_0_15px_rgba(200,212,184,0.8)]' : 'w-6 h-6 sm:w-8 sm:h-8 bg-[#c8d4b8]') : 'w-2 h-2 sm:w-3 sm:h-3 border border-foreground/20 group-hover:border-foreground/80 group-hover:bg-foreground/20'}`} />
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
