import Login from "./components/pages/Login";
import Detail from "./components/pages/Detail";
import Write from "./components/pages/Write";
import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import DiaryEdit from './components/pages/DiaryEdit';
import GrowingClouds from "./components/pages/GrowingClouds";
import Mypage from "./components/pages/Mypage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/main" element={<Main />} />
        <Route path="/write" element={<Write/>} />
        <Route path="/edit/:id" element={<DiaryEdit/>} />
        <Route path="/test" element={<GrowingClouds/>} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/:hash" element={<Mypage />}/>
      </Routes>
    </div>
  );
}

export default App;
