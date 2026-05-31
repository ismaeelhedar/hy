import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-white/8 bg-[#111318] shadow-[0_18px_50px_rgba(0,0,0,0.18)]",
        className,
      )}
      {...props}
    />
  );
}
