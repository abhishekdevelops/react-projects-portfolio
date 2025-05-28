import React, { useState } from "react";

function App(){

  const[isDarkMode,setIsDarkMode]=useState(false);

  const appStyles={
  height:"100vh",
  backgroundColor: isDarkMode? "#222" :"#fff",
  color: isDarkMode? "#fff" : "#222",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  transition:"all 0.3s ease",
  }

  return(
   <div style={appStyles}>
    <h1>Theme Toggle App</h1>
    <button onClick={()=> setIsDarkMode(!isDarkMode)}>{isDarkMode? "Switch to Light Mode": "Switch to Dark Mode"}</button>

   </div>
  )
}
export default App;


