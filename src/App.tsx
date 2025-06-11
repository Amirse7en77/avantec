import Application from "./components/Application";
import Contact from "./components/Contact";
import Downloads from "./components/Downloads";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Security from "./components/Security";

const App = () => {
  return <div className="font-Vazir"> 
<Header/>
<Hero/>
<Features/>
<Application/>
<Security/>
<Downloads/>
<Faq/>
<Contact/>

<Footer/>
  </div>;
};

export default App;
