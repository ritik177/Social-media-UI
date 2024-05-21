import Home from "./components/Home"
import Login from "./components/Login"
import Chat from "./components/Chat"
import Follower from "./components/Follower"
import Notification from "./components/Notification"
import Menus from "./components/Menus"
import Profile from "./components/Profile"
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
   <Routes>
    <Route path="/" element={<Home/>}>Home</Route>
    <Route path="/login" element={<Login/>}>Login</Route>
    <Route path="/follower" element={<Follower/>}>Follower</Route>
    <Route path="/profile" element={<Profile/>}>Profile</Route>
    <Route path="/notification" element={<Notification/>}>Notification</Route>
    <Route path="/menus" element={<Menus/>}>Menus</Route>
    <Route path="/chat" element={<Chat/>}>Chat</Route>
   </Routes>
    </div>
  );
}

export default App;
