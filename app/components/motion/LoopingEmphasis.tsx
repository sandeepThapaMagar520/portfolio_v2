"use client";

import { useEffect, useState } from "react";

const fullText = "working systems.";
const firstWord = "working";
const secondWord = "systems.";

const wait = (duration: number) => new Promise<void>((resolve) => {
  window.setTimeout(resolve, duration);
});

export function LoopingEmphasis() {
  const [workingText, setWorkingText] = useState(firstWord);
  const [systemsText, setSystemsText] = useState(secondWord);
  const [activeLine, setActiveLine] = useState<"working" | "systems" | null>(null);

  useEffect(() => {
    let cancelled = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return () => {
      cancelled = true;
    };

    const run = async () => {
      await wait(3600);

      while (!cancelled) {
        setActiveLine("systems");
        for (let length = secondWord.length - 1; length >= 0; length -= 1) {
          if (!cancelled) setSystemsText(secondWord.slice(0, length));
          await wait(62);
        }

        await wait(180);

        setActiveLine("working");
        for (let length = firstWord.length - 1; length >= 0; length -= 1) {
          if (!cancelled) setWorkingText(firstWord.slice(0, length));
          await wait(62);
        }

        await wait(420);

        for (let length = 1; length <= firstWord.length; length += 1) {
          if (!cancelled) setWorkingText(firstWord.slice(0, length));
          await wait(78);
        }

        await wait(180);

        setActiveLine("systems");
        for (let length = 1; length <= secondWord.length; length += 1) {
          if (!cancelled) setSystemsText(secondWord.slice(0, length));
          await wait(78);
        }

        setActiveLine(null);
        await wait(3900);
      }
    };

    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <span className="v2-hero-emphasis">
      <em aria-label={fullText} aria-live="off">
        <span className="v2-typing-line">
          {workingText || "\u00a0"}
          <i className={activeLine === "working" ? "is-active" : ""} aria-hidden="true" />
        </span>
        <span className="v2-typing-line">
          {systemsText || "\u00a0"}
          <i className={activeLine === "systems" ? "is-active" : ""} aria-hidden="true" />
        </span>
      </em>
    </span>
  );
}
