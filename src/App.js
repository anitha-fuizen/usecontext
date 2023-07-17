import {createContext, useState} from "react"
import './App.css';
import Theme from "./Components/Theme";
import Child from "./Components/Child";
export const context=createContext()

function App() {
  const[theme,setTheme]=useState(true)
  const [theme1,setTheme1]=useState("dark")

  const toggle=()=>{
    setTheme1((prev)=>prev==="dark"?"light":"dark")
  }

  const changetheme=()=>{
    setTheme(!theme)
  }
  return (
    <context.Provider value={{theme1,toggle}} >
    <div className={theme1}>
      <button onClick={changetheme}>change</button>
      <button onClick={toggle}>get</button>
     <Theme/> 
     <Child/> 
    </div>
    </context.Provider>
  );
}

export default App;
