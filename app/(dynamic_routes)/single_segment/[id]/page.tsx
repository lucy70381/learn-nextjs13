export const dynamicParams = false;

async function getPost(params: { id: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return post;
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPost(params);

  return (
    <section>
      <h1>Post id: {params.id}</h1>
      <p>Post title: {post.title}</p>
    </section>
  );
}

/* 
Route	                   Example URL	params
app/blog/[slug]/page.js	 /blog/a		  { slug: 'a' }
app/blog/[slug]/page.js	 /blog/b		  { slug: 'b' }
app/blog/[slug]/page.js	 /blog/c		  { slug: 'c' }
 */
