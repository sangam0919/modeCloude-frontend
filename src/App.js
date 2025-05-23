import Login from "./components/pages/Login";
import Detail from "./components/pages/Detail";
import Write from "./components/pages/Write";
import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import Edit from './components/pages/Edit';
import Test from "./components/pages/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/main" element={<Main />} />
        <Route path="/write" element={<Write/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </div>
  );
}

export default App;
