import React,{ useContext }  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';


function Navbar() {

    const { user , setShowLogin ,logout,credit } = useContext(AppContext);
    const navigate = useNavigate();

  return (    <div className='flex justify-between items-center p-4 '>
        <Link to="/" >
      <img src={assets.logo} alt="Logo" className='w-28 sm:w-24 md:w-32 lg:w-40 ' />
      </Link>
      <div>
        {user ? 
        <div className='flex gap-2 items-center sm:gap-3'>
            <button  onClick={() => navigate('/buy-credit')} className='flex items-center gap-2 bg-blue-100  px-4  sm:px-6 py-1.5 sm:py-1 rounded-full hover:scale-105 transition-all duration-700 '>
                <img src={assets.credit_star} alt="img" className='w-5' />
           <p className='text-xs sm:text-sm font medium text-gray-600'> Credits :{credit} </p>
            </button>
            <p className='text-gray-600 max-sm:hidden pl-4'> Hi, {user.name}</p>
            <div className='relative group'>
                <img src={assets.profile_icon} alt="user" className='w-10 drop-shadow' />
                <div className='absolute hidden  group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                    <ul className='list-none m-0 bg-white rounded-md border p-2'>
                        <li className='py-1 px-2 pr-10 cursor-pointer' onClick={logout}>LogOut</li>
                    </ul>
                </div>
                </div>

        </div>:
<div className='flex gap-2 items-center sm:gap-5'>
  <p 
    onClick={() => navigate('/buy-credit')} 
    className='cursor-pointer text-zinc-700 hover:text-black hover:scale-110 transition-transform duration-300 ease-out'
  >
    Pricing
  </p>
  
  <button 
    className='bg-zinc-800 text-white py-2 px-7 sm:px-10 text-sm rounded-full hover:bg-zinc-700 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-out'
    onClick={() => setShowLogin(true)}
  >
    Login
  </button>
</div>


}
      </div>
    </div>
  )
}

export default Navbar
