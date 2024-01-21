import Lenis from "@studio-freight/lenis";
import React from "react";
import Home from "./routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  React.useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
