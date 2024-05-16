import { useAppState } from "../AppState";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

function Header() {
  const nav=useNavigate();
  const location = useLocation();

  console.log(location.pathname); // Logs the pathname of the current location
  // You can also access other properties of the location object if needed

  const { Name, isUserExist,setIsUserExist } = useAppState();
  const storedName = localStorage.getItem('Name') || '';
  console.log('Stored Name:', storedName);
  if (storedName){setIsUserExist(true)}
  console.log('isUserExist? ', isUserExist);
  return (
    <header>
   <div className="font-extrabold text-3xl text-amber-500 shadow-2xl rounded-lg ">
    {isUserExist&&    location.pathname!=="/login"&&
  location.pathname!=="/register"&&
  location.pathname!=="/MainPage"&&
  
  location.pathname!=="/"&& 
         "Hello "+Name+"!"}</div>
      <h1>


   
      
      {Name &&location.pathname=="/seriesList" && "Welcome To SeriesList Screen"}
      {Name && location.pathname === "/Choose" && (
  <div>
    Welcome!
    <br />
    Choose your action to proceed:
  </div>
)}
      {location.pathname=="/seriesDetails"&&"Welcome To Series Details Screen"}
      {!isUserExist &&  "Welcome To ChillMode"}
      {location.pathname=="/about"&&"About ChiilMode"}

      </h1>
    </header>
  );
}

export default Header;
