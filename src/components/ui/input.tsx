import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-14 w-full rounded-[1.25rem] border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-white/24 focus:bg-white/8 focus:ring-2 focus:ring-white/10",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
