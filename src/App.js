import Mypage from "./components/pages/Mypage";
import Edit from "./components/pages/Edit";
import List from "./components/pages/List";
import Statistics from "./components/pages/Statistics";
import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";


const AppWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8e1e7, #e1eaf8, #e1f8f4);
`;

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
    <AppWrapper className="App">
      <Routes>
        <Route path={"/"} element={<Mypage />} />
        <Route path={"/edit"} element={<Edit/>}/>
        <Route path={"/list"} element={<List/>}/>
        <Route path={"/statistics"} element={<Statistics/>}/>
      </Routes>

    </AppWrapper>
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
