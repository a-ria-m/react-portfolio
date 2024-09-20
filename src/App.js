import './App.css';
import profileImage from './profile.png';
import art1Image from './art1.png';
import art2Image from './art2.png';
import art3Image from './art3.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/navbar.js";
import Contact from "./Components/contact.js";
import Portfolio from "./Components/portfolio.js";
import Modals from "./Components/modals.js";

function App() {
  return (
    
    <><Navbar />
    <div className="main">
      <h1>
      <img className="header" src={profileImage} alt="Profile" />
      <div className="Aboutme">
        <h2>About Me</h2>
        <h5> Freelance artist and writer </h5>
        <h5> Born on July 28, 2003 </h5>
        <h5> 3rd Year BSCS student  </h5>
      </div>

      </h1>
    </div>


        <div className="row">
          <div className="App">

          <div id = "Portfolio" className="row">
            <Portfolio art={art1Image} name="Neon Streets" description="Made On Clip Studio Paint" modal="Modal-1" />
            <Modals number="Modal-1" name="Neon Streets" description="Created on 21/06/2023" />

            <Portfolio art={art2Image} name="Busy Day" description="Made On Clip Studio Paint" modal="Modal-2"/>
            <Modals number="Modal-2" name="Busy Day" description="Created on 17/01/2024"/>

            <Portfolio art={art3Image} name="Falling Pages" description="Made On Clip Studio Paint" modal="Modal-3"/>
            <Modals number="Modal-3" name="Falling Pages" description="Created on 27/12/2023"/>

          </div>
          <div id="ContactMe" className="row"> 
          <Contact />
        </div>
        </div>
        </div>
      </>

  );
  
}

export default App;

