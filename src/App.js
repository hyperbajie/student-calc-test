import "./App.css";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { TestPaper } from "./pages/TestPaper";
import { InfiniteTest } from "./pages/InfiniteTest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="TestPaper" element={<TestPaper />}></Route>
        <Route path="InfiniteTest" element={<InfiniteTest />}></Route>
      </Routes>
    </div>
  );
}

export default App;
