import Image from "next/image";
import Clock from "@/components/Clock";

export default function About() {
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
                            <span className="text-foreground/50 cursor-default">● ABOUT</span>
                            <a href="/venues" className="hover:text-[#c8d4b8] transition-colors">● VENUES</a>
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
                        <span className="flex items-center gap-2"><span>ABOUT ANTARA</span></span>
                        <span className="flex items-center gap-2 text-[16px]">✪</span>
                        <span className="flex items-center gap-2"><span>MUMBAI ORIGINS</span></span>
                        <span className="flex items-center gap-2 text-[16px]">♞</span>
                        <span className="flex items-center gap-2"><span>TECHNO PIONEER</span></span>
                        <span className="flex items-center gap-2 text-[16px]">♥</span>
                        <span className="flex items-center gap-2"><span>GLOBAL STAGES</span></span>
                        <span className="flex items-center gap-2 text-[16px]">☠</span>
                        <span className="flex items-center gap-2"><span>LIVE & DIRECT</span></span>
                    </div>
                    <div className="flex animate-marquee shrink-0 gap-8 min-w-full justify-around items-center" aria-hidden="true">
                        <span className="flex items-center gap-2"><span>ABOUT ANTARA</span></span>
                        <span className="flex items-center gap-2 text-[16px]">✪</span>
                        <span className="flex items-center gap-2"><span>MUMBAI ORIGINS</span></span>
                        <span className="flex items-center gap-2 text-[16px]">♞</span>
                        <span className="flex items-center gap-2"><span>TECHNO PIONEER</span></span>
                        <span className="flex items-center gap-2 text-[16px]">♥</span>
                        <span className="flex items-center gap-2"><span>GLOBAL STAGES</span></span>
                        <span className="flex items-center gap-2 text-[16px]">☠</span>
                        <span className="flex items-center gap-2"><span>LIVE & DIRECT</span></span>
                    </div>
                </section>

                {/* --- FULL PAGE ABOUT HERO --- */}
                <section className="flex flex-col border-b border-foreground bg-background">
                    <div className="grid grid-cols-1 md:grid-cols-2 text-justify">

                        {/* Split Left: Massive Profile Image */}
                        <div className="border-b md:border-b-0 md:border-r border-foreground relative min-h-[500px] md:min-h-[800px] overflow-hidden group">
                            <Image src="/new/PAN09826.jpg" alt="DJ Antara Artist Profile" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 object-top" />
                            <div className="absolute inset-0 border-[4px] border-background mix-blend-overlay pointer-events-none"></div>

                            <div className="absolute bottom-6 left-6 font-display text-5xl md:text-8xl font-bold uppercase tracking-widest drop-shadow-lg text-foreground bg-background/50 px-4 py-2 backdrop-blur-sm">
                                MEET<br />ANTARA
                            </div>

                            {/* HUD element over image */}
                            <div className="absolute top-6 left-6 z-10 font-mono text-[10px] uppercase tracking-widest text-background bg-foreground px-3 py-1 drop-shadow-lg shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
                                ARTIST RECORD 029
                            </div>
                        </div>

                        {/* Split Right: Bio, Mission, and Technical Specs */}
                        <div className="p-8 md:p-12 font-mono flex flex-col bg-dark-surface relative no-scrollbar">
                            <div className="absolute top-2 right-4 text-[8px] uppercase tracking-widest opacity-50 border-b border-foreground/50 pb-1 w-full text-right shadow-[inset_0_-1px_0_rgba(0,0,0,0.5)]">
                                [SYS] DECRYPTING_BIOGRAPHY.TXT
                            </div>

                            <h2 className="font-display text-3xl uppercase tracking-widest font-bold mt-8 mb-6 decoration-1 underline underline-offset-8 decoration-foreground/30">
                                The Origin
                            </h2>

                            <div className="text-[12px] md:text-xs leading-relaxed uppercase opacity-80 space-y-6 mb-12">
                                <p>
                                    <strong className="text-[#c8d4b8] opacity-100 block mb-2 font-display tracking-widest text-lg">Hailing from Mumbai</strong>
                                    Her journey diving headfirst into the scene began by spinning for friends at local, underground parties. The raw, unfiltered energy of those early sets quickly transformed a deep-seated passion into a relentless profession.
                                </p>
                                <div className="w-full border-t border-foreground opacity-10"></div>
                                <p>
                                    Over the past year, DJ Antara has bypassed local circuit restrictions, breaking out internationally to electrify crowds in both Dubai and Mumbai. She brings a fundamentally unique sound to every set—a fusion of heavy basslines and technical precision.
                                </p>
                            </div>

                            <h2 className="font-display text-3xl uppercase tracking-widest font-bold mb-6 decoration-1 underline underline-offset-8 decoration-foreground/30">
                                Sound Philosophy
                            </h2>
                            <div className="text-[12px] md:text-xs leading-relaxed uppercase opacity-80 space-y-6 mb-12">
                                <p>
                                    <strong className="text-[#c8d4b8] opacity-100 block mb-2 font-display tracking-widest text-lg">She is a PowerHouse</strong>
                                    With a distinctive style, she takes her audience on an unforgettable journey, skillfully tapping into the energy of the moment. Her mixing relies on deep technical knowledge and a psychological understanding of crowd dynamics.
                                </p>
                                <div className="w-full border-t border-foreground opacity-10"></div>
                                <p>
                                    <strong className="text-[#c8d4b8] opacity-100 block mb-2 font-display tracking-widest text-lg">She Owns the Stage</strong>
                                    A true stage presence, she exudes passion, creating a lively and vibrant atmosphere. The deck is not just a tool; it's a command center for shaping audio realities.
                                </p>
                            </div>

                            {/* TECHNICAL DATA BLOCK */}
                            <div className="mt-auto pt-8 border-t border-foreground bg-background/50 p-6 backdrop-blur-md">
                                <div className="flex justify-between items-center border-b border-foreground/50 pb-2 mb-4">
                                    <span className="text-[10px] tracking-widest uppercase font-bold text-foreground">GEAR.SETUP // LIVE</span>
                                    <span className="text-[10px] animate-pulse text-foreground/70">SYNC</span>
                                </div>
                                <ul className="text-[10px] uppercase font-bold opacity-70 space-y-2">
                                    <li className="flex justify-between"><span>PRIMARY PLATFORM</span><span>CDJ-3000 x 4</span></li>
                                    <li className="flex justify-between"><span>MIXER</span><span>DJM-V10</span></li>
                                    <li className="flex justify-between"><span>HEADPHONES</span><span>SENNHEISER HD 25</span></li>
                                    <li className="flex justify-between"><span>PREFERRED BPM</span><span>124.0 - 132.0</span></li>
                                </ul>
                            </div>

                            <p className="text-xs md:text-sm leading-relaxed uppercase italic opacity-60 mt-12 border-l-4 border-foreground pl-4 font-bold tracking-wider">
                                "Elevating the scene and connecting with audiences around the world. No boundaries. Just Sound."
                            </p>

                        </div>
                    </div>
                </section>

                {/* --- NEW SECTION: EXTENDED GALLERY & PERFORMANCES --- */}
                <section className="flex flex-col border-b border-foreground bg-dark-surface">

                    <div className="flex justify-between items-center px-4 py-2 text-[10px] uppercase tracking-widest border-b border-foreground whitespace-nowrap overflow-hidden bg-background">
                        <span>// ARCHIVE //</span>
                        <span>VISUAL.LOG.014</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-h-[400px]">

                        {/* Extended Text Block */}
                        <div className="p-8 font-mono border-b sm:border-b-0 sm:border-r border-foreground flex flex-col justify-center bg-background/50">
                            <h2 className="font-display text-2xl uppercase tracking-widest font-bold mb-4 underline decoration-foreground/30 underline-offset-4">
                                The Breakthrough
                            </h2>
                            <div className="text-[10px] leading-relaxed uppercase opacity-80 space-y-4">
                                <p>
                                    Transitioning from underground warehouse raves to headlining established venues required a shift in both sound and stamina.
                                </p>
                                <p>
                                    Antara's sets became known for their relentless forward momentum—eschewing traditional drops for a continuous, hypnotic build that locks the dancefloor into a collective trance.
                                </p>
                                <p className="pt-4 border-t border-foreground text-[#c8d4b8] mt-auto font-bold opacity-100">
                                    <span className="animate-pulse mr-2">▶</span> CURRENT STATUS: TOURING
                                </p>
                            </div>
                        </div>

                        {/* Gallery Image 1 */}
                        <div className="border-b sm:border-b-0 sm:border-r lg:border-b-0 border-foreground relative min-h-[300px] sm:min-h-full overflow-hidden group">
                            <Image src="/new/PAN08912.jpg" alt="DJ Set Live" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 object-top" />
                            <div className="absolute inset-0 border-[2px] border-background mix-blend-overlay pointer-events-none"></div>
                            <div className="absolute top-4 left-4 font-mono text-[8px] uppercase bg-background px-2 py-1">LOG: 001</div>
                        </div>

                        {/* Gallery Image 2 */}
                        <div className="border-b sm:border-b-0 sm:border-r lg:border-b-0 border-foreground relative min-h-[300px] sm:min-h-full overflow-hidden group">
                            <Image src="/new/PAN08920.jpg" alt="Crowd View" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 object-center mix-blend-screen" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 right-4 font-mono text-[8px] uppercase bg-foreground text-background px-2 py-1 shadow-[2px_2px_0_rgba(0,0,0,0.5)]">LOG: 002</div>
                        </div>

                        {/* Gallery Image 3 */}
                        <div className="relative min-h-[300px] sm:min-h-full overflow-hidden group bg-background">
                            <Image src="/new/PAN09556.jpg" alt="Abstract Studio Gear" fill className="object-cover opacity-60 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700 object-center" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                                <h2 className="font-display text-4xl uppercase tracking-widest font-bold mb-4 drop-shadow-[0_0_15px_rgba(216,227,206,0.5)]">
                                    AURAL<br />ATTACK
                                </h2>
                                <div className="w-12 border-t border-foreground"></div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Secondary Abstract Image Break */}
                <section className="relative min-h-[500px] sm:min-h-[600px] border-b border-foreground flex items-center justify-center overflow-hidden">
                    <Image
                        src="/new/PAN09362.jpg"
                        alt="Cyberpunk Vertical"
                        fill
                        className="object-cover absolute inset-0 z-0 grayscale-[80%] brightness-[40%] contrast-125 object-center mix-blend-screen"
                    />
                    <div className="absolute inset-0 z-10 border-[0.5px] border-foreground/30 m-6 sm:m-12 rounded-[60px] pointer-events-none mix-blend-overlay"></div>

                    <div className="z-20 font-display text-2xl md:text-5xl font-bold uppercase tracking-widest text-[#d8e3ce] drop-shadow-[0_0_15px_rgba(216,227,206,0.5)] border-y border-current py-6 px-12 bg-background/40 backdrop-blur-sm">
                        GLOBAL BROADCAST // LIVE & DIRECT
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
