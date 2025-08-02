import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { plans, assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function BuyCredit() {
  const { user, backendUrl, token, loadCreditsData, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Payment for credits',
      image: assets.logo_icon,
      order_id: order.id,
      handler: async function (response) {
        try {
          const { data } = await axios.post(
            `${backendUrl}/api/user/verify-razor`,
            response,
            { headers: { token } }
          );

          if (data.success) {
            toast.success("Credits added successfully!");
            loadCreditsData();
            navigate('/');
          } else {
            toast.error("Payment verification failed.");
          }
        } catch (err) {
          console.error("Verify handler error:", err);
          toast.error("Something went wrong during verification.");
        }
      },
      prefill: {
        name: user?.name || 'User',
        email: user?.email || '',
      },
      notes: {
        address: 'User Credits Purchase',
      },
      theme: {
        color: '#333',
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.on('payment.failed', function (response) {
      console.error("Payment failed:", response.error);
      toast.error("Payment failed. Please try again.");
    });

    razorpay.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }

      const { data } = await axios.post(
        `${backendUrl}/api/user/pay-razor`,
        { planId },
        { headers: { token } }
      );

      if (data.success) {
        initPay(data.order);
      } else {
        toast.error("Unable to initiate payment.");
      }
    } catch (error) {
      console.error("PaymentRazorpay Error:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='min-h-[80vh] text-center pt-14 mb-10'
    >
      <button className='border border-gray-400 rounded-full py-2 px-10 mb-6'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div
            key={index}
            className='bg-white drop-shadow-sm rounded-lg border py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'
          >
            <img width={50} src={assets.logo_icon} alt="" />
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'>${item.price}</span> / {item.credits} credits
            </p>
            <button
              onClick={() => paymentRazorpay(item.id)}
              className='bg-gray-800 w-full text-white rounded-md py-2.5 min-w-52 text-sm mt-8 hover:scale-105 transition-all duration-500'
            >
              {user ? 'Purchased' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default BuyCredit;
