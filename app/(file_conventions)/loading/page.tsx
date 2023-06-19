async function getPost() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to load post");
  }
  return res.json();
}
export default async function Page() {
  const data = await getPost();
  return <div>finish</div>;
}
