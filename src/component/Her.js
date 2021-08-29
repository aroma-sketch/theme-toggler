import React ,{useContext} from "react";
import ThemeContext from "../Context/ThemeContext"
import AppTheme from "../Color"
import ThemeToggler from "./ThemeToggler";



 const Her = () => {
     const theme =useContext (ThemeContext)[0]
     const currentTheme =AppTheme[theme]
     return(
         <div
         style={{
             padding:"lrem",
             backgroundColor : `${currentTheme.backgroundColor}`,
             color:`${currentTheme.textColor}`,
             textAlign :"center"
         }}>
             <h1>theme toggler</h1>
             <p>haha i did 255 

             </p>
             <button style={{
                 backgroundColor : "#26ae60",
                 padding: "10px 150px",
                 fontSize:"20px",
                 color:" #fff",
                 border:`${currentTheme.border}`
             }}>
                 <ThemeToggler/>
                 </button>

             {/* <button style={{
                 backgroundColor : "#26ae60",
                 padding: "10px 150px",
                 fontSize:"20px",
                 color:" #fff",
                 border:`${currentTheme.border}`
             }}>
                 click me
             </button> */}
         </div>
     )

 }


 export default Her;