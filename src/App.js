import "./App.css";
import Tile from "./components/Tile";
import TimeCounter from "./components/TimeCounter";
import ResourcesDisplay from "./components/ResourcesDisplay";

function App() {
  return (
    <div className="App">
      <header className='header'>
        <TimeCounter />
        <ResourcesDisplay className='resources' />
      </header>
      <div className="firstRow">
        <Tile crop="cereal" />
        <Tile crop="cereal" />
        <Tile crop="cereal" />
        <Tile crop="cereal" />
        <Tile crop="cereal" />
        <Tile crop="cereal" />
      </div>
      <div className="secondRow">
        <div>
          <Tile crop="wood" />
          <Tile crop="wood" />
        </div>
        <div>
          <Tile crop="wood" />
          <Tile crop="wood" />
        </div>
        <div>
          <Tile crop="stone" />
          <Tile crop="stone" />
        </div>
        <div>
          <Tile crop="stone" />
          <Tile crop="stone" />
        </div>
        <div>
          <Tile crop="iron" />
          <Tile crop="iron" />
        </div>
        <div>
          <Tile crop="iron" />
          <Tile crop="iron" />
        </div>
      </div>
    </div>
  );
}

export default App;
