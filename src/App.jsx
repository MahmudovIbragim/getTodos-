import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const responseData = await response.json();
      setPosts(responseData);
    } catch (e) {
      console.error("бекенд упал", e);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {posts.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
