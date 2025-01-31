import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Jai from "./components/Jai";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Jai text={"Jai Bajrangi"} text2={"Jai Shree Ram"}/>
      <div className="max-w-[1280px] mx-auto p-[2rem] text-center">
      <AddTodo/>
      <Todos/>
      </div>
    </>
  );
}

export default App;
