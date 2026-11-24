import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export function SideEffect() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Use an effect to sync with something outside React (a server, the browser, a timer).
  // If it's a calculation, use a variable. If it's a reaction to a click or submit, use the event handler.
  // useEffect(() => {
  //   console.log("Component mounted");
  //   const controller = new AbortController();

  //   fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //     signal: controller.signal,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // 200 OK
  //       // data ready -> [{},{},{}]
  //       setPosts(data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });

  //   return () => {
  //     console.log("Component unmounted");
  //     controller.abort();
  //   };
  // }, []);

  const { data, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  const { data, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  const { data, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1",
  );

  return (
    <>
      <h1>SideEffect</h1>

      {error && !isLoading && <p>Error</p>}
      <ul>
        {isLoading
          ? "LOADING..."
          : posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  );
}
