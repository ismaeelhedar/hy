import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-4 text-white">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/35">404</p>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white">
          This case study doesn&apos;t exist.
        </h1>
        <p className="mt-4 text-base leading-8 text-white/58">
          The page you requested is not part of the current portfolio system.
        </p>
        <Button asChild className="mt-8" size="lg">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
