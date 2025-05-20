import Mypage from "./components/pages/Mypage";
import Edit from "./components/pages/Edit";
import styled from 'styled-components';
import { Routes, Route } from "react-router-dom";

const AppWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8e1e7, #e1eaf8, #e1f8f4);
`;

function App() {
  return (
    <AppWrapper className="App">
      <Routes>
        <Route path={"/"} element={<Mypage />} />
        <Route path={"/edit"} element={<Edit/>}/>
      </Routes>

    </AppWrapper>
  );
}

export default App;
