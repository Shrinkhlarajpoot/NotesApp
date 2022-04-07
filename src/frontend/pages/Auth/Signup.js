import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../context";
import "./Auth.css";
import { signupService } from "../../services";
import { SingnupValidChecker } from "../../../utils/FormValidationChecker";
import { useTheme } from "../../context/themeContext";

const Signup = () => {
  const { auth, setAuth, showpassword, setShowPassword } = useAuth();
  const [showpassword1, setShowPassword1] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
 const{darkTheme}=useTheme()
  const [signupform, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
useEffect(() => {
    (async () => {
      if (submit && Object.values(errors).length === 0) {
        const token = await signupService(
          signupform.firstname,
          signupform.lastname,
          signupform.email,
          signupform.password
        );
        console.log(token);
        if (token) {
          localStorage.setItem("token", token);
          
          setAuth({
            token: token,
          });
          navigate("/login");
        }
      }
    })();
  }, [errors]);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setSubmit(true);
    setErrors(() => SingnupValidChecker(signupform));
    console.log(errors);
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupform, [name]: value });
  };
  console.log(signupform);
  return (
    <div className={`auth__pages auth__form ${darkTheme?"darktheme":null}`} >
      <form className="auth__box ">
        <i className="fa fa-close" id="close" onClick={() => navigate("/")}></i>
        <h3>Signup to AnyNote</h3>

        <div className="auth__inputs">
          <input
            type="text"
            placeholder="First-Name"
            required
            name="firstname"
            value={signupform.firstname}
            onChange={(e) => changeHandler(e)}
          />
          {errors.firstname && (
            <div className="incorrect__pass">{errors.firstname}</div>
          )}

          <input
            type="text"
            placeholder="Last-Name"
            required
            name="lastname"
            value={signupform.lastname}
            onChange={(e) => changeHandler(e)}
          />
          {errors.lastname && (
            <div className="incorrect__pass">{errors.lastname}</div>
          )}

          <input
            type="email"
            placeholder="E-mail"
            required
            name="email"
            value={signupform.email}
            onChange={(e) => changeHandler(e)}
          />
          {errors.email && (
            <div className="incorrect__pass">{errors.email}</div>
          )}

          <div className="auth__inputs">
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              required
              value={signupform.password}
              onChange={(e) => changeHandler(e)}
            />
            {errors.password1 && (
              <div className="incorrect__pass">{errors.password1}</div>
            )}

            <i
              className="fa fa-eye"
              class={showpassword ? "fa fa-eye" : "fa fa-eye-slash"}
              onClick={() => setShowPassword(!showpassword)}
            ></i>
          </div>
          <div className="auth__inputs">
            <input
              type={showpassword1 ? "text" : "password"}
              placeholder="Re-Password"
              name="confirmpassword"
              value={signupform.confirmpassword}
              required
              onChange={(e) => changeHandler(e)}
            />
            {errors.confirmpassword && (
              <div className="incorrect__pass">{errors.confirmpassword}</div>
            )}
            {errors.passwordnotmatch && (
              <div className="incorrect__pass">{errors.passwordnotmatch}</div>
            )}
            <i
              className="fa fa-eye"
              class={showpassword1 ? "fa fa-eye" : "fa fa-eye-slash"}
              onClick={() => setShowPassword1(!showpassword1)}
            ></i>
          </div>
        </div>

        <div className="auth__box-sub">
          <button
            className="sub__main sub_main-btn"
            onClick={(e) => SubmitHandler(e)}
          >
            SIGNUP
          </button>
          <button className="sub__main2 ">
            <Link to="/login" className="Link_style">
              Already have an account? LOG-IN
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};
export { Signup };