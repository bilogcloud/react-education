import { useEffect, useState } from "react";

export function SideEffect() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Component mounted");

    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        // 200 OK
        // data ready -> [{},{},{}]
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return (
    <>
      <h1>SideEffect</h1>

      {error && <p>Error</p>}
      <ul>
        {isLoading
          ? "LOADING..."
          : posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  );
}
