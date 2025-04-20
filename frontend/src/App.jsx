import Navbar from "./components/Navbar.jsx"
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import SettingsPage from "./pages/SettingsPage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import { Routes,Route, Navigate } from "react-router-dom"
import { useAuthStore } from "./store/useAuthStore.js"
import { useEffect } from "react"
import {Loader, Navigation} from "lucide-react"
import {Toaster} from "react-hot-toast"
import { useThemeStore } from "./store/useThemeStore.js"
const App= ()=>{
  const {authUser,checkAuth,isCheckingAuth,onlineUsers} = useAuthStore()
  const {theme} = useThemeStore();

  console.log({onlineUsers});

  useEffect(()=>{
    checkAuth()
  },[checkAuth]);

  console.log({authUser});

  if(isCheckingAuth && !authUser){
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="size-10 animate-spin"/>
      </div>
    )
  }
//This useEffect is used to automatically call the checkAuth function when the component is first mounted (i.e., when it renders for the first time).
  return (
    <div data-theme={theme} >
      <Navbar />
      <Routes>
        <Route path="/" element={authUser? <HomePage /> : <Navigate to="/login"/> } />
        <Route path="/signup" element={!authUser?<SignUpPage />:<Navigate to="/" />}/>
        <Route path="/login" element={!authUser?<LoginPage />:<Navigate to="/" />}/>
        <Route path="/settings" element={<SettingsPage />}/>
        <Route path="/profile" element={authUser?<ProfilePage />:<Navigate to="/login"/>}/>
      </Routes>
      <Toaster />
    </div>
  )
}
export default App;