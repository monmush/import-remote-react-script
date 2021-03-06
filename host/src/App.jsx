import ComponentV17Source from "https://filum-assets.sgp1.cdn.digitaloceanspaces.com/remote-component-v17/remote-component.es.js";
import "./App.css";
import { interopDefault } from "./libs/vite";

// console.log("ComponentV17Source", ComponentV17Source);

const ComponentV17 = interopDefault(ComponentV17Source);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The Host</p>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50vw" }}>{/* <ComponentV17 /> */}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
