import React from 'react'
import{ testimonialsData ,assets} from '../assets/assets';
import { motion } from "motion/react"

function Testimonial() {
  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center my-20 py-12 ">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4 transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1">
        Customer Testimonials

      </h1>
      <p className="text-gray-500 mb-16 text-center sm:text-base text-sm transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-1">
        What Our Users Are Saying
      </p>

      <div className='flex flex-wrap gap-6'>
        {testimonialsData.map((testimonial, index) => (
            <div key={index} className='bg-white/20 p-12 rounded-lg shadow-md w-80 sm:w-96 order m-auto cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.05] hover:-translate-y-1'>
                <div className='flex flex-col items-center '>
                    <img
                        src={testimonial.image}
                        alt='Customer'
                        className="w-14 rounded-full "/>
                        <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
                        <p className="text-gray-500 mb-4">{testimonial.role}</p>
                        <div className='flex  mb-4'>
                            {Array(testimonial.stars).fill(0).map((item,index) => (
                                <img
                                    key={index}
                                    src={assets.rating_star}
                                    alt='Star'
                                    
                                />

                            ))}

                        </div>
                        <p className='text-center text-sm text-gray-600'>{testimonial.text}</p>
                    </div>

            </div>
        ))}

      </div>
    </motion.div>
  )
}

export default Testimonial
