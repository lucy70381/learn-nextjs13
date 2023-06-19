"use client";

import { usePathname } from "next/navigation";

export default function Page({
  params,
}: {
  params: { slug: [tag: string, id: string] };
}) {
  const pathname = usePathname();

  return (
    <section>
      <div>Pathname: {pathname}</div>
      <div>Slug: {params.slug.join(", ")}</div>
    </section>
  );
}

/*
Route	                      Example URL	 params
app/shop/[...slug]/page.js	/shop/a      { slug: ['a'] }
app/shop/[...slug]/page.js  /shop/a/b	   { slug: ['a', 'b'] }
app/shop/[...slug]/page.js	/shop/a/b/c	 { slug: ['a', 'b', 'c'] } 
*/
