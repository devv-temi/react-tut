import React from "react";
import { useParams } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  console.log(id);
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main className="postPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete Post</button>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
