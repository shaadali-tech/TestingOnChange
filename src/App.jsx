import { useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState("");
  return (
    <>
      <input type="text" placeholder="Enter Here" />
      <button
        onClick={() => {
          setdata("Updated Value");
        }}
      >
        Update
      </button>
      <h1>{data}</h1>
    </>
  );
}

export default App;
