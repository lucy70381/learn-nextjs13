"use client"; // Error components must be Client Components

import { usePathname } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const pathname = usePathname();

  return (
    <html>
      <body>
        <h2>Error! (from ${pathname}/global-error.tsx)</h2>
        <pre>{error.message}</pre>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
