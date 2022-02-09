import React, { useState } from "react";
import userContext from "./usercontext";



const UserState=(props)=>{
   const [auth,setauth]=useState("")
 return (
        <userContext.Provider value={{auth,setauth}}>
                {props.children}
        </userContext.Provider>
    )
}

export default UserState;