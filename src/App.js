import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./pages/single/single";
import Login from "./pages/login/login";
import List from "./pages/list/list";
import New from "./pages/new/new";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />}/>
            <Route path="login/" element={<Login />}/>
            <Route path="users/">
              <Route index element={<List/>}/>
              <Route path=":userId/" element={<Single/>}/>
              <Route path="new/" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>
            <Route path="products/">
              <Route index element={<List/>}/>
              <Route path=":productId/" element={<Single/>}/>
              <Route path="new/" element={<New  inputs={productInputs} title="Add New Product"/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
