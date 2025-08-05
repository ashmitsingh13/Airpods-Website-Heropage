import React from 'react'
import { NavbarData } from '../data/MockData';
import { FaRegUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <>
    <nav className='text-white py-5'>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1, ease: "easeInOut"}} className='container p-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex justify-between items-center'>
        <div className='flex items-center gap-2 text-3xl font-semibold '>
        <FaApple />
        AirPods Max
        </div>
        <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
                {
                    NavbarData.map((item) => {
                        return <li key={item.id} className='inline-block mx-4 text-lg'>
                            <a href={item.link} className='inline-block text-base py-2 px-3 uppercase'>{item.title}</a>            
                            </li>
                    })
                }
                <button className='text-xl ps-14'>
                    <FaRegUser />
                </button>
            </ul>
        </div>
        <div className='md:hidden'>
            <MdMenu className='text-4xl' />
        </div>
    </motion.div>
    </nav>
    </>
  )
}

export default Navbar