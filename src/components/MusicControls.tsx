"use client";

import { useEffect, useState } from "react";
import { AudioLines, Pause, Play, Volume2, VolumeX } from "lucide-react";
import AudioVisualizer from "./AudioVisualizer";
import Magnetic from "./Magnetic";

export default function MusicControls() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [error, setError] = useState("");
  const [lastVolume, setLastVolume] = useState(50);
  function changeVolume(value: number) {
    setVolume(value);
    if (value > 0) setLastVolume(value);
    const audio = document.getElementById("bg-music") as HTMLAudioElement | null;
    if (audio) audio.volume = value / 100;
  }
  useEffect(() => {
    const audio = document.getElementById("bg-music") as HTMLAudioElement | null;
    if (!audio) return;
    const sync = () => { setPlaying(!audio.paused); setVolume(Math.round(audio.volume * 100)); };
    audio.addEventListener("play", sync);
    audio.addEventListener("pause", sync);
    audio.addEventListener("volumechange", sync);
    return () => {
      audio.removeEventListener("play", sync);
      audio.removeEventListener("pause", sync);
      audio.removeEventListener("volumechange", sync);
    };
  }, []);
  async function toggle() {
    const audio = document.getElementById("bg-music") as HTMLAudioElement | null;
    if (!audio) return;
    setError("");
    if (!audio.paused) { audio.pause(); return; }
    audio.volume = volume / 100;
    const analysed = audio as HTMLAudioElement & { __audioContext?: AudioContext; __analyser?: AnalyserNode };
    try {
      if (!analysed.__audioContext) {
        const ctx = new AudioContext();
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 256;
        ctx.createMediaElementSource(audio).connect(analyser);
        analyser.connect(ctx.destination);
        analysed.__audioContext = ctx;
        analysed.__analyser = analyser;
      }
      await analysed.__audioContext.resume();
    } catch { /* Playback remains available without visual analysis. */ }
    document.querySelectorAll<HTMLVideoElement>('#live-moments video').forEach(video => video.pause());
    try { await audio.play(); } catch { setError("Music could not start. Please try again."); }
  }
  return (
    <section id="listen" aria-label="Music player" className="border-b border-foreground bg-dark-surface p-4 sm:px-8 scroll-mt-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4"><div className={`border p-3 transition-colors ${playing ? "border-foreground bg-foreground/10" : "border-foreground/25 text-foreground/50"}`}><AudioLines size={20} aria-hidden="true" /></div><div><p className="text-[10px] uppercase tracking-widest text-foreground/60 mb-1">Soundtrack / {playing ? "Playing" : "Standby"}</p><p className="text-xs uppercase tracking-widest">Pico De Amor</p></div></div>
        <div className="flex flex-wrap items-center gap-4">
          <Magnetic><button type="button" onClick={toggle} className="console-button min-w-40">{playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}<span>{playing ? "Pause music" : "Play music"}</span></button></Magnetic>
          <div className="flex items-center gap-3 border border-foreground/25 px-2">
            <button type="button" aria-label={volume === 0 ? "Unmute music" : "Mute music"} onClick={() => changeVolume(volume === 0 ? lastVolume : 0)} className="min-h-11 min-w-11 grid place-items-center hover:bg-foreground/10 transition-colors">{volume === 0 ? <VolumeX size={17} aria-hidden="true" /> : <Volume2 size={17} aria-hidden="true" />}</button>
            <input aria-label="Music volume" type="range" min="0" max="100" value={volume} onChange={event => changeVolume(Number(event.target.value))} className="console-range w-24 min-h-11" />
            <output className="w-8 text-[10px] tabular-nums" aria-label="Volume percentage">{volume}%</output>
          </div>
        </div>
      </div>
      <div className="h-14 mt-4 border border-foreground/20 bg-background overflow-hidden" aria-hidden="true"><AudioVisualizer className="w-full h-full" color="#c8d4b8" /></div>
      <p role="status" className="text-xs text-foreground/80">{error}</p>
    </section>
  );
}
