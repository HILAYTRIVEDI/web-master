import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () =>
{
    const { scrollYProgress } = useScroll();

    // Transform the footer's y position based on the scroll position
    const y = useTransform(scrollYProgress, [0.9, 0.9], [100, 0]); // Adjust the values as needed

    return (
        <motion.div
            className='bg-white text-zinc-900'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ y }} // Apply the transformed y position
            transition={{ duration: 0.5 }}
        >
            <div className='container mx-auto py-10 px-5 flex flex-col md:flex-row justify-between items-center'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <h1 className='text-2xl font-bold'>Ochi</h1>
                    <p className='text-sm'>© 2023 Ochi. All rights reserved.</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <a href='#' className='text-sm'>About Us</a>
                    <a href='#' className='text-sm'>Contact Us</a>
                    <a href='#' className='text-sm'>Blog</a>
                    <a href='#' className='text-sm'>Terms & Conditions</a>
                    <a href='#' className='text-sm'>Privacy Policy</a>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;
