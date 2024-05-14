import { useLoaderData } from "@remix-run/react";
import type { Post } from "./_index";

export const loader = async ({ params }: {
    params: {
        postId: string;
    }

}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    return data;
}

const Post = () => {
    const post: Post = useLoaderData<typeof loader>();

    return (
        <div
            style={{
                fontFamily: "system-ui, sans-serif",
                lineHeight: "1.8",
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",

            }}
        >
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;