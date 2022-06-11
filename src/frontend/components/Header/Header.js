import { useAuth, useNotes } from "../../context";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Filter } from "../Filter/Filter";

const Header = () => {
 const{auth,setAuth}=useAuth()
const navigate=useNavigate()
const {togglesidebar,setToggleSidebar,searchItem,setSearchItem}=useNotes()
    
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out sucessfully");
    setAuth({
      token: "",
      user:""
    });
    navigate("/logout") 
    
  };
  return (
    <div  className="header2">
        <div class="hearer__first-items">
        <span class="material-icons-outlined" onClick={()=>setToggleSidebar(!togglesidebar)}>{togglesidebar?"close":"menu"}</span>
      <h2 onClick={()=>navigate("/")}>ANYNOTES</h2>
        </div>
       
      <input type="text" className="header__input" placeholder="search here..." value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}
      ></input>
      <div className="hearer__last-items">
        <Filter/>
      <button class="btn btn_solid-primary  btn_primary header__btn" onClick={()=>logoutHandler()}>LogOut</button>
      </div>
    </div>
  );
};
export { Header };
