"use client";
import { motion } from 'framer-motion';
function Slider() {
  return (
    <div className='text-3xl w-full overflow-x-hidden  bg-stone-300 text-center grid grid-cols-2'>
      <motion.div
      initial={{ x: 950, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 3 ,}}
      className='h-screen w-full '>
        <img src="/imges/images.jpg" className='h-full w-full' alt="" />
      </motion.div>
      <motion.div
      initial={{ x: -950, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 3 ,}} className='h-full shadow-md shadow-black/50 w-full flex flex-col justify-center items-center bg-black'>
        <h1 className=' text-7xl font-black font-serif  bg-stone-300 text-transparent bg-clip-text text-center'>Work With Parallal Routes</h1>
        <p className='text-gray-200/80 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero nesciunt, fuga animi ipsam ea ipsa obcaecati doloremque vitae quasi odio quibusdam voluptate voluptatum nemo! Labore quo aspernatur ullam harum!</p>
      </motion.div>
    </div>
  )
}

export default Slider