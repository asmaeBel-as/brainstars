import "./App.css";
import React,{useState} from "react";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import AboutUs from "./Components/AboutUs/about";
import Careers from "./Components/Careers/careers";
import Services from "./Components/Services/services";
import Footer from "./Components/Footer/footer";
import Blog from "./Components/Blog/blog";
import ContactUs from "./Components/ContactUs/contactUs";
import Technologies from "./Components/Technologies/technologies";
import Testimonials from "./Components/Testimonial/testimonial";
import Counter from './Components/Counter/counter';
import Card from './Components/Card/Card';
import AppDev from './Components/Appdev/Appdev';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Founders from "./Components/Founders/Founders";
import Chat from './Components/chatbox/chatbox'
import Mobile from './Components/mobile/mobile';
import Web from './Components/web/web';
import Graphic from './Components/graphic/graphic';
import Digital from './Components/digital/digital';


function App() {
  const [loading, setLoading] = useState(true);
  const gifContainer = document.getElementById("gifContainer");
  if (gifContainer) {
    setTimeout(() => {
      gifContainer.style.display = "none";
      setLoading(false)
    },5000)
  }
  return (
    !loading && (
      <BrowserRouter>
        <>
          <Routes>
            <Route
              index
              element={
                <>
                  <Navbar />
                  <Outlet />
                  <Home />
                  <AboutUs />
                  <Founders />
                  <Services />
                  <Counter />
                  <Card />
                  <Technologies />
                  <Testimonials />
                  <Footer />
                 
                </>
              }
            />
            <Route
              exact
              path="/contactUs"
              element={
                <>
                  <Navbar />
                  <ContactUs />
                  <Footer />
                </>
              }
            />{" "}
            <Route
              exact
              path="/blog"
              element={
                <>
                  <Navbar />
                  <Blog />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/AppDev"
              element={
                <>
                  <Navbar />
                  <AppDev />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/graphic"
              element={
                <>
                  <Navbar />
                  <Graphic />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/mobile"
              element={
                <>
                  <Navbar />
                  <Mobile />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/web"
              element={
                <>
                  <Navbar />
                  <Web />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/digital"
              element={
                <>
                  <Navbar />
                  <Digital />
                  <Footer />
                </>
              }
            />
            {/* <Navbar />
          <Home />
          <AboutUs />
          <Services />
          <Counter />
          <Card />
          <Technologies />
          <Testimonials />
          <ContactUs />
          <Footer /> */}
          </Routes>

          {/* 
      <Careers />
      
     
      
      <Blog />
      
       */}
        </>
      </BrowserRouter>
    )
  );
}

export default App;
