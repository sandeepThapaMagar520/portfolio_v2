"use client";

import { Sparkles } from "lucide-react";
import { useRef } from "react";
import type { PointerEvent } from "react";

const disciplines = [
  "Lead the People",
  "Shape the Product",
  "Build the System",
  "Improve the Process",
  "Align the Team",
  "Deliver the Outcome",
];

const duration = 25;

export function DisciplineTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, pointerId: 0, startX: 0, trackX: 0, sequenceWidth: 0 });

  const finishDrag = (event: PointerEvent<HTMLElement>) => {
    const track = trackRef.current;
    if (!track || !drag.current.active || event.pointerId !== drag.current.pointerId) return;

    drag.current.active = false;
    event.currentTarget.classList.remove("is-dragging");
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const progress = Math.min(1, Math.max(0, -drag.current.trackX / drag.current.sequenceWidth));
    track.style.animation = "";
    track.style.animationDelay = `${-(progress * duration)}s`;
    track.style.transform = "";
  };

  return (
    <section
      className="v2-ticker"
      aria-label="Professional disciplines"
      onPointerDown={(event) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;
        const track = trackRef.current;
        const sequence = track?.querySelector<HTMLElement>(".v2-ticker-sequence");
        if (!track || !sequence) return;

        const matrix = new DOMMatrixReadOnly(getComputedStyle(track).transform);
        drag.current = {
          active: true,
          pointerId: event.pointerId,
          startX: event.clientX,
          trackX: matrix.m41,
          sequenceWidth: sequence.getBoundingClientRect().width,
        };

        event.currentTarget.classList.add("is-dragging");
        event.currentTarget.setPointerCapture(event.pointerId);
        track.style.animation = "none";
        track.style.transform = `translate3d(${drag.current.trackX}px,0,0)`;
      }}
      onPointerMove={(event) => {
        const track = trackRef.current;
        if (!track || !drag.current.active || event.pointerId !== drag.current.pointerId) return;

        let nextX = drag.current.trackX + event.clientX - drag.current.startX;
        while (nextX > 0) nextX -= drag.current.sequenceWidth;
        while (nextX <= -drag.current.sequenceWidth) nextX += drag.current.sequenceWidth;
        drag.current.trackX = nextX;
        drag.current.startX = event.clientX;
        track.style.transform = `translate3d(${nextX}px,0,0)`;
      }}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
    >
      <div className="v2-ticker-track" ref={trackRef}>
        <div className="v2-ticker-sequence">
          {disciplines.map(item => (
            <span key={item}><Sparkles aria-hidden="true" />{item}</span>
          ))}
        </div>
        <div className="v2-ticker-sequence" aria-hidden="true">
          {disciplines.map(item => (
            <span key={item}><Sparkles aria-hidden="true" />{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
