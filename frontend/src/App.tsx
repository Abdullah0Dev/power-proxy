import { FAQ, Features, Footer, Hero, Navbar, Pricing, Testimonials } from "./screens";
// import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="min-h-screen bg- black ">
      <div className="  max-w-screen-2xl mx-auto ">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}; 
export default App;
