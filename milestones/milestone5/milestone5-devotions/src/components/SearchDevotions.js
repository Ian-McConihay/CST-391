import React, { useState, useMemo } from "react";
import devotions from "../devotions.json";

export default function SearchDevotions() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return devotions.filter(d => d.title.toLowerCase().includes(q) || d.text.toLowerCase().includes(q));
  }, [query]);

  return (
    <div>
      <h2>Devotions</h2>
      <input
        className="form-control mb-3"
        placeholder="Search devotions..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list-group">
        {filtered.map(d => (
          <li key={d.id} className="list-group-item">
            <strong>{d.title}</strong> – {d.text}
          </li>
        ))}
      </ul>
    </div>
  );
}