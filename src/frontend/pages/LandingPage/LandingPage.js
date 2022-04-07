import { Footer } from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom"
import "./LandingPage.css";
import { useAuth } from "../../context";
import { useTheme } from "../../context/themeContext";
const LandingPage = () => {
    const navigate  =  useNavigate()
   const {auth}=useAuth();
  const{darkTheme,setDarkTheme}=useTheme()
  return (
    <div className="landingpage">
      <div className="landingpage__img">
        <img src="https://www.invespcro.com/blog/images/blog-images/main.png" />
      </div>
      <div className={`landingpage__content ${darkTheme?"darktheme":null}`}>
        <h1 className="lp__heading">WELCOME TO ANYNOTE</h1>

        <h1>Meet Your Modern Note Taking App</h1>
        <h3>
          Manage your Daily Task and Workflow in an Modern way and boost Your
          Efficiency without any Efforts.
        </h3>

        <button class="btn btn_solid-primary btn_primary lp__btn" onClick={()=>navigate(auth.token?"/home":"/signup")} >{auth.token ?"Go to Notes":"Join Now"}</button>
        <div class="lp__desp-account " onClick={()=>navigate("/login")}>Already have an account ?</div>
      </div>
      <span class="material-icons-outlined lg__light-mood" onClick={()=>setDarkTheme(!darkTheme)}>{darkTheme? "dark_mode":"light_mode"}

</span>
      <Footer />
    </div>
  );
};
export { LandingPage };
