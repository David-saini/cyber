import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Preloader from './components/Preloder';
import Home from './components/Home';
import './assets/css/root.css'
import AboutUs from './components/AboutUs';
import PartnerSec from './components/PartnerSec';
import AlgorithumSec from './components/AlgorithumSec';
import Info from './components/Info';
import WorkingProcess from './components/WorkingProcess';
import TeamMembers from './components/TeamMembers';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Roadmap from './components/Roadmap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    AOS.init();

    const preloader = document.getElementById('preloader')
    setTimeout(() => {
      preloader.classList.add('d-none')
      preloader.classList.add('pointer-event-none')
      document.body.classList.remove('overflow-hidden')
    }, 1500)
    document.body.classList.add('overflow-hidden')



  }, [])

  return (
    <div>
      <Preloader />
      <Nav />
      <Home />
      <AboutUs />
      <PartnerSec />
      <AlgorithumSec />
      <Info />
      <WorkingProcess />
      <TeamMembers />
      <Roadmap />
      <FAQ />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;