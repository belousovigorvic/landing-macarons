import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import Main from "./pages/Main/Main";
import { ParallaxProvider } from "react-scroll-parallax";
import React from "react";

type HeaderProps = {};

const App: React.FC<HeaderProps> = () => {
  return (
    <>
    <ParallaxProvider>
    <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route path={'/'} element={<Main/>} />
        </Route>
      </Routes>
    </ParallaxProvider>
    </>
  );
};

export default App;
