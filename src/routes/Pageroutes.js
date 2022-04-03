import { Route, Routes } from "react-router-dom"
import Mockman from "mockman-js";
import { Privateroutes } from "./Privateroutes";
import { Signup,Logout,Login,LandingPage,Labels,Trash,Home,Archive } from "../frontend/pages";
const Pageroutes = () =>{
return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/mockman" element={<Mockman />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element = {<Logout/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route element={<Privateroutes/>}>
            <Route path="/labels" element={<Labels />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/home" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
               
           
           </Route>
       </Routes>
   
   
    </div>
)
}
export {Pageroutes}
