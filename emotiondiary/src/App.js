import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";

//COMPONENTS
import MyButton from "./components/MyButton";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>

        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        />

        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"nagative"}
        />

        <MyButton text={"버튼"} onClick={() => alert("버튼 클릭")} />

        <Routes>
          <Route path="/" element={<Home />} />
          {/*path가 인덱스를 가리키고 있으면 Home 컴포넌트를 렌더해라*/}
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
          {/* path variable이 id인것!  */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
