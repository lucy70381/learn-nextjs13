import { Suspense } from "react";
import { Post } from "../../data_fetching/async_await_in_server_components";

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading post...</p>}>
        <Post />
      </Suspense>
      <Suspense fallback={<p>Loading post...</p>}>
        <Post />
      </Suspense>
    </section>
  );
}
