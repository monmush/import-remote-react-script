import renderRemote from "https://filum-assets.sgp1.cdn.digitaloceanspaces.com/remote-component-v17/remote-component.es.js";
import { useEffect } from "react";
import "./App.css";
import { interopDefault } from "./libs/vite";

console.log("renderRemote", renderRemote);

// const ComponentV17 = interopDefault(ComponentV17Source);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The Host</p>
        <div id="remote">
          <Container />
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ width: "50vw" }}>{/* <ComponentV17 /> */}</div>
        </div>
      </header>
    </div>
  );
}

export const Container = () => {
  useEffect(() => {
    console.log("render");
    renderRemote(document.getElementById("remote"));
  }, []);
  return null;
};

export default App;
