import AdminAccReg from "./component/AdminAccReg"
import Autorization from "./component/Autorization"
import AdminPage from "./component/AdminPage"
import { BrowserRouter,Router,Route,Routes } from "react-router-dom"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminAccReg />} />
        <Route path="/auto" element={< Autorization />} />
        <Route path="/adminpage" element={< AdminPage />} />

      </Routes>
    </>
  )
}

export default App
