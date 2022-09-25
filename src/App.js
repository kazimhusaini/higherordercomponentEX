import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  return (
    <div>
      <HOCRED cmp={Counter} />
      <HOCBlue cmp={Counter} />
      <HOCBLACk cmp={Counter} />
    </div>
  );
}
function HOCRED(prop) {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: 200,
        height: 200,
        margin: "5% auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        flexDirection: "column",
      }}
    >
      <h3 style={{color:"#fffff"}}> HOC</h3>
      <prop.cmp  color={"red"}/>
    </div>
  );
}
function HOCBlue(prop) {
  return (
    <div
      style={{
        backgroundColor: "blue",
        width: 200,
        height: 200,
        margin: "5% auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        flexDirection: "column",
      }}
    >
      <h3 style={{color:"#fffff"}}> HOC</h3>
      <prop.cmp color={"blue"}/>
    </div>
  );
}
function HOCBLACk(prop) {
  return (
    <div
      style={{
        backgroundColor: "#000",
        width: 200,
        height: 200,
        margin: "5% auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        flexDirection: "column",
      }}
    >
      <h3 style={{color:"#fff"}}> HOC</h3>
      <prop.cmp color={"#000"}/>
    </div>
  );
}

function Counter({color}) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button style={{backgroundColor:`${color}`,padding:"10px",borderRadius:"5px",border:"2px solid #fff",color:"#fff"}} onClick={(e) => setCount(count + 1)}>{count} Click</button>
    </div>
  );
}

export default App;
