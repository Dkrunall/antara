"use client";

import { useId, useState } from "react";

export default function VenueExplorer({ venues }: { venues: { name: string; city: string }[] }) {
  const [city, setCity] = useState("All");
  const [query, setQuery] = useState("");
  const id = useId();
  const visible = venues.filter(venue => (city === "All" || venue.city === city) && `${venue.name} ${venue.city}`.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <div className="relative z-10 mb-8 text-xs">
      <div role="group" aria-label="Filter venues by city" className="flex flex-wrap gap-2 mb-4">
        {["All", ...new Set(venues.map(venue => venue.city))].map(option => (
          <button key={option} type="button" aria-pressed={city === option} onClick={() => setCity(option)} className={`min-h-11 border px-4 transition-colors ${city === option ? "bg-foreground text-background" : "bg-background hover:bg-foreground/10"}`}>
            {option}
          </button>
        ))}
      </div>
      <label htmlFor={id} className="block mb-2">Find a venue</label>
      <input id={id} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by name or city" className="w-full min-h-11 border border-foreground/50 bg-background px-3 text-foreground placeholder:text-foreground/50" />
      <p role="status" className="my-4 text-foreground/70">{visible.length} of {venues.length} venues</p>
      <ul className="space-y-3">
        {visible.map(venue => <li key={`${venue.name}-${venue.city}`} className="flex justify-between gap-4 border-b border-foreground/20 pb-3"><span>{venue.name}</span><span className="text-foreground/60 shrink-0">{venue.city}</span></li>)}
      </ul>
      {visible.length === 0 && <div className="border border-foreground/30 p-4"><p>No venues match your search.</p><button type="button" className="underline min-h-11" onClick={() => { setQuery(""); setCity("All"); }}>Clear filters</button></div>}
    </div>
  );
}
