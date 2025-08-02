import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react';
import { AppContext } from '../context/AppContext';

function Result() {

  const [image, setImage] = useState(assets.sample_img_1);

  const [isimageLoaded, setIsImageLoaded] = useState(false);


  const [loading, setLoading] = useState(false);

  const[input, setInput] = useState('');
  const {generateImage} = useContext(AppContext)

  const onSubmitHandler = async (e) =>{
    e.preventDefault()
    setLoading(true)

    if(input){
      const image= await generateImage( input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)

  }

  return (
    <motion.form 
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    onSubmit={onSubmitHandler} className='flex flex-col items-center justify-center min-h-[90vh] '>
      <div>

<div className='relative'>
<img src={image} alt="" className='max-w-sm rounded'/>
<span className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-[10s] ${loading ? 'w-full' : 'w-0'}`} />


</div>
<p className={!loading ?  'hidden':' '}>Loading.....</p>
</div>
{!isimageLoaded && 
<div className='flex w-full max-w-xl bg-neutral-500 
text-white text-sm p-0.5 rounded-full mt-4 '>
  <input onChange={e=>setInput(e.target.value)} value={input} type="text" placeholder='Describe what you want to generate' className='placeholder-color flex-1 bg-transparent outline-none ml-8 max-sm:w-20' />


   <button type='submit ' className='bg-zinc-900  px-10 sm:px-16 py-3  rounded-full hover:bg-zinc-700 transition-colors duration-300'>
    Generate  
   </button>
</div>}


{isimageLoaded && 
<div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 rounded-full mt-10'>
  <p className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'
  onClick={() => setIsImageLoaded(false)}>Generate Another</p>
  <a href={image}  download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
</div>}

    </motion.form>
 
  )
}

export default Result
