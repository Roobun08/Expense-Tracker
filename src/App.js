import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState([]);
  const [newitems, setNewitems] = useState("");
  const [balance, setBalance] = useState("0");
  const today = new Date();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const milliseconds = today.getMilliseconds();
  let display = year+"-"+ month+"-"+ date+"T"+hour+':'+minutes+':'+seconds+"."+milliseconds+"z"

  const handleitemchange = (event) => {
    setNewitems(event.target.value);
  };

  const additems = (event) => {
    event.preventDefault();
    setShow([...show,"Rs : "+ newitems + "- Added at "+ display ]);
    setBalance(parseInt(balance) + parseInt(newitems));
    setNewitems("");
  };

  const removeitems = (event) => {
    event.preventDefault();
    setShow([...show,"Rs : "+ newitems + "- Removed at " + display,]);
    setBalance(parseInt(balance) - parseInt(newitems));
    setNewitems("");
  };

  
  return (
    <>
      <h1>Expense Tracker - Basic</h1>
      <form className="top-box">
        <div style={{ fontWeight: "bold", fontSize: "18px" }}>
          Balance: {balance}
        </div>
        <input
          type="number"
          value={newitems}
          onChange={handleitemchange}
        ></input>
        <div>
          <button onClick={additems}>Add</button>
          <button onClick={removeitems}>Remove</button>
        </div>
      </form>
      <div className="bottom-box">
        <h3>Transaction History :</h3>
        <div className="transaction-history">
            {show.map((i, index)=>(
              <div key={index}>{i} </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;

