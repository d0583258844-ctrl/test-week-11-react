import "./App.css";
import { useState } from "react";
import { terorist } from "./data/terrorists_data";
import Rows from "./components/all-rows/Rows";

function App() {
  const [teror, setTerorist] = useState(terorist);
  return (
    <>
      <Rows teror={teror} />;
    </>
  );
}

export default App;
