import "./App.css";
import { Pageroutes } from "./routes/Pageroutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
  <div className="app">
     
     <ToastContainer
       
        autoClose={1500}
        position="bottom-right"
      />  
  <Pageroutes/>
  </div>
  )
}

export default App;
