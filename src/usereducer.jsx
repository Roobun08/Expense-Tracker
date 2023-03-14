import React from "react";
import { useReducer } from "react";

export default function Jack() {
  
   
  let intialstate = {
    show: "",
    newitems: "12",
    balance: "",
  };
  function reducer(state ,action){
    if( action.type === "add"){
        return {
            show : (state.newitems)
        }
    }
    if( action.type === "change"){
        return {
            newitems : 
        }
    }
  }
  const [state, dispatch] = useReducer(reducer, intialstate);

  return (
    <>
      <h1>Expense Tracker - Basic</h1>
      <form className="top-box">
        <div style={{ fontWeight: "bold", fontSize: "18px" }}>
          Balance: {state.balance}{" "}
        </div>
        <input
          type="number"
          value={state.newitems}
         onChange={()=>{dispatch({type : "change"})}}
        ></input>
        <div>
          <button onClick={()=>dispatch({type : "add"})}>Add</button>
          {/* <button onClick={removeitems}>Remove</button> */}
        </div>
      </form>

      <div className="bottom-box">
        <h3>Transactions :</h3>
        <div className="transaction-history"> {state.show} </div>
      </div>
    </>
  );
}
