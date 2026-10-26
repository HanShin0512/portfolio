import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import ScrollManager from "./components/ScrollManager";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <BrowserRouter>
      <ReactLenis root options={{ autoRaf: true, lerp: 0.1 }}>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProjectPage" element={<ProjectPage />} />
        </Routes>
      </ReactLenis>
    </BrowserRouter>
  );
}

export default App;