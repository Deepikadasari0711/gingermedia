import Login from "./pages/login";
import Profile from "./pages/profile";

const { Routes, Route } = require("react-router-dom");
const { default: Signup } = require("./pages/signup");

function App(){
  return <Routes>
    <Route path="/" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>
}

export default App