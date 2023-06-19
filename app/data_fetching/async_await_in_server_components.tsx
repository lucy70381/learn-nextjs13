async function getPost() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);

  if (!res.ok) {
    // This will activate the closest `error.tsx` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function Post() {
  const post = await getPost();

  return (
    <section>
      <h1>Post {post.id}</h1>
      <p>{post.title}</p>
    </section>
  );
}
