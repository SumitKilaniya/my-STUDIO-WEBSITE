import type { ReactNode } from "react";

export function Marquee({
  direction = "left",
  children,
  className = "",
}: {
  direction?: "left" | "right";
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`marquee-pause overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${direction === "left" ? "marquee-track-left" : "marquee-track-right"}`}
      >
        <div className="flex shrink-0 items-stretch">{children}</div>
        <div className="flex shrink-0 items-stretch" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}