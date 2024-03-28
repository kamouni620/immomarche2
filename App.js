// import { useState } from "react";
// import './css/App.css';
// import Ajouter from "./Components/Ajouter";
 import Details from "./Components/Details";
 import Contact from "./Components/Contact";
 import Alert from "./Components/Alert";

import React, { useState } from "react";
import './css/App4.css'
import './css/App.css'
import './css/App2.css'
import './css/App3.css'
import Ajouter from "./Components/Ajouter";


export default function App(){

const [infos,setinfos]=useState({
     
})
const [ conter,setconter]=useState(0)
const handelCom = ({data})=>{
    setinfos({infos,...data
    })
    console.log(infos)
    if(conter<4){ setconter(conter+1)}
}
const rethandel=()=>{
    setconter(0)
}
const retOnehandel=()=>{
    if(conter>0){ setconter(conter-1)}
}
if(conter===0){
   return <Ajouter func ={handelCom} />

}else if(conter===1){
    return <Details func ={handelCom} func1={retOnehandel}/>

}
else if(conter===2){
    return <Contact func ={handelCom} func1={retOnehandel}/>

}
else{

    return(
        <Alert func={rethandel}/>
    )}
}

