"use client";

import { useEffect, useRef, useState } from "react";
import { AudioLines, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";

const pads = [{ name: "Kick", key: "A", frequency: 140 }, { name: "Clap", key: "S", frequency: 1200 }, { name: "Hi-hat", key: "D", frequency: 8000 }, { name: "Tom", key: "F", frequency: 260 }];
function fillNoise(data: Float32Array) {
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
}

export default function DJPads() {
  const context = useRef<AudioContext | null>(null);
  const output = useRef<GainNode | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [hits, setHits] = useState([false, false, false, false]);
  const [volume, setVolume] = useState(45);
  const [message, setMessage] = useState("Your rhythm. Your rules.");
  useEffect(() => () => { timers.current.forEach(clearTimeout); void context.current?.close(); }, []);

  async function play(index: number) {
    try {
      if (!context.current) {
        context.current = new AudioContext();
        output.current = context.current.createGain();
        output.current.connect(context.current.destination);
      }
      const ctx = context.current;
      await ctx.resume();
      const master = output.current!;
      master.gain.setValueAtTime(volume / 100 * 0.45, ctx.currentTime);
      const gain = ctx.createGain();
      gain.connect(master);
      const now = ctx.currentTime;
      const length = index === 2 ? 0.07 : index === 1 ? 0.18 : 0.35;
      gain.gain.setValueAtTime(0.8, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + length);
      if (index === 1 || index === 2) {
        const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * length), ctx.sampleRate);
        const data = buffer.getChannelData(0);
        fillNoise(data);
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = index === 2 ? "highpass" : "bandpass";
        filter.frequency.value = pads[index].frequency;
        noise.connect(filter); filter.connect(gain);
        noise.onended = () => { noise.disconnect(); filter.disconnect(); gain.disconnect(); };
        noise.start(now); noise.stop(now + length);
      } else {
        const osc = ctx.createOscillator();
        osc.frequency.setValueAtTime(pads[index].frequency, now);
        osc.frequency.exponentialRampToValueAtTime(index === 0 ? 40 : 85, now + length);
        osc.connect(gain);
        osc.onended = () => { osc.disconnect(); gain.disconnect(); };
        osc.start(now); osc.stop(now + length);
      }
      setHits(previous => previous.map((hit, i) => i === index ? true : hit));
      setMessage(`${pads[index].name} triggered`);
      clearTimeout(timers.current[index]);
      timers.current[index] = setTimeout(() => setHits(previous => previous.map((hit, i) => i === index ? false : hit)), 160);
    } catch { setMessage("Audio could not start. Tap a pad to try again."); }
  }

  return <section aria-labelledby="pads-title" className="border-b border-foreground bg-dark-surface p-4 sm:p-8">
    <div className="flex flex-wrap justify-between items-end gap-5 mb-6">
      <div><p className="text-[10px] tracking-widest uppercase text-foreground/60 mb-3">Hands on / Drum console</p><h2 id="pads-title" className="font-display text-2xl sm:text-4xl font-bold uppercase">Make some noise</h2><p className="text-xs text-foreground/70 mt-3">Tap a pad. Or focus the console and play A / S / D / F.</p></div>
      <label className="text-[10px] uppercase tracking-widest flex items-center gap-3">Pad volume<input aria-label="Pad volume" className="console-range w-24 min-h-11" type="range" min="0" max="100" value={volume} onChange={event => { const value = Number(event.target.value); setVolume(value); if (output.current && context.current) output.current.gain.setTargetAtTime(value / 100 * 0.45, context.current.currentTime, 0.01); }} /></label>
    </div>
    <div role="group" aria-label="Playable drum pads. Use A S D F while focused." tabIndex={0} className="grid grid-cols-2 md:grid-cols-4 gap-3" onKeyDown={event => { if (event.repeat || event.altKey || event.ctrlKey || event.metaKey) return; const index = pads.findIndex(pad => pad.key.toLowerCase() === event.key.toLowerCase()); if (index >= 0) { event.preventDefault(); void play(index); } }}>
      {pads.map((pad, index) => <button key={pad.name} type="button" aria-label={`Play ${pad.name}`} aria-keyshortcuts={pad.key} onClick={() => void play(index)} className={`dj-pad relative min-h-36 sm:min-h-44 p-5 border text-left flex flex-col justify-between ${hits[index] ? "is-hit" : ""}`}>
        <span className="flex justify-between items-center"><AudioLines size={22} aria-hidden="true" /><kbd className="border border-current/40 px-2 py-1 text-xs">{pad.key}</kbd></span><span className="uppercase font-display font-bold text-lg mt-5">{pad.name}</span>
      </button>)}
    </div>
    <div className="flex flex-wrap justify-between items-center gap-3 mt-4"><p role="status" className="text-[10px] uppercase tracking-widest text-foreground/60">{message}</p><Magnetic><a href="/studio" className="console-button console-button-outline">Build a full beat <ArrowUpRight size={16} aria-hidden="true" /></a></Magnetic></div>
  </section>;
}
