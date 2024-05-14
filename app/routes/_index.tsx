import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const meta: MetaFunction = () => {
  return [
    { title: "Explore Remix App" },
    { name: "description", content: "Welcome to Remix!" },
    { property: "og:title", content: "Explore Remix App" },
  ];
};

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return data;
};

export default function Index() {
  const data: Post[] = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>

      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link style={{ textDecoration: 'none', color: 'green' }} to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>



    </div>
  );
}
