// import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import AdminPage from "./pages/AdminPage"
// import ArtifactDetails from "./pages/ArtifactDetails"
import Eshop from "./pages/Eshop"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Splash from "./pages/Splash"
import Theme from "./components/Theme"
import EshopDetails from "./pages/EshopDetails"
import Events from "@pages/Events"
import UserAccount from "./pages/UserAccountSecond"
import Cart from "./pages/Cart"
import EditTheme from "./pages/EditTheme"

import Payment from "./pages/Payment"
import PlumeCursor from "@components/PlumeCursor"

function App() {
  return (
    <div className="App">
      <PlumeCursor />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/eshop" element={<Eshop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/theme/:id" element={<Theme />} />
        <Route path="/eshopdetails/:id" element={<EshopDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/useraccount" element={<UserAccount />} /> */}
        <Route path="/useraccount/:id" element={<UserAccount />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/useraccount" element={<UserAccount />} />
        <Route path="/edit" element={<EditTheme />} />
      </Routes>
    </div>
  )
}

export default App
