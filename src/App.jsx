import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
