import "./App.css";
import Contents from "./Components/Contents/Contents";
import Header from "./Components/Header/Header";
import Right from "./Components/Right/Right";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body-contents">
        <Sidebar />
        <Contents />
        <Right />
      </div>
    </div>
  );
}

export default App;
