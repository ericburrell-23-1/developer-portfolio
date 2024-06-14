import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MyStoryPage from "./pages/MyStoryPage";
import ProjectsPage from "./pages/ProjectsPage";
import TechPage from "./pages/TechPage";
import ProjectRoutes from "./pages/projects/ProjectRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/my-story" element={<MyStoryPage />} />
          <Route path="/all-projects" element={<ProjectsPage />} />
          <Route path="/all-tech" element={<TechPage />} />
          <Route path="/projects/*" element={<ProjectRoutes />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
