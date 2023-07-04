import Link from "next/link";

export default function Page() {
  return (
    <div className="mr-4 inline-block bg-blue-500 px-2">
      <Link href="/intercepting_routes/photo/1">
        /intercepting_routes/photo/1
      </Link>
    </div>
  );
}
