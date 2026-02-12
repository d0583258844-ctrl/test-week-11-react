import "./App.css";
import { useState } from "react";
import { terorist } from "./data/terrorists_data";
import Rows from "./components/all-rows/Rows";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [teror, setTerorist] = useState(terorist);
  const [filter, setFilter] = useState({});

  return (
    <>
      <Navbar setFilter={setFilter} />
      <Rows teror={teror} />;
    </>
  );
}

export default App;
