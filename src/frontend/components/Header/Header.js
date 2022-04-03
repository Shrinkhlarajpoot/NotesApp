import { useAuth } from "../../context";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Header = () => {
 const{auth,setAuth}=useAuth()
const navigate=useNavigate()
    
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
    <div className="header">
        <div class="hearer__first-items">
        <span class="material-icons-outlined">menu</span>
      <h2>ANYNOTES</h2>
        </div>
 
      <input type="text" className="header__input" placeholder="search here..."></input>
      <div className="hearer__last-items">
      <span class="material-icons-outlined ">light_mode</span>
      <button class="btn btn_solid-primary  btn_primary header__btn" onClick={()=>logoutHandler()}>LogOut</button>
      </div>
    </div>
  );
};
export { Header };
