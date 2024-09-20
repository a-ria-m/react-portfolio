import './App.css';
import profileImage from './profile.png';
import art1Image from './art1.png';
import art2Image from './art2.png';
import art3Image from './art3.png';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
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
        <h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at mauris posuere, pharetra diam nec, sodales eros. Praesent at tellus id ante semper pharetra. Mauris eu magna lectus. Cras sed hendrerit magna. Phasellus vel ligula a ante tincidunt fringilla sit amet eu nulla. Proin at ligula tristique metus sodales lacinia. Nam bibendum leo sit amet leo vulputate, id molestie lacus commodo. </h5>
      </div>


      </h1>
    </div>


        <div className="row">
          <div className="App">

          <div id = "Portfolio" className="row">
            <Portfolio art={art1Image} name="Neon Streets" description="Made On Clip Studio Paint" modal="Modal-1" />
            <Modals number="Modal-1" name="Neon Streets" description="Made On Clip Studio Paint" />

            <Portfolio art={art2Image} name="Busy Day" description="Made On Clip Studio Paint" />
            <Modals number="Modal-2" name="Busy Day" description="Made On Clip Studio Paint"/>

            <Portfolio art={art3Image} name="Falling Pages" description="Made On Clip Studio Paint" />
            <Modals number="Modal-3" name="Falling Pages" description="Made On Clip Studio Paint"/>

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

