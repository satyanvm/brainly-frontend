import React from "react";
import Dashboard from "./pages/Dashboard.tsx";
import { Signup } from "./pages/Signup.tsx";
import { Signin } from "./pages/Signin.tsx";
import { BrowserRouter, Routes, Route }  from "react-router-dom";
import Claudehash from "./components/claudehash.tsx";
function App() {
   
  return (
    <BrowserRouter>
    <Routes>
      
    <Route path = "/signup" element = {<Signup></Signup>} />
    <Route path = "signin" element = {<Signin></Signin>}/>
    <Route path = "/dashboard" element = {<Dashboard></Dashboard>} />  
    <Route path = "/share/:shareLink" element = {<Claudehash/>}></Route>  
</Routes>  
</BrowserRouter>     
  );       
}         

export default App;
