"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
    const pathname = usePathname();
    const isStudio = pathname === '/studio';

    const [phase, setPhase] = useState<"loading" | "prompt" | "hidden">("loading");
    const [progress, setProgress] = useState(0);
    const [isFading, setIsFading] = useState(false);

    // Prevent scrolling when preloader is open
    useEffect(() => {
        if (phase !== "hidden") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [phase]);

    // Simulate loading progress
    useEffect(() => {
        if (phase === "loading") {
            const interval = setInterval(() => {
                setProgress(prev => {
                    const next = prev + Math.floor(Math.random() * 15) + 5;
                    if (next >= 100) {
                        clearInterval(interval);
                        setTimeout(() => setPhase("prompt"), 400); // brief pause at 100%
                        return 100;
                    }
                    return next;
                });
            }, 150);
            return () => clearInterval(interval);
        }
    }, [phase]);

    const handleEnter = (withMusic: boolean) => {
        setIsFading(true);

        if (withMusic && !isStudio) {
            const audio = document.getElementById("bg-music") as HTMLAudioElement;
            if (audio) {
                audio.volume = 0.5;
                audio.play().catch(e => console.log("Audio play failed:", e));

                // Initialize Web Audio API visualizer safely on user interaction
                const anyAudio = audio as any;
                if (!anyAudio.__audioContext) {
                    try {
                        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
                        if (AudioContextClass) {
                            const ctx = new AudioContextClass();
                            const analyser = ctx.createAnalyser();
                            const source = ctx.createMediaElementSource(audio);
                            source.connect(analyser);
                            analyser.connect(ctx.destination);
                            analyser.fftSize = 256;

                            anyAudio.__audioContext = ctx;
                            anyAudio.__analyser = analyser;
                        }
                    } catch (e) {
                        console.error("Audio context init failed", e);
                    }
                } else if (anyAudio.__audioContext.state === 'suspended') {
                    anyAudio.__audioContext.resume();
                }
            }
        }

        setTimeout(() => {
            setPhase("hidden");
        }, 800); // Duration of the fade out
    };

    return (
        <>
            {!isStudio && <audio id="bg-music" loop src="/Pico De Amor.mp3" preload="auto" />}

            {phase !== "hidden" && (
                <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground transition-opacity duration-700 ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

                    {/* Subtle background overlay & borders */}
                    <div className="absolute inset-0 bg-dark-surface/50 pointer-events-none z-0"></div>
                    <div className="absolute inset-4 border border-foreground/30 pointer-events-none z-0"></div>
                    <div className="absolute inset-0 border-[6px] border-foreground pointer-events-none z-0"></div>

                    {/* Scanline effect */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-5 mix-blend-overlay" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(255, 255, 255, 0.5) 50%)', backgroundSize: '100% 4px' }}></div>

                    <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl px-4 relative z-10 transition-all duration-500">

                        {/* Cyberpunk corner markers */}
                        <div className="absolute top-8 left-8 font-mono text-[10px] uppercase tracking-widest opacity-60 hidden sm:block border-l-2 pl-2 border-foreground">
                            C9DE // SYS.INIT<br />
                            {phase === "loading" ? "INITIALIZING..." : "AWAITING INPUT"}
                        </div>
                        <div className="absolute top-8 right-8 font-mono text-[10px] uppercase tracking-widest opacity-60 hidden sm:block text-right border-r-2 pr-2 border-foreground">
                            BPM: 126.0<br />
                            [STANDBY]
                        </div>

                        {/* LOADING PHASE */}
                        <div className={`absolute flex flex-col items-center justify-center transition-opacity duration-500 ${phase === "loading" ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            <div className="font-display text-3xl sm:text-6xl font-black tracking-widest uppercase mb-8 relative drop-shadow-md animate-pulse scale-x-125 origin-center">
                                ANTARA
                            </div>

                            <div className="w-64 max-w-[80vw] h-1 bg-foreground/20 relative mb-4">
                                <div className="absolute top-0 left-0 h-full bg-foreground transition-all duration-150 ease-out shadow-[0_0_10px_var(--color-foreground)]" style={{ width: `${progress}%` }}></div>
                            </div>

                            <div className="font-mono text-[10px] uppercase tracking-widest opacity-80 flex justify-between w-64 max-w-[80vw]">
                                <span>LOADING ASSETS...</span>
                                <span>{progress}%</span>
                            </div>
                        </div>

                        {/* PROMPT PHASE */}
                        <div className={`flex flex-col items-center justify-center w-full transition-all duration-700 transform ${phase === "prompt" ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}`}>
                            {/* Massive ANTARA Logo */}
                            <div className="w-full flex justify-center mb-12 sm:mb-24 scale-x-110 sm:scale-x-150 origin-center">
                                <h1 className="font-display text-4xl sm:text-7xl md:text-9xl font-black tracking-widest uppercase relative drop-shadow-md">
                                    ANTARA
                                </h1>
                            </div>

                            <p className="font-mono text-xs sm:text-sm uppercase tracking-widest opacity-80 mb-8 border-b border-foreground/50 pb-2 px-8">
                                {isStudio ? "Initialize Audio Engine" : "Select Sensory Experience"}
                            </p>

                            {/* Prompt Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-xl justify-center px-4 sm:px-0">
                                {!isStudio ? (
                                    <>
                                        <button
                                            onClick={() => handleEnter(true)}
                                            className="group relative px-4 sm:px-8 py-4 bg-foreground text-background font-bold tracking-widest uppercase text-[10px] sm:text-xs transition-all hover:bg-[#c8d4b8] cursor-crosshair overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,0.5)] active:shadow-none active:translate-y-1 active:translate-x-1"
                                        >
                                            <span className="relative z-10 font-mono">CONTINUE WITH MUSIC</span>
                                            <div className="absolute inset-0 bg-background mix-blend-difference group-hover:scale-y-0 transition-transform origin-top duration-300 pointer-events-none opacity-20"></div>
                                        </button>

                                        <button
                                            onClick={() => handleEnter(false)}
                                            className="group relative px-4 sm:px-8 py-4 bg-transparent text-foreground font-bold tracking-widest uppercase text-[10px] sm:text-xs border border-foreground transition-all hover:bg-dark-surface cursor-crosshair overflow-hidden"
                                        >
                                            <span className="relative z-10 font-mono opacity-80 group-hover:opacity-100">CONTINUE WITHOUT MUSIC</span>
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => handleEnter(false)}
                                        className="group relative px-4 sm:px-8 py-4 bg-foreground text-background font-bold tracking-widest uppercase text-[10px] sm:text-xs transition-all hover:bg-[#c8d4b8] cursor-crosshair overflow-hidden shadow-[4px_4px_0_rgba(0,0,0,0.5)] active:shadow-none active:translate-y-1 active:translate-x-1"
                                    >
                                        <span className="relative z-10 font-mono">ENTER STUDIO MODE</span>
                                        <div className="absolute inset-0 bg-background mix-blend-difference group-hover:scale-y-0 transition-transform origin-top duration-300 pointer-events-none opacity-20"></div>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Small bottom text */}
                        <div className="absolute bottom-6 sm:bottom-8 font-mono text-[8px] sm:text-[10px] uppercase tracking-widest opacity-50 text-center w-full px-4">
                            SYS.REV 014 // PLEASE VERIFY SENSORY PREFERENCE TO INITIALIZE
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
