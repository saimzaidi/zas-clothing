import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 text-center">
      <div className="max-w-md space-y-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#c49a45]">
          Error 404 // Lost Archive
        </span>
        <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white">
          Silhouette Not Found
        </h1>
        <p className="text-sm text-neutral-400 leading-relaxed font-light">
          The page or product you are looking for is not available.
        </p>
        <div className="pt-2">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
