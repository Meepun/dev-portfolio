import { useEffect, useState } from 'react';

// Terminal background creates simulated commands based on the current page
export default function TerminalBackground({ page }) {
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    if (!page) return;

    setDisplayedLines(prev => [
      ...prev,
      `Orfevressu: ~/ terminate ${prev.length ? prev.at(-1)?.split(" ")[2] : "null"}`,
      `Orfevressu: ~/ display ${page}.jsx`
    ]);
  }, [page]);

  useEffect(() => {
    const el = document.getElementById('terminal-output');
    if (el) el.scrollTop = el.scrollHeight;
  }, [displayedLines]);

  return (
    <div id="terminal-output" className="absolute inset-0 bg-black text-green-400 font-mono text-sm p-4 overflow-hidden opacity-25 select-none pointer-events-none">
      {displayedLines.map((line, i) => (
        <div key={i} className="animate-fadeIn whitespace-pre">
          {`> ${line}`}
        </div>
      ))}
    </div>
  );
}
