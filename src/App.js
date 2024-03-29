import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("nithanand");
  const onchange = (event) => {
    const newval = event.target.value;
    setName(newval + "1");
    console.log(setName);
  };

  console.log(name);

  return (
    <div className="App">
      <label>{name}</label>

      <input type="text" value={name} onChange={onchange}></input>
    </div>
  );
}

export default App;
