import { Features, Hero, Navbar } from "./screens";
// import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="min-h-screen bg-black max-lg:px-9">
      <div className="  max-w-screen-2xl mx-auto px-4">
        <Navbar />
        <Hero />
        <Features />
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
