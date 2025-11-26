import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='text-5xl font-black h-[40vh] flex-col gap-3  p-12 flex justify-center items-center bg-black shadow-md  shadow-gray-600'>
        <h1 className=' text-7xl font-black font-serif  bg-stone-300 text-transparent bg-clip-text text-center'>Profile Page</h1>
                <h1 className=' text-2xl font-black font-serif px-3 py-2 shadow-md hover:shadow-initial shadow-stone-400  text-black bg-stone-300  text-center'><Link href="Dashbord/ProfielF"> Profile Friend</Link></h1>
        </div>
  )
}

export default page