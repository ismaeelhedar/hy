import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[160px] w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-white/24 focus:bg-white/8 focus:ring-2 focus:ring-white/10",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
