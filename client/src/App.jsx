// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from 'react';

import 'macro-css';
import AdminPanel from './components/adminPanel';
import ItemPage from './components/itemPage';
import HomePage from './components/homePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    console.log('appUseEffect22222222222222222222222222222');
  });

  return (
    <div>
      <Routes>
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/videocards/nvidia" element={<ItemPage itemTypes={1} />} />
        <Route path="/videocards/amd" element={<ItemPage itemTypes={2} />} />
        <Route path="/cpu/intel" element={<ItemPage itemTypes={3} />} />
        <Route path="/cpu/amd" element={<ItemPage itemTypes={4} />} />
        <Route path="/ready" element={<ItemPage itemTypes={5} />} />
        <Route path="/ddr" element={<ItemPage itemTypes={6} />} />
        <Route path="/hdd" element={<ItemPage itemTypes={7} />} />
        <Route path="/ssd" element={<ItemPage itemTypes={8} />} />
        <Route path="/motherboards" element={<ItemPage itemTypes={9} />} />
        <Route path="/case" element={<ItemPage itemTypes={10} />} />
        <Route path="/psu" element={<ItemPage itemTypes={11} />} />
        <Route path="/coolers" element={<ItemPage itemTypes={12} />} />
        <Route path="/monitors" element={<ItemPage itemTypes={13} />} />

        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
