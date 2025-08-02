import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import { AppContext } from './context/AppContext';
import { useContext } from 'react';

import { ToastContainer  } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'


function App() {
  const { showLogin } = useContext(AppContext);


  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-br from-teal-100 to-orange-100">
      <ToastContainer position='bottom-right'/>
      <Navbar />
      {showLogin && <Login />}
      
      {/* Define routes for the application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy-credit" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

