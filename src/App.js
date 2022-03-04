import "./App.css";
import Contents from "./Components/Contents/Contents";
import Right from "./Components/Right/Right";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="header">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
      </div>
      <div className="body-contents">
        <Sidebar />
        <Contents />
        <Right />
      </div>
    </div>
  );
}

export default App;
