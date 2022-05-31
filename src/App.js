import "./App.css";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { TestPaper } from "./pages/TestPaper";
import { InfiniteTest } from "./pages/InfiniteTest";
import { NotFound } from "./pages/404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="paper" element={<TestPaper />}></Route>
        <Route path="test" element={<InfiniteTest />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
