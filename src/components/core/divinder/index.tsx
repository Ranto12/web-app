import { cn } from "@/libs/utils";
import React from "react";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  thickness?: number;
  color?: string;
  length?: string;
}

const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  className,
  thickness = 1,
  color = "#E5E5E5",
  length = "full",
}) => {
  const isHorizontal = orientation === "horizontal";

  const style = {
    backgroundColor: color,
    ...(isHorizontal
      ? { height: `${thickness}px`, width: length === "full" ? "100%" : length }
      : { width: `${thickness}px`, height: length === "full" ? "100%" : length }),
  };

  return <div className={cn(className)} style={style} />;
};

export default Divider;