import Navbar from "./Navbar"
import Home from "./pages/Home"
import Add from "./pages/Add"
import { Route, Routes } from "react-router-dom"
import PersonsDetails from "./pages/PersonsDetails"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/persons/:id" element={<PersonsDetails />} />
        </Routes>
      </div>
    </>
  )
}

export default App
