import { Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage'
import Onama from './pages/Onama'
import Galerija from './pages/Galerija'
import Kalendar from './pages/Kalendar'
import Kontakt from './pages/Kontakt'
import ScrollToTop from "./components/ScrollToTop"
import Rad from "./pages/Rad"

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/onama" element={<Onama />} />
        <Route path="/galerija" element={<Galerija />} />
        <Route path="/kalendar" element={<Kalendar />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/radionica/:id" element={<Rad />} />
      </Routes>
    </>
  )
}

export default App
