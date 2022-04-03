import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
   return (
    <div>
      <div className="auth__box">
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