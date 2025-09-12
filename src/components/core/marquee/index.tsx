import * as React from "react";
import { cn } from "@/libs/utils";

export interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  gap?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 20,
  direction = "left",
  pauseOnHover = true,
  className,
  gap = 40,
}) => {
  return (
    <div
      className={cn(
        "relative flex overflow-hidden whitespace-nowrap",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 min-w-full",
          pauseOnHover ? "hover:[animation-play-state:paused]" : undefined
        )}
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          gap: `${gap}px`,
        }}
      >
        <div className="flex">{children}</div>
        <div className="flex">{children}</div>
      </div>
    </div>
  );
};
