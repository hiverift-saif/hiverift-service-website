import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar"; 
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Insights from "./pages/Insights";
import Technology from "./pages/Technology";
import Contactus from "./pages/contactus";
import Who from "./pages/Who";
import Whatwedo from "./pages/Whatwedo";
import Banking from "./pages/whatWeDo/Industries/Banking";
import Retail from "./pages/whatWeDo/Industries/Retail";
import Healthcare from "./pages/whatWeDo/Industries/Healthcare";
import CapitalMarkets from "./pages/whatWeDo/Industries/CapitalMarkets";
import CommunicationsMediaInformationServices from "./pages/whatWeDo/Industries/CommunicationsMediaInformationServices";
import ConsumerPackaged from "./pages/whatWeDo/Industries/ConsumerPackaged";
import Education from "./pages/whatWeDo/Industries/Education";
import EnergyResourcesUtilities from "./pages/whatWeDo/Industries/EnergyResourcesUtilities";
import GoodsandDistribution from "./pages/whatWeDo/Industries/GoodsandDistribution";
import HighTech from "./pages/whatWeDo/Industries/HighTech";
import Insurance from "./pages/whatWeDo/Industries/Insurance";



function App() {
  return (
    <Router>
      {/* ✅ Common Navbar */}
      <Navbar />

      {/* ✅ Page Content */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/what-we-do" element={<Whatwedo />} />
          <Route path="/who-we-are" element={<Who />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contactus" element={<Contactus />} />

          <Route path="/what-we-do/industries/banking" element={<Banking/>} />
      <Route path="/what-we-do/industries/retail" element={<Retail />} />
         <Route path="/what-we-do/industries/healthcare" element={<Healthcare />} /> 
          <Route path="/what-we-do/industries/CapitalMarkets" element={<CapitalMarkets />} /> 

           <Route path="/what-we-do/industries/CapitalCommunicationsMediaInformationServicesMarkets" element={<CommunicationsMediaInformationServices />} /> 
     <Route path="/what-we-do/industries/ConsumerPackaged" element={<ConsumerPackaged />} /> 
      <Route path="/what-we-do/industries/Education" element={<Education />} /> 
       <Route path="/what-we-do/industries/EnergyResourcesUtilities" element={<EnergyResourcesUtilities />} /> 
       <Route path="/what-we-do/industries/GoodsandDistribution" element={<GoodsandDistribution />} />
         <Route path="/what-we-do/industries/HighTech" element={<HighTech />} /> 
            <Route path="/what-we-do/industries/Insurance" element={<Insurance />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
