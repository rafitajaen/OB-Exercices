import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");

  const [manageInterval, setManageInterval] = useState(0);

  const getColor = () => Math.floor(Math.random() * 256);

  const getHex = (red, green, blue) => {
    return (
      "#" +
      [red, green, blue]
        .map((c) => {
          return c < 16 ? "0".concat(c.toString(16)) : c.toString(16);
        })
        .join("")
    );
  };

  const generateHex = () => {
    const rgb = {
      r: getColor(),
      g: getColor(),
      b: getColor(),
    };
    return setColor(getHex(rgb.r, rgb.g, rgb.b));
  };

  const changeColor = () => {
    return setManageInterval(setInterval(generateHex, 1000));
  };

  const stopChangeColor = () => {
    return clearInterval(manageInterval);
  };

  return (
    <div className="App" style={{ margin: "auto" }}>
      <div
        id="square"
        onMouseOver={changeColor}
        onMouseLeave={stopChangeColor}
        onDoubleClick={stopChangeColor}
        style={{
          width: "255px",
          height: "255px",
          backgroundColor: color,
          margin: "auto",
        }}
      ></div>{" "}
      <p style={{ color: "black" }}>Color: {color} </p>
    </div>
  );
}

export default App;
