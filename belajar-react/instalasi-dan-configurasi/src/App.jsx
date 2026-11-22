import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [Likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(Likes + 1);
  }
  return (
    <div>
      <Header name="Zaki" />

      <button onClick={handleClick}>Like ({Likes})</button>
    </div>
  );
}

export default App;
