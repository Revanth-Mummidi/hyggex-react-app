import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Screen/components/Navbar";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider  router={router} />
    </>
  );
}

export default App;
