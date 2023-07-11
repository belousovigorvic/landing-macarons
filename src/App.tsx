import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/Layout/Header/Header";
import Layout from "./pages/Layout/Layout";
import Main from "./pages/Main/Main";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
    <ParallaxProvider>
    <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route path={'/main'} element={<Main/>} />
        </Route>
      </Routes>
    </ParallaxProvider>
    </>
  );
}

export default App;
