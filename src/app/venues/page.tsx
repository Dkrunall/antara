import Image from "next/image";
import Clock from "@/components/Clock";

export default function Venues() {
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
                            <span className="text-foreground/50 cursor-default">● VENUES</span>
                            <a href="/press" className="hover:text-[#c8d4b8] transition-colors">● ASSETS</a>
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

                {/* Ticker Section */}
                <section className="border-b border-foreground overflow-hidden py-3 flex text-xs sm:text-sm uppercase font-display font-bold tracking-widest bg-dark-surface whitespace-nowrap">
                    <div className="flex animate-marquee shrink-0 gap-8 min-w-full justify-around items-center">
                        <span className="flex items-center gap-2"><span>GLOBAL DOMINATION</span></span>
                        <span className="flex items-center gap-2 text-[16px]">✪</span>
                        <span className="flex items-center gap-2"><span>SOLD OUT</span></span>
                        <span className="flex items-center gap-2 text-[16px]">♞</span>
                        <span className="flex items-center gap-2"><span>HEADLINER</span></span>
                        <span className="flex items-center gap-2 text-[16px]">♥</span>
                        <span className="flex items-center gap-2"><span>MAIN STAGE</span></span>
                        <span className="flex items-center gap-2 text-[16px]">☠</span>
                        <span className="flex items-center gap-2"><span>TOUR DATES</span></span>
                    </div>
                    <div className="flex animate-marquee shrink-0 gap-8 min-w-full justify-around items-center" aria-hidden="true">
                        <span className="flex items-center gap-2"><span>GLOBAL DOMINATION</span></span>
                        <span className="flex items-center gap-2 text-[16px]">✪</span>
                        <span className="flex items-center gap-2"><span>SOLD OUT</span></span>
                        <span className="flex items-center gap-2 text-[16px]">♞</span>
                        <span className="flex items-center gap-2"><span>HEADLINER</span></span>
                        <span className="flex items-center gap-2 text-[16px]">♥</span>
                        <span className="flex items-center gap-2"><span>MAIN STAGE</span></span>
                        <span className="flex items-center gap-2 text-[16px]">☠</span>
                        <span className="flex items-center gap-2"><span>TOUR DATES</span></span>
                    </div>
                </section>

                {/* --- VENUES CONTENT --- */}
                <section className="flex flex-col border-b border-foreground bg-background">
                    <div className="flex flex-col sm:flex-row min-h-[600px] md:min-h-[800px]">

                        {/* Left Col: Terminal / Venue Log */}
                        <div className="w-full sm:w-1/2 md:w-5/12 border-b sm:border-b-0 sm:border-r border-foreground p-6 sm:p-12 font-mono flex flex-col bg-dark-surface">
                            <div className="flex justify-between items-center border-b border-foreground/50 pb-2 mb-8">
                                <span className="text-[10px] tracking-widest uppercase font-bold text-foreground">ARCHIVE // LOCATIONS</span>
                                <span className="text-[10px] animate-pulse text-foreground/70 text-[#c8d4b8]">LIVE</span>
                            </div>

                            <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-widest font-bold mb-8">
                                Venues<br />Played
                            </h2>

                            <ul className="text-xs sm:text-sm uppercase space-y-4 mb-12 opacity-80 decoration-1 underline-offset-4 decoration-foreground/30">
                                <li className="flex justify-between border-b border-foreground/30 pb-2 hover:bg-foreground hover:text-background p-2 transition-colors cursor-crosshair"><span>SOHO GARDENS</span><span className="opacity-50">DUBAI</span></li>
                                <li className="flex justify-between border-b border-foreground/30 pb-2 hover:bg-foreground hover:text-background p-2 transition-colors cursor-crosshair"><span>SOHO BEACH</span><span className="opacity-50">DUBAI</span></li>
                                <li className="flex justify-between border-b border-foreground/30 pb-2 hover:bg-foreground hover:text-background p-2 transition-colors cursor-crosshair"><span>HIVE</span><span className="opacity-50">DUBAI</span></li>
                                <li className="flex justify-between border-b border-foreground/30 pb-2 hover:bg-foreground hover:text-background p-2 transition-colors cursor-crosshair"><span>1 OAK</span><span className="opacity-50">DUBAI</span></li>
                                <li className="flex justify-between border-b border-foreground/30 pb-2 hover:bg-foreground hover:text-background p-2 transition-colors cursor-crosshair"><span>O1NE</span><span className="opacity-50">DUBAI</span></li>
                                <li className="flex justify-between border-b border-foreground/30 pb-2 hover:bg-foreground hover:text-background p-2 transition-colors cursor-crosshair"><span>BURLSQU</span><span className="opacity-50">DUBAI</span></li>
                                <li className="flex justify-between border-b border-foreground/30 pb-2 hover:bg-foreground hover:text-background p-2 transition-colors cursor-crosshair"><span>SECRET WEAPON</span><span className="opacity-50">DUBAI</span></li>
                                <li className="flex justify-between border-b border-foreground/30 pb-2 hover:bg-foreground hover:text-background p-2 transition-colors cursor-crosshair"><span>PENTHOUSE</span><span className="opacity-50">DUBAI</span></li>
                                <li className="flex justify-between border-b border-foreground/30 pb-2 hover:bg-foreground hover:text-background p-2 transition-colors cursor-crosshair"><span>STK DOWNTOWN</span><span className="opacity-50">DUBAI</span></li>
                                <li className="flex justify-between border-b border-foreground/30 pb-2 hover:bg-foreground hover:text-background p-2 transition-colors cursor-crosshair text-[#c8d4b8] opacity-100 font-bold"><span>DIABLO</span><span className="opacity-50">MUMBAI</span></li>
                                <li className="flex justify-between border-b border-foreground/30 pb-2 hover:bg-foreground hover:text-background p-2 transition-colors cursor-crosshair text-[#c8d4b8] opacity-100 font-bold"><span>DRAGONFLY</span><span className="opacity-50">MUMBAI</span></li>
                                <li className="flex justify-between border-b border-foreground/30 pb-2 hover:bg-foreground hover:text-background p-2 transition-colors cursor-crosshair text-[#c8d4b8] opacity-100 font-bold"><span>MITRON</span><span className="opacity-50">MUMBAI</span></li>
                            </ul>

                            <div className="mt-auto border-t border-foreground pt-4 flex flex-col">
                                <span className="text-[10px] tracking-widest text-[#c8d4b8] mb-1 font-bold">NEW_LOG_ENTRY</span>
                                <span className="text-[8px] opacity-50 uppercase">MORE LOCATIONS TO BE DISCLOSED...</span>
                            </div>
                        </div>

                        {/* Right Col: Massive Imagery */}
                        <div className="w-full sm:w-1/2 md:w-7/12 relative min-h-[400px] overflow-hidden group">
                            <Image src="/new/PAN09393.jpg" alt="Massive club crowd" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 object-center mix-blend-screen" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 border-[2px] sm:border-[4px] border-background mix-blend-overlay pointer-events-none"></div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center mix-blend-overlay">
                                <span className="text-[150px] md:text-[250px] font-display font-black leading-none opacity-20">GIGS</span>
                            </div>

                            <div className="absolute bottom-6 sm:bottom-12 right-6 sm:right-12 font-display text-2xl sm:text-4xl uppercase tracking-widest text-[#d8e3ce] drop-shadow-[0_0_15px_rgba(216,227,206,0.5)] text-right">
                                THE MAIN<br />STAGE
                            </div>
                        </div>

                    </div>
                </section>

                {/* Footer Area - Replicated from Homepage */}
                <footer className="flex flex-col bg-dark-surface">
                    <div className="flex justify-between items-center px-4 py-2 text-[8px] uppercase border-b border-foreground whitespace-nowrap overflow-hidden tracking-widest">
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
