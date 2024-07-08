"use client";
import React, { useEffect } from "react";
import useSearchStore from "./useSearchStore";

export default function Home() {
  const fetchData = useSearchStore((state) => state.fetchData);
  const data = useSearchStore((state) => state.data);
  const segmentedControl = useSearchStore((state) => state.segmentedControl);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p className="mt-4">Segmented Control Value: {segmentedControl}</p>
      <p className="mt-4">Data Loaded: {JSON.stringify(data, null, 2)}</p>
    </main>
  );
}
