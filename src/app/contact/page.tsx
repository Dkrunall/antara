import Image from "next/image";
import Clock from "@/components/Clock";

export default function Contact() {
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
                            <a href="/press" className="hover:text-[#c8d4b8] transition-colors">● ASSETS</a>
                            <a href="/studio" className="hover:text-[#c8d4b8] transition-colors">● STUDIO</a>
                            <span className="text-foreground/50 cursor-default">● CONTACT</span>
                        </span>
                        <span className="hidden sm:flex gap-2 tracking-widest leading-none">
                            <span>◆</span>
                            <span>SETLIST</span>
                        </span>
                        <span className="hidden sm:inline-block leading-none">CUE READY</span>
                    </div>
                </header>

                {/* --- CONTACT CONTENT --- */}
                <section className="flex flex-col flex-1 relative overflow-hidden min-h-[600px] md:min-h-[800px] border-b border-foreground">
                    <Image src="/PAN09575.jpg" alt="Cyberpunk background" fill className="object-cover z-0 grayscale-[50%] opacity-60 mix-blend-screen object-center pointer-events-none" />

                    <div className="relative z-20 flex flex-col items-center justify-center p-4 sm:p-24 flex-1 w-full font-mono mt-12 sm:mt-0">
                        <div className="border border-foreground bg-dark-surface/40 backdrop-blur-md p-6 sm:p-12 max-w-5xl w-full shadow-[10px_10px_0_rgba(216,227,206,1)]">

                            <div className="text-[10px] uppercase tracking-widest border-b border-foreground/50 pb-2 col-span-2 mb-8 text-[#c8d4b8] flex justify-between">
                                <span>// SECURE COMMS LINK INITIATED //</span>
                                <span className="hidden sm:inline animate-pulse">STATUS: ENCRYPTED</span>
                            </div>

                            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl uppercase tracking-widest font-black mb-12 drop-shadow-lg text-left">
                                BOOKING<br />INQUIRIES
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-24 mb-16">

                                {/* Column 1: Direct Contact */}
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-foreground/50 pb-2 flex justify-between">
                                        <span>DIRECT MGT</span>
                                        <span className="opacity-50">[01]</span>
                                    </h3>
                                    <ul className="text-xs sm:text-sm uppercase tracking-widest space-y-4 text-left font-bold">
                                        <li>
                                            <a href="mailto:djantara29@gmail.com" className="group flex flex-col border border-foreground/30 p-4 hover:bg-foreground hover:text-background transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--color-foreground)] bg-background/50 backdrop-blur-sm cursor-crosshair">
                                                <span className="text-[10px] opacity-70 group-hover:opacity-100 mb-2 font-mono flex justify-between">
                                                    <span>EMAIL.BOOKINGS</span>
                                                    <span>↗</span>
                                                </span>
                                                <span className="text-sm sm:text-base">djantara29@gmail.com</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+917710895192" className="group flex flex-col border border-foreground/30 p-4 hover:bg-foreground hover:text-background transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--color-foreground)] bg-background/50 backdrop-blur-sm cursor-crosshair">
                                                <span className="text-[10px] opacity-70 group-hover:opacity-100 mb-2 font-mono flex justify-between">
                                                    <span>PHONE.WHATSAPP</span>
                                                    <span>↗</span>
                                                </span>
                                                <span className="text-sm sm:text-base">+91 77108 95192</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 2: Network & Press */}
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-foreground/50 pb-2 flex justify-between">
                                        <span>NETWORK // FILES</span>
                                        <span className="opacity-50">[02]</span>
                                    </h3>
                                    <ul className="text-xs sm:text-sm uppercase tracking-widest space-y-4 text-left font-bold">
                                        <li>
                                            <a href="#" className="group flex flex-col border border-foreground/30 p-4 hover:bg-foreground hover:text-background transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--color-foreground)] bg-background/50 backdrop-blur-sm cursor-crosshair">
                                                <span className="text-[10px] opacity-70 group-hover:opacity-100 mb-2 font-mono flex justify-between">
                                                    <span>IG.SOCIAL</span>
                                                    <span>↗</span>
                                                </span>
                                                <span className="text-sm sm:text-base">@DJ_ANTARA</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="group flex flex-col border border-foreground/30 p-4 hover:bg-foreground hover:text-background transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--color-foreground)] bg-background/50 backdrop-blur-sm cursor-crosshair">
                                                <span className="text-[10px] opacity-70 group-hover:opacity-100 mb-2 font-mono flex justify-between">
                                                    <span>SC.MUSIC</span>
                                                    <span>↗</span>
                                                </span>
                                                <span className="text-sm sm:text-base break-words">SOUNDCLOUD.COM/DJANTARA</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/ANTARA2.pdf" target="_blank" rel="noopener noreferrer" className="group flex flex-col border border-[#c8d4b8] text-[#c8d4b8] p-4 hover:bg-[#c8d4b8] hover:text-background transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0_#c8d4b8] bg-background/80 backdrop-blur-sm cursor-pointer mt-8">
                                                <span className="text-[10px] opacity-80 group-hover:opacity-100 mb-2 font-mono flex justify-between">
                                                    <span>PRESSKIT.EPK</span>
                                                    <span className="animate-bounce">↓</span>
                                                </span>
                                                <span className="text-sm sm:text-base inline-flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
                                                    DOWNLOAD_EPK.PDF
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Decorative Barcode */}
                            <div className="w-full flex gap-1 h-8 opacity-20 mb-8 overflow-hidden pointer-events-none">
                                {[...Array(40)].map((_, i) => (
                                    <div key={i} className={`bg-foreground h-full ${Math.random() > 0.5 ? 'w-1' : Math.random() > 0.8 ? 'w-3' : 'w-2'}`}></div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center text-[10px] opacity-50 text-left uppercase">
                                <span>SYSTEM STANDBY. AWAITING TRANSMISSION.</span>
                                <span>[X]</span>
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
        </div >
    );
}
