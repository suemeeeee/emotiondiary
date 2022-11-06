import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*path가 인덱스를 가리키고 있으면 Home 컴포넌트를 렌더해라*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
