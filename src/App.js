import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";

function App() {
  const [password, setpassword] = useState("");
  const handleChange = (e) => {
    setpassword(e.target.value);
    console.log(password);
    if (password === "69420") {
      setispasswordTrue(true);
    }
  };

  const [ispasswordTrue, setispasswordTrue] = useState(false);
  return (
    <div className="App">
      {ispasswordTrue ? (
        <Homepage />
      
      ) : (
        <input
        type="text"
        onChange={handleChange}
        name="text"
        class="input"
        placeholder="Type your text"
      ></input>
        
      )}
    </div>
  );
}

export default App;
