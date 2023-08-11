import Navbar from "./components/navbar/Navbar";
import './App.css';
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Fotter from "./components/Footer/Fotter";
import {themeContext} from "./Context";
import {useContext} from "react";

function App() {
  const theme =useContext(themeContext);
  const darkMode= theme.state.darkMode;
  return (

    <div className="App" 
    style={{background: darkMode? 'black':'',color:darkMode?'white':''}}>
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
<Works/>
<Contact/>
< Fotter/>

        </div>
  );
}

export default App;
