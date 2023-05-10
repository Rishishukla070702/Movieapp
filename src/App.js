
import TopBar from "./topbar/TopBar";
import React from "react";

import Header from "./header/Header";
import Posts from "./posts/Posts";
import Trailer from "./Trailer/Trailer";
import Recommended from "./Recommended/Recommended";
import Footer from "./footer/Footer";
function App() {
  const user=true;
  return (
    <div>
    
      <TopBar/>
      <Header/>
      <Posts/>
      <Trailer/>
      <Recommended/>
      <Footer/>
      </div>
  );
}

export default App;
