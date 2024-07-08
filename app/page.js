"use client";
import React from "react";
import useSearchStore from "./useSearchStore";

export default function Home() {
  const segmentedControl = useSearchStore((state) => state.segmentedControl);

  return (
    <main className="flex min-h-screen flex-col items-center py-10">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p className="mt-4">Segmented Control Value: {segmentedControl}</p>
    </main>
  );
}
