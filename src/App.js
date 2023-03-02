import React ,{useEffect, useState} from "react";
import './App.css';
import Future from "./Future/Future";
import Header from "./Header/Header"
import WhatIsGPT from "./WhatIsGPT/WhatIsGPT";
import Possibility from "./Possibillty/Possibility"
import Blogs from "./Blogs/Blogs";
import Footer from "./Footer/Footer";

function App() {

  const [show,setShow] = useState(false);
  
  useEffect(()=>{
    window.addEventListener("scroll",toTransform());

    return ()=> window.addEventListener("scroll",toTransform());
  })

  function toTransform(){
    if(window.scrollY > 100){
      setShow(true);
    }else {
      setShow(false);
    }
  }


  return (
    <div className="App">
      <Header />
      <WhatIsGPT />
      <Future />
      <Possibility />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
