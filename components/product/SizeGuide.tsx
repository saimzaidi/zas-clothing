"use client";

import React, { useState } from "react";
import { Ruler } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

export default function SizeGuide() {
  const [isOpen, setIsOpen] = useState(false);

  const measurements = [
    { size: "S", chest: '22.0"', length: '28.5"', shoulder: '23.0"', sleeve: '9.0"' },
    { size: "M", chest: '23.5"', length: '29.5"', shoulder: '24.5"', sleeve: '9.5"' },
    { size: "L", chest: '25.0"', length: '30.5"', shoulder: '26.0"', sleeve: '10.0"' },
    { size: "XL", chest: '26.5"', length: '31.5"', shoulder: '27.5"', sleeve: '10.5"' },
    { size: "XXL", chest: '28.0"', length: '32.5"', shoulder: '29.0"', sleeve: '11.0"' },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
      >
        <Ruler className="w-3.5 h-3.5 text-[#c49a45]" />
        <span>Size Guide & Fit</span>
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Silhouettes & Size Specification"
      >
        <div className="space-y-6 text-neutral-300">
          <p className="text-xs text-neutral-400 leading-relaxed font-light">
            All ZAS tees are cut with an architectural drop shoulder and boxy drape. Measurements are taken flat in inches across the garment.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-950/60">
            <table className="w-full text-left text-xs font-mono">
              <thead className="border-b border-neutral-800 text-neutral-400 bg-neutral-900/80">
                <tr>
                  <th className="py-3 px-4 uppercase font-bold text-white">Size</th>
                  <th className="py-3 px-3 uppercase">Chest</th>
                  <th className="py-3 px-3 uppercase">Length</th>
                  <th className="py-3 px-3 uppercase">Shoulder</th>
                  <th className="py-3 px-3 uppercase">Sleeve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/80">
                {measurements.map((row) => (
                  <tr key={row.size} className="hover:bg-neutral-900/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">{row.size}</td>
                    <td className="py-3 px-3 text-neutral-300">{row.chest}</td>
                    <td className="py-3 px-3 text-neutral-300">{row.length}</td>
                    <td className="py-3 px-3 text-neutral-300">{row.shoulder}</td>
                    <td className="py-3 px-3 text-neutral-300">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
            <p className="font-semibold text-white">Fit Recommendation:</p>
            <p className="text-neutral-400">
              • <strong className="text-white">True to Size:</strong> Signature relaxed streetwear drape with exaggerated dropped shoulders.
            </p>
            <p className="text-neutral-400">
              • <strong className="text-white">Size Down:</strong> Standard boxy contemporary fit if you prefer closer armhole profile.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
