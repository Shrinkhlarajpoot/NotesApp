import { useNavigate } from "react-router-dom";
import { useState ,useEffect} from "react";
import "./Auth.css";
import { loginService } from "../../services";
import { useAuth } from "../../context";
import { LoginValidChecker } from "../../../utils/FormValidationChecker";
import { useTheme } from "../../context/themeContext";

const Login = () => {
const navigate = useNavigate();
const {darkTheme}=useTheme()
 const {setAuth,showpassword, setShowPassword }=useAuth();
 const [submit, setSubmit] = useState(false);
 const [errors, setErrors] = useState({});
  const[loginform,setLoginForm]=useState({
    email:"",
    password:""
  })
 

 useEffect(() => {
    (async () => {
      if (submit && Object.values(errors).length === 0) {
       const token = await loginService(loginform.email, loginform.password);
        
        if (token) {
          console.log(token.data.encodedToken)
          localStorage.setItem("token", token.data.encodedToken);
          localStorage.setItem("user",token.data.foundUser.firstName)
            setAuth({
            token:token.data.encodedToken,
            user:token.data.foundUser.firstName,
          });

          navigate("/");
        }
      }
    })();
  }, [errors]);

const submitLoginForm=async(e,email,password)=>{
      e.preventDefault();
      setSubmit(true);
      setErrors(() =>LoginValidChecker(loginform));
}
  const changeHandler=(e)=>{
    const {value,name} = e.target;
    setLoginForm({...loginform,[name]:value})
  }
 
return (
    <div className={`auth__pages ${darkTheme?"darktheme":null}`} >
      <form onSubmit={(e)=>e.preventDefault()} className="auth__form">
        <div className="auth__box">
          <i className="fa fa-close close " id="close" onClick={()=>navigate("/")}></i>
          <h3>Login to AnyNote</h3>

          <div className="auth__inputs">
            <input type="email" placeholder="E-mail" required name="email" value={loginform.email}  onChange={(e)=>changeHandler(e)}/>
          </div>
          {errors.email && (
            <div className="incorrect__pass">{errors.email}</div>
          )}

          <div className="auth__inputs">
            <input
                type={showpassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={loginform.password}
              onChange={(e)=>changeHandler(e)}
            />
            <i
                class={showpassword ?  "fa fa-eye-slash" : "fa fa-eye"}
              className="fa fa-eye"
              aria-hidden="true"
                onClick={() => setShowPassword(!showpassword)}
            ></i>
          </div>
          {errors.password && (
            <div className="incorrect__pass">{errors.password}</div>
          )}

          <h4 className="login__reset Link_style">
            <a href="/Forget/Forget.html " class="Link_style">
              Forget Password?
            </a>
          </h4>

          <div className="auth__box-sub">
            <h4 className="sub__main" onClick={(e)=>submitLoginForm(e,loginform.email,loginform.password)}>LOGIN</h4>
          </div>
          <button className="sub__main2 sub__main3 Link_style"  onClick={(e)=>setLoginForm({...loginform,email:"adarshbalika@gmail.com",password:"a1234"})}>
            Login With test Credentials
           
          </button>

          <button
            className="sub__main3 sub__main2 "
            onClick={() => navigate("/signup")}
          >
            Don't have an account? SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};
export { Login };