import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import MyFooter from "./components/MyFooter"
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <Outlet/>
    </div>
    <MyFooter/>
    <Toaster />
    </>
  
  )
}

export default App
