import Image from "next/image";
import Clock from "@/components/Clock";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <Preloader />

      <main className="w-full border-x border-foreground flex flex-col min-h-screen relative overflow-hidden text-sm">

        {/* Top Header */}
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
          <div className="flex justify-between items-center px-4 py-2 text-[10px] uppercase border-b border-foreground bg-background">
            <span className="flex gap-4">
              <a href="#about" className="hover:text-[#c8d4b8] transition-colors">● ABOUT</a>
              <a href="#bio" className="hidden sm:inline hover:text-[#c8d4b8] transition-colors">● BIO</a>
              <a href="#genres" className="hover:text-[#c8d4b8] transition-colors">● MUSIC</a>
            </span>
            <span className="flex gap-2 tracking-widest">
              <span>◆</span>
              <span>SETLIST</span>
            </span>
            <span>CUE READY</span>
          </div>
        </header>

        {/* Hero Image Section */}
        <section className="relative w-full aspect-[3/4] sm:aspect-square border-b border-foreground flex flex-col justify-end p-4 group">
          <Image
            src="/PAN09463.jpg"
            alt="Cyberpunk Alleyway"
            fill
            className="object-cover absolute inset-0 z-0 grayscale-[50%] contrast-125 brightness-[60%] mix-blend-screen object-top"
            priority
          />
          {/* Decorative Overlays */}
          <div className="absolute top-4 right-4 z-10 text-[10px] text-right font-bold w-12">
            <div className="mb-2 tracking-widest">◢_◤</div>
            <div>REC</div>
            <div>[MIX]</div>
          </div>
          <div className="absolute top-4 right-20 sm:right-28 z-10 flex flex-col items-end">
            <div className="w-12 sm:w-16 border-t border-foreground mb-1"></div>
            <div className="w-6 sm:w-8 border-t border-foreground opacity-50"></div>
            <div className="mt-4 text-[7px] sm:text-[8px] tracking-widest uppercase text-right">
              GLOBAL BROADCAST<br />
              LIVE //
            </div>
          </div>

          <button className="z-10 bg-off-white text-background font-bold tracking-widest uppercase text-xs px-6 py-3 mt-auto self-start flex items-center justify-center border border-foreground transition-all hover:bg-background hover:text-foreground cursor-pointer ease-in-out duration-300 shadow-[4px_4px_0_var(--color-foreground)] active:shadow-none active:translate-y-1 active:translate-x-1">
            <span>♥</span>
            <span className="mx-4 font-display">CLICK TO EDIT</span>
            <span>♥</span>
          </button>
        </section>

        {/* Ticker Section */}
        <section className="border-b border-foreground overflow-hidden py-3 flex text-xs sm:text-sm uppercase font-display font-bold tracking-widest bg-dark-surface whitespace-nowrap">
          <div className="flex animate-marquee shrink-0 gap-8 min-w-full justify-around items-center">
            <span className="flex items-center gap-2"><span>DJ ANATRA</span></span>
            <span className="flex items-center gap-2 text-[16px]">✪</span>
            <span className="flex items-center gap-2"><span>LIVE & DIRECT</span></span>
            <span className="flex items-center gap-2 text-[16px]">♞</span>
            <span className="flex items-center gap-2"><span>TECHNO</span></span>
            <span className="flex items-center gap-2 text-[16px]">♥</span>
            <span className="flex items-center gap-2"><span>AFRO HOUSE</span></span>
            <span className="flex items-center gap-2 text-[16px]">☠</span>
            <span className="flex items-center gap-2"><span>MUMBAI TO DUBAI</span></span>
          </div>
          <div className="flex animate-marquee shrink-0 gap-8 min-w-full justify-around items-center" aria-hidden="true">
            <span className="flex items-center gap-2"><span>DJ ANATRA</span></span>
            <span className="flex items-center gap-2 text-[16px]">✪</span>
            <span className="flex items-center gap-2"><span>LIVE & DIRECT</span></span>
            <span className="flex items-center gap-2 text-[16px]">♞</span>
            <span className="flex items-center gap-2"><span>TECHNO</span></span>
            <span className="flex items-center gap-2 text-[16px]">♥</span>
            <span className="flex items-center gap-2"><span>AFRO HOUSE</span></span>
            <span className="flex items-center gap-2 text-[16px]">☠</span>
            <span className="flex items-center gap-2"><span>MUMBAI TO DUBAI</span></span>
          </div>
        </section>

        {/* Cinematic Data Grid (Replaces Middle Content) */}
        <section className="relative w-full min-h-[500px] border-b border-foreground flex flex-col justify-end p-4 sm:p-8">
          <Image
            src="/PAN08986.jpg"
            alt="DJ Studio Setup"
            fill
            className="object-cover absolute inset-0 z-0 grayscale-[30%] brightness-[40%] mix-blend-screen object-center"
          />

          <div className="relative z-10 w-full max-w-2xl">
            <div className="bg-background/90 border border-foreground p-6 backdrop-blur-md">
              <div className="flex justify-between items-center border-b border-foreground/50 pb-2 mb-4">
                <span className="text-[10px] tracking-widest uppercase font-bold text-foreground">MIX.OVERRIDE // L-R</span>
                <span className="text-[10px] animate-pulse text-foreground/70">REC</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-widest font-bold mb-4 drop-shadow-md leading-none">
                BREAKING<br />DATA
              </h2>

              <div className="text-xs font-mono uppercase leading-relaxed opacity-80 space-y-2">
                <p>&gt; CONNECTING TO SOUNDSCAPE...</p>
                <p>&gt; UPLOADING NEW MIXES... SUCCESS.</p>
                <p>&gt; FREQUENCY SYNCHRONIZED.</p>
              </div>
            </div>

            {/* Small decorative tags */}
            <div className="mt-4 flex gap-2">
              <span className="bg-foreground text-background text-[10px] uppercase tracking-widest font-bold px-3 py-1 shadow-[2px_2px_0_rgba(0,0,0,0.5)]">MASTER</span>
              <span className="border border-foreground text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-background/50 backdrop-blur-sm shadow-[2px_2px_0_rgba(0,0,0,0.5)]">LIVE</span>
            </div>
          </div>
        </section>

        {/* Phase One & Tech Details (Combined & Simplified) */}
        <section className="grid grid-cols-1 md:grid-cols-3 border-b border-foreground bg-dark-surface/50">

          {/* Abstract Image / Graphic Column */}
          <div className="border-b md:border-b-0 md:border-r border-foreground relative min-h-[250px] overflow-hidden group">
            <Image src="/PAN08979.jpg" alt="Abstract Textures" fill className="object-cover opacity-60 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full stroke-foreground/40 fill-none mix-blend-screen pointer-events-none p-4" strokeWidth="0.5">
              <circle cx="50" cy="50" r="20" strokeDasharray="2 2" />
              <circle cx="50" cy="50" r="40" strokeDasharray="4 2" />
              <line x1="10" y1="50" x2="90" y2="50" opacity="0.3" />
              <line x1="50" y1="10" x2="50" y2="90" opacity="0.3" />
            </svg>

            <div className="absolute bottom-4 left-4 font-display text-2xl uppercase tracking-widest font-bold z-10 drop-shadow-md">
              PHASE ONE
            </div>
          </div>

          {/* Console / terminal col */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-foreground font-mono flex flex-col justify-between relative bg-background/30 backdrop-blur-sm">
            <div className="absolute top-2 right-4 text-[8px] uppercase tracking-widest opacity-50">.WAV File</div>
            <div className="text-[10px] uppercase w-full opacity-80 leading-relaxed z-10 mt-6">
              [ANALYZING FREQUENCY]<br /><br />
              PREPARE FOR AUDIO DROP.<br />
              AWAITING CROWD RESPONSE.<br />
              <br />
              <span className="text-foreground border-b border-foreground/50 pb-1 inline-block mb-4">SYNC BPM</span>
            </div>

            <div className="mt-8 flex justify-between items-end border-t border-foreground pt-4 opacity-70 text-[8px] z-10">
              <span>LOW // MID // HIGH</span>
              <div className="animate-pulse w-2 h-2 bg-foreground rounded-full"></div>
            </div>
          </div>

          {/* Action Col */}
          <div className="p-6 font-mono flex flex-col justify-center items-start relative overflow-hidden group hover:bg-foreground hover:text-background transition-colors cursor-pointer text-left h-[250px] sm:h-auto">
            <div className="absolute top-4 right-4 opacity-20 font-display text-6xl group-hover:opacity-10 transition-opacity pointer-events-none">
              ◢◤
            </div>
            <h3 className="font-bold underline underline-offset-4 mb-4 decoration-1 text-sm z-10 relative">LATEST MIXTAPE</h3>
            <div className="text-[10px] leading-relaxed opacity-80 uppercase z-10 relative">
              LISTEN TO THE SOUND<br />
              ZAMNA AFTERPARTY SET<br />
              AUDIO STREAM READY...<br />
              CLICK TO EXECUTE
            </div>

            <div className="mt-8 z-10 relative">
              <div className="w-10 h-10 border border-current flex items-center justify-center p-1 rounded-sm">
                <div className="w-full h-full border border-current mix-blend-difference rounded-sm"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW SECTION: ABOUT DJ & BIO --- */}
        <section id="about" className="flex flex-col border-b border-foreground bg-background">
          {/* Header Bar */}
          <div className="flex justify-between items-center px-4 py-1 text-[10px] uppercase tracking-widest border-b border-foreground bg-dark-surface whitespace-nowrap overflow-hidden">
            <span>// PROFILE //</span>
            <span className="animate-pulse">SPINNING...</span>
            <span>ARTIST: ANTARA 029</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 text-justify">
            {/* Image Col (New) - Dominates 2/3 of space */}
            <div className="sm:col-span-2 border-b sm:border-b-0 sm:border-r border-foreground relative min-h-[500px] overflow-hidden group">
              <Image src="/PAN09138.jpg" alt="DJ Antara" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 object-center" />
              <div className="absolute inset-0 border-[4px] border-background mix-blend-overlay pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 font-display text-4xl sm:text-6xl font-bold uppercase tracking-widest bg-background/80 px-4 py-2 backdrop-blur-sm">
                ANTARA
              </div>
            </div>

            {/* ABOUT & BIO Combos - Takes up 1/3 of space */}
            <div className="p-6 font-mono flex flex-col bg-dark-surface relative overflow-y-auto max-h-[400px] sm:max-h-[600px] no-scrollbar">
              <div className="absolute top-2 right-4 text-[8px] uppercase tracking-widest opacity-50">PRESSKIT.TXT</div>

              <h2 className="font-display text-xl uppercase tracking-widest font-bold mb-4">About</h2>
              <div className="text-[9px] leading-relaxed uppercase opacity-80 space-y-3 mb-8">
                <p>
                  <strong className="text-foreground opacity-100 block mb-1">She is a PowerHouse</strong>
                  With a distinctive style, she takes her audience on an unforgettable journey, skillfully tapping into the energy of the moment.
                </p>
                <div className="w-4 border-t border-foreground opacity-30"></div>
                <p>
                  <strong className="text-foreground opacity-100 block mb-1">She Owns the Stage</strong>
                  A true stage presence, she exudes passion, creating a lively and vibrant atmosphere.
                </p>
              </div>

              <h2 id="bio" className="font-display text-xl uppercase tracking-widest font-bold mb-4">Bio</h2>
              <div className="text-[9px] leading-relaxed uppercase opacity-80">
                <p className="mb-3">
                  Hailing from Mumbai, her journey began spinning for friends at local parties, but her passion quickly transformed into a profession.
                </p>
                <p>
                  Over the past year, DJ Antara has electrified crowds in both Dubai and Mumbai, bringing her unique sound to every set.
                </p>
              </div>

              <p className="text-[9px] leading-relaxed uppercase italic opacity-60 mt-6 border-l-2 border-foreground pl-3">
                "Elevating the scene and connecting with audiences around the world."
              </p>
            </div>
          </div>
        </section>

        {/* --- NEW SECTION: GENRES, VENUES & BOOKING --- */}
        <section id="genres" className="grid grid-cols-1 sm:grid-cols-2 border-b border-foreground text-[10px] uppercase tracking-widest bg-background h-auto sm:h-[500px]">

          {/* Left Column: Genres & Bookings */}
          <div className="border-b sm:border-b-0 sm:border-r border-foreground flex flex-col relative overflow-hidden group min-h-[350px] sm:min-h-0">

            {/* Dark abstract bg for left col */}
            <div className="absolute inset-0 z-0">
              <Image src="/PAN09257.jpg" alt="DJ Set Abstract" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale mix-blend-screen" />
            </div>

            {/* Genres container */}
            <div className="p-8 flex-grow flex flex-col justify-end items-start text-left z-10">
              <div className="font-display text-5xl sm:text-6xl font-bold flex flex-col gap-1 drop-shadow-md">
                <span className="bg-background text-foreground px-3 py-1 mb-1 shadow-[2px_2px_0_var(--color-foreground)] -rotate-1 w-max">TECHNO</span>
                <span className="bg-background text-foreground px-3 py-1 shadow-[2px_2px_0_var(--color-foreground)] rotate-2 w-max">TRANCE</span>
                <span className="bg-foreground text-background px-3 py-1 mt-2 rotate-1 w-max text-3xl sm:text-4xl">AFRO HOUSE</span>
              </div>
            </div>

            {/* Booking Details floating block */}
            <div className="absolute top-4 right-4 p-4 bg-background/90 group-hover:bg-foreground group-hover:text-background transition-colors border border-foreground backdrop-blur-sm z-10 w-48 shadow-lg">
              <div className="font-bold underline underline-offset-4 mb-2 decoration-1 text-xs">BOOKING</div>
              <div className="font-mono mt-3 opacity-90 text-[8px]">
                <a href="mailto:djantara29@gmail.com" className="hover:underline block break-words">&gt; djantara29@gmail.com</a>
                <a href="tel:+91771089519" className="hover:underline block mt-1">&gt; +91 77108 9519</a>
              </div>
            </div>
          </div>

          {/* Right Column: Venues Played (also image heavy) */}
          <div className="p-6 font-mono relative overflow-y-auto no-scrollbar text-left group">
            {/* Make the picture clearly visible, not just a subtle background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Image src="/PAN09393.jpg" alt="Venue Background" fill className="object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
            </div>

            {/* Background decoration */}
            <div className="absolute right-0 top-0 opacity-10 font-display text-8xl font-black pointer-events-none select-none -translate-y-2 translate-x-2 z-0 mix-blend-overlay">VNU</div>

            <div className="font-bold underline underline-offset-4 mb-8 sticky top-0 z-10 py-2 text-sm drop-shadow-md">VENUES PLAYED</div>

            <ul className="space-y-4 font-bold opacity-90 z-10 relative text-[9px] drop-shadow-sm">
              <li className="flex items-start gap-2 pb-2 border-b border-foreground/30"><span className="text-foreground">►</span> ZAMNA Afterparty @ Socials, Mumbai</li>
              <li className="flex items-start gap-2"><span className="text-foreground">►</span> TECHNO NIGHT @ ICY Dubai</li>
              <li className="flex items-start gap-2"><span className="text-foreground">►</span> Afro Night @ Icy Dubai</li>
              <li className="flex items-start gap-2"><span className="text-foreground">►</span> Techno Blast @ BaarBar, Dubai</li>
              <li className="flex items-start gap-2"><span className="text-foreground">►</span> Techno Night @ Pitch</li>
              <li className="flex items-start gap-2"><span className="text-foreground">►</span> Over The Horizon @ Raasta Rooftop, Mumbai</li>
              <li className="flex items-start gap-2"><span className="text-foreground">►</span> Femme Fatale @ Peninsula Grand Hotel, Mumbai</li>
              <li className="flex items-start gap-2"><span className="text-foreground">►</span> Count Countdown @ HiPitch, Mumbai</li>
              <li className="flex items-start gap-2"><span className="text-foreground">►</span> After Hours @ Social, Mumbai</li>
            </ul>
          </div>
        </section>

        {/* Small Ticker Bar */}
        <div className="flex justify-between items-center px-4 py-1 text-[10px] uppercase tracking-widest border-b border-foreground bg-background whitespace-nowrap overflow-hidden">
          <span className="flex animate-marquee gap-8 w-full">
            <span>[ 014 ]</span>
            <span>SYSTEM</span>
            <span>DATA</span>
            <span>LOG</span>
            <span>[ 014 ]</span>
            <span>SYSTEM</span>
            <span>DATA</span>
            <span>LOG</span>
          </span>
        </div>

        {/* Up To Speed Module */}
        <section className="relative min-h-[500px] sm:min-h-[600px] border-b border-foreground flex items-center justify-center overflow-hidden">
          <Image
            src="/PAN09071.jpg"
            alt="Cyberpunk Vertical"
            fill
            className="object-cover absolute inset-0 z-0 grayscale-[80%] brightness-[60%] contrast-125 object-center"
          />
          <div className="absolute inset-0 z-10 border-[0.5px] border-foreground/30 m-6 sm:m-12 rounded-[60px] pointer-events-none mix-blend-overlay"></div>

          <div className="z-20 font-display text-4xl sm:text-7xl font-bold uppercase tracking-widest text-[#d8e3ce] drop-shadow-[0_0_15px_rgba(216,227,206,0.5)]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            UP TO SPEED
          </div>

          <div className="absolute top-8 left-8 z-20 font-display text-3xl opacity-50">
            [ 14 ]
          </div>

          <div className="absolute bottom-8 right-8 z-20 text-[10px] uppercase font-mono max-w-[150px] text-right bg-background/80 p-2 border border-foreground backdrop-blur-sm">
            [14] INITIATING...<br />
            [SYS] DECRYPTING AUDIO LOG<br />
            PLAYBACK: AUTO
          </div>
        </section>

        {/* Footer Area */}
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
