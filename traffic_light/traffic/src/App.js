import './App.css'
import React, { useEffect, useState } from 'react'

function App() {
  const [color, setColor] = useState("Green")
  const [timer, setTimer] = useState(20000);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(timer)
      switch (color) {
        case "Green":
          setColor("Yellow");
          setTimer(5000);
          break;
        case "Yellow":
          setColor("Red");
          setTimer(10000);
          break;
        case "Red":
          setColor("Green");
          setTimer(20000);
          break;
        default:
          break;
      }
    }, timer);

    return () => clearInterval(interval)
  }, [color, timer])
  

  return (
    <div style={{width: '100vh', height: '100vh'}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "5rem",
          height: "10rem",
          gap: "5px",
          backgroundColor: 'black',
          margin: 'auto',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <div
          className="red"
          style={color === "Red" ? { opacity: 1 } : { opacity: 0.5 }}
        ></div>
        <div
          className="yellow"
          style={color === "Yellow" ? { opacity: 1 } : { opacity: 0.5 }}
        ></div>
        <div
          className="green"
          style={color === "Green" ? { opacity: 1 } : { opacity: 0.5 }}
        ></div>
      </div>
    </div>
  );
}

export default App;
