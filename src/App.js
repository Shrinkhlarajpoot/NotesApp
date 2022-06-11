import "./App.css";
import { Pageroutes } from "./routes/Pageroutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastWrapper } from "./frontend/components/ToastWrapper";


function App() {
  return (
  <div className="app">
     <ToastWrapper/> 
     <Pageroutes/>
  </div>
  )
}

export default App;
