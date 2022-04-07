import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/themeContext";

const Logout = () => {
  const navigate = useNavigate();
  const{darkTheme}=useTheme()
   return (
    <div className={`auth__pages auth__form ${darkTheme?"darktheme":null}`} >
      <div className="auth__box auth__form">
        <i
          className="fa fa-close"
          id="close"
          onClick={() => navigate("/")}
        ></i>
       
        <h3>
          Logout Out Sucessfully..
         
        </h3>
        <div className="auth__box-sub">
          <Link to="/" className="Link_style">
          <button className="sub__main2">Go Back To Home Page</button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};
export { Logout };