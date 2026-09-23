"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import Magnetic from "./Magnetic";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const hero = ref.current?.parentElement;
    const move = (event: PointerEvent) => {
      if (!hero || event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--spot-x", `${(event.clientX - rect.left) / rect.width * 100}%`);
      hero.style.setProperty("--spot-y", `${(event.clientY - rect.top) / rect.height * 100}%`);
      hero.style.setProperty("--spot-opacity", "1");
    };
    const leave = () => hero?.style.setProperty("--spot-opacity", "0");
    hero?.addEventListener("pointermove", move);
    hero?.addEventListener("pointerleave", leave);
    return () => { hero?.removeEventListener("pointermove", move); hero?.removeEventListener("pointerleave", leave); };
  }, []);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { if (media.matches) ref.current?.pause(); else void ref.current?.play().catch(() => {}); };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return <>
    <div className="hero-spotlight absolute inset-0 z-10 pointer-events-none" aria-hidden="true" />
    <video ref={ref} src="/antara-hero.mp4" poster="/media/hero-poster.webp" muted loop playsInline onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} className="object-cover absolute inset-0 z-0 w-full h-full object-center" />
    <Magnetic className="absolute top-4 left-4 z-20">
      <button type="button" onClick={() => { if (ref.current?.paused) void ref.current.play().catch(() => {}); else ref.current?.pause(); }} className="console-button console-button-outline">{playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}<span>{playing ? "Pause video" : "Play video"}</span></button>
    </Magnetic>
  </>;
}
