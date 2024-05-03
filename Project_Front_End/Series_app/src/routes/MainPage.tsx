import { useNavigate } from "react-router-dom";
import React from "react";


function MainPage() {

  const nav = useNavigate();


   
   


    
   
 
  return (<div className="MainPage">
<button type="button" className="up" onClick={()=>nav("/register")} > Register </button>
<div className="text-orange-600"> already have an account? </div>
<button type="button" className="in" onClick={()=>nav("/login")}> Login </button>
  </div>
  
  );
}

export default MainPage;