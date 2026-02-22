import Image from "next/image";
import Clock from "@/components/Clock";

export default function Press() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center">

            <main className="w-full border-x border-foreground flex flex-col min-h-screen relative overflow-hidden text-sm">

                {/* Top Header - Replicated from Homepage */}
                <header className="flex flex-col border-b border-foreground">
                    <div className="flex justify-between items-center px-4 py-1 text-[10px] uppercase tracking-widest border-b border-foreground whitespace-nowrap overflow-hidden">
                        <span>[ 014 ]</span>
                        <span className="hidden sm:inline-block">// AUDIO SIGNAL: CLEAR //</span>
                        <span className="inline-block sm:hidden">// SIGNAL: OK //</span>
                        <Clock />
                    </div>
                    <div className="py-4 flex justify-center border-b border-foreground bg-dark-surface relative overflow-hidden">
                        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-widest uppercase relative z-10 scale-x-125 sm:scale-x-150 origin-center">
                            ANTARA
                        </h1>
                        <div className="absolute top-2 right-2 text-[8px] tracking-normal leading-tight">
                            BPM<br />126.0
                        </div>
                        <div className="absolute bottom-2 left-2 text-[8px] tracking-normal leading-tight">
                            MASTER<br />OUT
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 sm:py-2 text-[10px] uppercase border-b border-foreground bg-background gap-3 sm:gap-0">
                        <span className="flex flex-wrap justify-center gap-3 sm:gap-4">
                            <a href="/" className="hover:text-[#c8d4b8] transition-colors">● HOME</a>
                            <a href="/about" className="hover:text-[#c8d4b8] transition-colors">● ABOUT</a>
                            <a href="/venues" className="hover:text-[#c8d4b8] transition-colors">● VENUES</a>
                            <span className="text-foreground/50 cursor-default">● ASSETS</span>
                            <a href="/studio" className="hover:text-[#c8d4b8] transition-colors">● STUDIO</a>
                            <a href="/contact" className="hover:text-[#c8d4b8] transition-colors">● CONTACT</a>
                        </span>
                        <span className="hidden sm:flex gap-2 tracking-widest leading-none">
                            <span>◆</span>
                            <span>SETLIST</span>
                        </span>
                        <span className="hidden sm:inline-block leading-none">CUE READY</span>
                    </div>
                </header>

                {/* --- PRESS CONTENT --- */}
                <section className="flex flex-col border-b border-foreground bg-background">
                    <div className="flex flex-col md:flex-row min-h-[600px]">

                        {/* Left Col: Press Kit & Assets */}
                        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-foreground p-6 sm:p-12 font-mono flex flex-col bg-dark-surface">
                            <div className="flex justify-between items-center border-b border-foreground/50 pb-2 mb-8 text-[#c8d4b8]">
                                <span className="text-[10px] tracking-widest uppercase font-bold">DIRECTORY // PUBLIC_FILES</span>
                                <span className="text-[10px] animate-pulse">READ ONLY</span>
                            </div>

                            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-widest font-black mb-12 drop-shadow-md">
                                PRESS &<br />ASSETS
                            </h2>

                            {/* File Grid */}
                            <div className="grid grid-cols-1 gap-6 mb-12">

                                {/* EPK Download */}
                                <a href="/ANTARA2.pdf" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row justify-between sm:items-center border-[2px] border-[#c8d4b8] text-[#c8d4b8] p-6 hover:bg-[#c8d4b8] hover:text-background transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_rgba(200,212,184,0.5)] cursor-pointer bg-background/50 relative overflow-hidden font-bold">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#c8d4b8] text-background flex items-center justify-center translate-x-8 -translate-y-8 rotate-45 z-0 group-hover:scale-150 transition-transform duration-500"></div>
                                    <div className="flex items-center gap-6 relative z-10 mb-4 sm:mb-0">
                                        <span className="text-3xl opacity-80 group-hover:opacity-100">≡</span>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase font-mono tracking-widest opacity-80 mb-1">MASTER_FILE</span>
                                            <span className="text-lg sm:text-xl tracking-widest break-all">ANTARA_EPK_2026.PDF</span>
                                        </div>
                                    </div>
                                    <span className="flex items-center gap-4 relative z-10 font-mono text-[10px] uppercase">
                                        <span className="opacity-70 group-hover:opacity-100">3.2 MB</span>
                                        <span className="border border-current px-4 py-2 flex items-center gap-2 bg-background group-hover:bg-[#c8d4b8]">
                                            <span>DOWNLOAD</span>
                                            <span className="animate-bounce">↓</span>
                                        </span>
                                    </span>
                                </a>

                                {/* Logo Pack */}
                                <div className="group flex flex-col sm:flex-row justify-between sm:items-center border border-foreground/30 text-foreground/50 p-6 bg-dark-surface/50 cursor-not-allowed font-bold">
                                    <div className="flex items-center gap-6 mb-4 sm:mb-0">
                                        <span className="text-3xl opacity-30">◫</span>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase font-mono tracking-widest opacity-50 mb-1">VECTOR_ASSETS</span>
                                            <span className="text-lg sm:text-xl tracking-widest break-all">OFFICIAL_LOGOS.ZIP</span>
                                        </div>
                                    </div>
                                    <span className="flex items-center gap-4 font-mono text-[10px] uppercase">
                                        <span>(LOCKED)</span>
                                        <span className="border border-current px-4 py-2 border-dashed bg-background/10">UNAVAILABLE</span>
                                    </span>
                                </div>

                                {/* Press Photos */}
                                <div className="group flex flex-col sm:flex-row justify-between sm:items-center border border-foreground/30 text-foreground/50 p-6 bg-dark-surface/50 cursor-not-allowed font-bold">
                                    <div className="flex items-center gap-6 mb-4 sm:mb-0">
                                        <span className="text-3xl opacity-30">◉</span>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase font-mono tracking-widest opacity-50 mb-1">HIGH_RES_MEDIA</span>
                                            <span className="text-lg sm:text-xl tracking-widest break-all">PRESS_PHOTOS.ZIP</span>
                                        </div>
                                    </div>
                                    <span className="flex items-center gap-4 font-mono text-[10px] uppercase">
                                        <span>(LOCKED)</span>
                                        <span className="border border-current px-4 py-2 border-dashed bg-background/10">UNAVAILABLE</span>
                                    </span>
                                </div>

                            </div>

                            <div className="mt-auto border-t border-foreground pt-4 flex justify-between items-center text-[10px] uppercase opacity-50">
                                <span>AUTHORIZATION REQUIRED FOR REDISTRIBUTION</span>
                                <span>[ 014 ]</span>
                            </div>
                        </div>

                        {/* Right Col: Striking Imagery */}
                        <div className="w-full md:w-1/2 relative min-h-[400px] overflow-hidden group">
                            <Image src="/PAN08979.jpg" alt="Press Release Artwork" fill className="object-cover object-center grayscale-[50%] opacity-80" />
                            <div className="absolute inset-0 bg-background/20 z-0"></div>

                            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background/80 to-transparent z-10 pointer-events-none"></div>

                            <div className="absolute bottom-8 right-8 z-20 font-display text-4xl sm:text-6xl uppercase tracking-widest text-[#d8e3ce] drop-shadow-[0_0_15px_rgba(216,227,206,0.5)] text-right mix-blend-overlay opacity-30 pointer-events-none">
                                DATA<br />LOG
                            </div>
                        </div>

                    </div>
                </section>

                {/* Footer Area - Replicated from Homepage */}
                <footer className="flex flex-col bg-dark-surface relative z-20">
                    <div className="flex justify-between items-center px-4 py-2 text-[8px] uppercase border-y border-foreground whitespace-nowrap overflow-hidden tracking-widest">
                        <span>[X] SYS_DATA OK</span>
                        <span className="hidden sm:inline">// DECRYPTED //</span>
                        <span className="flex gap-4">
                            <span>SYS.PRINT</span>
                            <span className="animate-pulse">▼</span>
                            <span>TEC.READY</span>
                        </span>
                    </div>

                    <div className="py-6 flex justify-center bg-foreground text-background transition-colors hover:bg-[#c8d4b8] cursor-crosshair overflow-hidden">
                        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-widest uppercase relative scale-x-125 sm:scale-x-150 origin-center">
                            ANTARA
                        </h1>
                    </div>

                    <div className="flex justify-between items-center px-4 py-3 text-[10px] uppercase bg-dark-surface border-t-2 border-foreground font-mono font-bold">
                        <span className="opacity-80">COPYRIGHT DJ ANATRA {(new Date()).getFullYear()}</span>
                        <div className="flex gap-4 opacity-50">
                            <span className="hover:opacity-100 cursor-pointer">X-FADER CURVE.A</span>
                            <span className="hover:opacity-100 cursor-pointer hidden sm:block">SYNC.ON</span>
                            <span className="hover:opacity-100 cursor-pointer">MASTER.OUT</span>
                        </div>
                    </div>
                </footer>

            </main>
        </div>
    );
}
