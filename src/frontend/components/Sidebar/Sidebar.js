import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context";

const Sidebar = () => {
const {auth}  =useAuth()
  return (
    <div className="sidebar">
      <div>
        <NavLink
          to="/home"
          className={`sidebar__btn Link_style  ${({ isActive }) =>
            isActive ? "active" : null}`}
        >
          <span class="material-icons-outlined">note_add</span>
          <span>Notes</span>
        </NavLink>
        <NavLink
          to="/labels"
          className={`sidebar__btn Link_style  ${({ isActive }) =>
            isActive ? "active" : null}`}
        >
          <span class="material-icons-outlined">turned_in_not</span>
          <span>Labels</span>
        </NavLink>
        <NavLink
          to="/archive"
          className={`sidebar__btn Link_style  ${({ isActive }) =>
            isActive ? "active" : null}`}
        >
          <span class="material-icons-outlined">archive</span>
          <span>Archive</span>
        </NavLink>
        <NavLink
          to="/trash"
          className={`sidebar__btn Link_style  ${({ isActive }) =>
            isActive ? "active" : null}`}
        >
          <span class="material-icons-outlined">delete</span>
          <span>Trash</span>
        </NavLink>
      </div>
      <div>
      <div class="user_account">
        <span class="material-icons-outlined">account_circle</span>
        <h3>{auth.user}</h3>
      </div>
      </div>
    </div>
  );
};
export { Sidebar };
