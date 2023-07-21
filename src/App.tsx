import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from "./Components/Layout/Layout";
import Main from './pages/Main/Main'
import { ParallaxProvider } from 'react-scroll-parallax'
import React from 'react'
import Guarantees from "./pages/Guarantees/Guarantees";

const App: React.FC = () => {
  return (
    <>
      <ParallaxProvider>
        <Routes>
          <Route path={'/'} element={<Layout />}>
            <Route path={'/'} element={<Main />} />
            <Route path={'/guarantees'} element={<Guarantees/>} />
          </Route>
        </Routes>
      </ParallaxProvider>
    </>
  )
}

export default App
