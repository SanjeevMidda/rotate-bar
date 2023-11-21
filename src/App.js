import { useState } from "react";
import "./index.css";
import art from "./images/painting.jpg";

function App() {
  const [rotate, setRotate] = useState(true);

  return (
    <div className="App">
      <footer>
        <div
          className="rotate-container"
          style={{ transform: `rotate(${rotate ? 0 : 90}deg)` }}
          onClick={() => {
            setRotate(!rotate);
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>

      <div className="content">
        <div
          className="text"
          style={{ transform: `translateX(${rotate ? "0px" : "400px"})` }}
        >
          <h1>THE LOCAL INTERNET</h1>
          <h5>circa 1084</h5>
        </div>

        <img
          src={art}
          alt=""
          style={{ transform: `translateX(${rotate ? "0px" : "200px"})` }}
        />
      </div>
    </div>
  );
}

export default App;
