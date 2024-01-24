import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [userId, setUserId] = useState(1)
  const getTodos = async () => {
  try{
     const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    );
    const responseData = await response.json()
    console.log(responseData);
  }catch(e){
    console.error('бекенд упал',e);
  }
  };

  useEffect(() => {
    getTodos()
  }, [userId])





  return <div>
    <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)}/>
  </div>;
};

export default App;
