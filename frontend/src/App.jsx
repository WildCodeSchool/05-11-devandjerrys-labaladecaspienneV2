import Contact from "@pages/Contact"
import { Route, Routes } from "react-router-dom"
import EshopCard from "./components/EshopCard"
import AdminPage from "./pages/AdminPage"
import ArtifactDetails from "./pages/ArtifactDetails"
import Artifacts from "./pages/Artifacts"
import Home from "./pages/Home"
import Splash from "./pages/Splash"
import ThemeDetails from "./pages/ThemeDetails"
import Theme from "./pages/Themes"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/theme/:id" element={<ThemeDetails />} />
        <Route path="/artifacts" element={<Artifacts />} />
        <Route path="/artifacts/:id" element={<ArtifactDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eshop" element={<EshopCard />} />
      </Routes>
    </div>
  )
}

export default App
