"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize, Minimize, Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";

const folder = "/WhatsApp_2026-09-22_2357/";
const clips = [
  { file: "WhatsApp Video 2026-09-23 at 12.03.32 AM.mp4", title: "In the booth", poster: "/media/clip-1-poster.webp" },
  { file: "WhatsApp Video 2026-09-23 at 12.03.37 AM.mp4", title: "On the decks", poster: "/media/clip-2-poster.webp" },
  { file: "WhatsApp Video 2026-09-23 at 12.03.38 AM.mp4", title: "Facing the crowd", poster: "/media/clip-3-poster.webp" },
  { file: "WhatsApp Video 2026-09-23 at 12.03.41 AM.mp4", title: "After dark", poster: "/media/clip-4-poster.webp" },
];

function PerformanceClip({ file, title, poster, wide = false }: { file: string; title: string; poster: string; wide?: boolean }) {
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(100);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [notice, setNotice] = useState("");
  const formatTime = (value: number) => `${Math.floor(value / 60)}:${Math.floor(value % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () => {
      if (!visible || document.hidden || motion.matches) video.pause();
      else if (!userPaused.current) void video.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, { threshold: 0.35 });
    observer.observe(video);
    document.addEventListener("visibilitychange", update);
    motion.addEventListener("change", update);
    const syncFullscreen = () => setFullscreen(document.fullscreenElement === frameRef.current);
    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); motion.removeEventListener("change", update); document.removeEventListener("fullscreenchange", syncFullscreen); };
  }, []);

  async function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    setNotice("");
    userPaused.current = !video.paused;
    if (!video.paused) video.pause();
    else { try { await video.play(); } catch { setNotice("Playback could not start. Try again."); } }
  }
  function silenceOthers() {
    document.querySelectorAll<HTMLMediaElement>('video, audio').forEach(media => {
      if (media !== videoRef.current) { if (media instanceof HTMLVideoElement) media.muted = true; else media.pause(); }
    });
  }
  async function toggleFullscreen() {
    try {
      if (document.fullscreenElement === frameRef.current) await document.exitFullscreen();
      else await frameRef.current?.requestFullscreen();
    } catch { setNotice("Fullscreen is unavailable in this browser."); }
  }
  return <figure ref={frameRef} className="performance-player min-w-0 bg-black border border-foreground/25">
    <video ref={videoRef} muted loop playsInline preload="metadata" poster={poster} aria-label={title}
      onError={() => setFailed(true)}
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
      onTimeUpdate={event => setTime(event.currentTarget.currentTime)}
      onDurationChange={event => setDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0)}
      onVolumeChange={event => { setMuted(event.currentTarget.muted); setVolume(Math.round(event.currentTarget.volume * 100)); }}
      className={`block w-full object-contain ${wide ? "aspect-video" : "aspect-[464/832]"}`}
      src={encodeURI(folder + file)} />
    <div role="group" aria-label={`${title} controls`} className="bg-dark-surface px-3 pb-3 border-t border-foreground/25">
      <label className="block"><span className="sr-only">Seek {title}</span><input type="range" min="0" max={duration || 1} step="0.1" disabled={!duration} value={time} onChange={event => { if (videoRef.current) { videoRef.current.currentTime = Number(event.target.value); setTime(Number(event.target.value)); } }} className="video-seek w-full h-8" /></label>
      <div className="flex items-center justify-between gap-1">
        <button type="button" className="player-icon" aria-label={`${playing ? "Pause" : "Play"} ${title}`} onClick={togglePlay}>{playing ? <Pause size={17} /> : <Play size={17} />}</button>
        <button type="button" className="player-icon" aria-label={`Restart ${title}`} onClick={() => { if (videoRef.current) videoRef.current.currentTime = 0; }}><RotateCcw size={15} /></button>
        <span className="text-[9px] tabular-nums whitespace-nowrap text-foreground/70">{formatTime(time)} / {formatTime(duration)}</span>
        <button type="button" className="player-icon" aria-label={`${muted || volume === 0 ? "Unmute" : "Mute"} ${title}`} onClick={() => { const video = videoRef.current; if (!video) return; if (video.muted || video.volume === 0) { silenceOthers(); video.muted = false; if (!video.volume) video.volume = 0.5; } else video.muted = true; }}>{muted || volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}</button>
        <button type="button" className="player-icon" aria-label={`${fullscreen ? "Exit fullscreen" : "Fullscreen"} ${title}`} onClick={toggleFullscreen}>{fullscreen ? <Minimize size={17} /> : <Maximize size={17} />}</button>
      </div>
      <label className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-foreground/60 mt-1">Volume<input type="range" aria-label={`${title} volume`} min="0" max="100" value={muted ? 0 : volume} onChange={event => { const video = videoRef.current; if (!video) return; const value = Number(event.target.value); if (value > 0) silenceOthers(); video.volume = value / 100; video.muted = value === 0; }} className="video-seek min-w-0 w-full h-8" /></label>
    </div>
    <figcaption className="p-4 border-t border-foreground/15 bg-dark-surface text-[10px] uppercase tracking-widest flex items-center justify-between gap-2"><span>{title}</span><span className={`w-1.5 h-1.5 shrink-0 rounded-full ${playing ? "bg-[#c8d4b8]" : "bg-foreground/25"}`} aria-hidden="true" /></figcaption>
    <p role="status" className="text-xs px-3 bg-dark-surface">{notice}</p>
    {failed && <p role="status" className="p-4 text-xs">This clip could not load. <a href={encodeURI(folder + file)} className="underline">Open video directly</a></p>}
  </figure>;
}

export default function PerformanceVideos({ wide = false }: { wide?: boolean }) {
  return <section id="live-moments" aria-labelledby="live-moments-title" className="w-full border-b border-foreground bg-background">
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 p-4 sm:p-8 border-b border-foreground/25">
        <div><p className="text-[10px] uppercase tracking-widest text-foreground/60 mb-3">From the dancefloor</p><h2 id="live-moments-title" className="font-display text-2xl sm:text-4xl font-bold uppercase">Live moments</h2></div>
        <p className="text-xs text-foreground/70 max-w-xs leading-relaxed">A glimpse inside the set. Clips play silently as you explore. Turn on sound to listen.<span className="block sm:hidden mt-2 text-foreground/50">Swipe to browse →</span></p>
      </div>
      {wide ? <div className="w-full"><PerformanceClip file="WhatsApp Video 2026-09-22 at 11.09.27 PM.mp4" title="Under the lights" poster="/media/wide-clip-poster.webp" wide /></div> :
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-3 px-4 pb-2 sm:grid sm:grid-cols-2 sm:gap-0 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">{clips.map(clip => <div className="w-[82%] shrink-0 snap-center sm:w-full sm:shrink sm:min-w-0" key={clip.file}><PerformanceClip {...clip} /></div>)}</div>}
    </div>
  </section>;
}
