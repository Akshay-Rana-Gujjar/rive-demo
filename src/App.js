
import "./App.css";
import Rive, { useRive } from "rive-react";

function App() {
  const params = {
    src: require("./assets/rive-src/name_animation.riv"),
    autoplay: false,
  };
  const { RiveComponent, rive } = useRive(params);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Rive src={require("./assets/rive-src/menu_animation.riv")} />
        <small >Hover on below image</small>
        <div style={{display: "flex"}}>
          <RiveComponent
            onMouseEnter={() => rive && rive.play()}
            onMouseLeave={() => rive && rive.pause()}
          />

        </div>
        <p>
          Animation using Rive.js
        </p>
        <a
          className="App-link"
          href="https://www.npmjs.com/package/rive-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Rive
        </a>
      </header>
    </div>
  );
}

export default App;
