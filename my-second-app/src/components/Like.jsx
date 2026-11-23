import { useState } from "react";

export function Like({ onLike }) {
  const [isLiked, setIsLiked] = useState(true);

  if (!isLiked) {
    return <div>This is new post</div>;
  }

  return (
    <>
      I {isLiked ? "like" : "dislike"} this post.
      {isLiked && <p>Thank you for liking this post!</p>}
      <button
        onClick={() => {
          setIsLiked(!isLiked);
          onLike();
        }}
      >
        {isLiked ? "Dislike" : "Like"}
      </button>
    </>
  );
}
