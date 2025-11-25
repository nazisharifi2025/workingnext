"use client";
import { motion } from 'framer-motion';
function Slider() {
  return (
    <div className='text-3xl w-full bg-gray-200 text-center grid grid-cols-2'>
      <motion.div
      initial={{ x: 950, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 3 ,}}
      className='h-full w-full'>
        <img src="/imges/download.jpg" className='h-full w-full' alt="" />
      </motion.div>
      <motion.div
      initial={{ x: -950, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 3 ,}} className='h-full w-full flex flex-col justify-center items-center bg-black'>
        <h1 className=' text-7xl font-black font-serif text-gray-200/80 text-center'>Work With Parallal Routes</h1>
        <p className='text-gray-200/80 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero nesciunt, fuga animi ipsam ea ipsa obcaecati doloremque vitae quasi odio quibusdam voluptate voluptatum nemo! Labore quo aspernatur ullam harum!</p>
      </motion.div>
    </div>
  )
}

export default Slider