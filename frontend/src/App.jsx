// import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import About from "./pages/About"
import AdminPage from "./pages/AdminPage"
import ArtifactDetails from "./pages/ArtifactDetails"
import Artifacts from "./pages/Artifacts"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Splash from "./pages/Splash"
import ThemeDetails from "./pages/ThemeDetails"
import Theme from "./pages/Themes"
import EshopDetails from "./pages/EshopDetails"
import UserAccount from "./pages/UserAccount"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/theme/:id" element={<ThemeDetails />} />
        <Route path="/artifacts" element={<Artifacts />} />
        <Route path="/artifacts/:id" element={<ArtifactDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eshopdetails" element={<EshopDetails />} />
        <Route path="/eshopdetails/:id" element={<EshopDetails />} />
        <Route path="/useraccount" element={<UserAccount />} />
      </Routes>
    </div>
  )
}

export default App
