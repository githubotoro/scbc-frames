"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export function Redirect() {
  useEffect(() => {
    redirect("https://lu.ma/7atw9xr0");
  }, []);

  return (
    <div className="flex flex-col items-center place-content-center w-full h-screen">
      <div
        className="w-10 h-10 border-red-500 inline-block border-[6px] rounded-full animate-spin border-t-transparent drop-shadow-sm"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
