import { useEffect, useState } from "react";

export default function TerminalBackground({ page }) {
  const [displayedText, setDisplayedText] = useState(""); // full text to render
  const [currentLine, setCurrentLine] = useState("");
  const [index, setIndex] = useState(0);

  // Generate terminal lines when page changes
  useEffect(() => {
    if (!page) return;
    const prevCommand = `Orfevressu: ~/ terminate ${displayedText ? displayedText.split("\n").at(-1)?.split(" ")[2] : "null"}`;
    const newCommand = `Orfevressu: ~/ display ${page}.jsx`;
    const combined = `${displayedText}\n> ${prevCommand}\n> ${newCommand}`;
    setDisplayedText(combined);
    setCurrentLine("");
    setIndex(0);
  }, [page]);

  // Typing animation
  useEffect(() => {
    if (!displayedText) return;
    const fullText = displayedText.split("\n").at(-1);
    if (!fullText) return;

    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 30); // Set Typing Speed
      return () => clearTimeout(timeout);
    }
  }, [index, displayedText]);

  return (
    <div
      id="terminal-output"
      className="absolute inset-0 bg-black text-green-400 font-mono text-sm p-4 
                 overflow-hidden opacity-25 select-none pointer-events-none"
    >
      {/* Render previously typed lines */}
      {displayedText
        .split("\n")
        .slice(0, -1)
        .map((line, i) => (
          <div key={i} className="animate-fadeIn whitespace-pre">
            {line}
          </div>
        ))}

      {/* Typing line with blinking cursor */}
      <div className="whitespace-pre">
        {`> ${currentLine}`}
        <span className="inline-block w-[0.6em] animate-blink">█</span>
      </div>
    </div>
  );
}
