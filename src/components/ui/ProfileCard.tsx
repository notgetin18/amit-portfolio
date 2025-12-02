"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { handleDownloadResume } from "@/utility";

type Props = {
  name: string;
  title: string;
  description?: string;
  email?: string;
};

export default function ProfileCard({
  name,
  title,
  description,
  email = "notgetin18@gmail.com",
}: Props) {
  return (
    <Card className="rounded-3xl bg-white/5 p-5 backdrop-blur-lg border border-white/10 max-w-md mx-auto">
      <div className="flex items-center gap-4">
        <div className="h-8 w-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#3ed6ac] text-white font-semibold sm:font-extrabold flex items-center justify-center text-base sm:text-lg">
          AK
        </div>
        <div>
          <div className="text-sm text-slate-200 font-semibold">{name}</div>
          <div className="text-xs text-slate-300">{title}</div>
        </div>
      </div>

      {description && (
        <div className="mt-4 text-sm text-slate-300">{description}</div>
      )}

      <div className="mt-4 flex gap-3">
        <div>
          <a
            href={`mailto:${email}`}
            aria-label={`Email ${name}`}
            className="inline-block w-full sm:w-auto"
          >
            <button className="px-4 py-1 sm:py-2 rounded-full bg-gradient-to-tr from-[#06b6d4] to-[#8ef3c1] font-semibold text-black shadow">
              Contact
            </button>
          </a>
        </div>
        <div className="">
          <button
            onClick={() => handleDownloadResume("pdf")}
            aria-label={`Download ${name} resume (PDF)`}
            className="px-4 py-1 sm:py-2 rounded-full border border-white/3 text-slate-100"
          >
            Resume
          </button>
        </div>
      </div>
    </Card>
  );
}
