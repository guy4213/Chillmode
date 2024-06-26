import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const NavBar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const nav=useNavigate();
  
  function executeLogOut(){
    logout()
    nav("/MainPage")
  }
  return (
    <nav className="flex flex-row justify-between bg-slate-100 text-xl text-slate-900 dark:bg-inherit dark:text-white shadow-lg mb-1 p-4">
      <div className="flex flex-row gap-10">
       {isLoggedIn&& <NavLink to="/Choose">
          <BsHouse />
        </NavLink>}
        {!isLoggedIn&& <NavLink to="/">
          <BsHouse />
        </NavLink>}
        { isLoggedIn && <NavLink to="/seriesList">Series List</NavLink>}
        { isLoggedIn && <NavLink to="/Choose">Choose Screen</NavLink>}
        { isLoggedIn && <NavLink to="/about">About</NavLink>}
      </div>

      <div className="flex flex-row gap-10">
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
       
        { isLoggedIn && <button onClick={executeLogOut}>Logout</button>}
        <DarkModeToggle />
      </div>
    </nav>
  );
};
