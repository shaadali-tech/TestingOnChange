import { useState } from "react";

const New = () => {
  const [data, setdata] = useState("");
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => setdata("Hello, World!")}>Click Me</button>
    </div>
  );
};

export default New;
