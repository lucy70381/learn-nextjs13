"use client"; // Error components must be Client Components

import { usePathname } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const pathname = usePathname();

  return (
    <div>
      <h2>Error! (from ${pathname}/error.tsx)</h2>
      <pre>{error.message}</pre>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
