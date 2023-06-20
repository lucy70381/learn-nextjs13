"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Layout(props: {
  children: React.ReactNode;
  dashboard: React.ReactNode;
  feeds: React.ReactNode;
  authModal: React.ReactNode;
}) {
  const segement = useSelectedLayoutSegment("dashboard");

  return (
    <div>
      <div>Parallel Routes Layout</div>
      <div>Selected Segment: {segement}</div>
      <div className="mr-4 inline-block bg-green-500 px-2">
        <Link href="/parallel_routes/unmatched_routes">
          to unmatched_routes
        </Link>
      </div>
      <div className="inline-block bg-blue-500 px-2">
        <Link href="/parallel_routes/unmatched_routes2">
          to @dashboard/unmatched_routes2
        </Link>
      </div>
      <div className="inline-block bg-red-500 px-2">
        <Link href="/parallel_routes/login">
          Login
        </Link>
      </div>
      {props.children}
      {props.dashboard}
      {props.feeds}
      {props.feeds}
      {props.authModal}
    </div>
  );
}
