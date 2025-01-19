import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='px-32 max-sm:px-10'>
      <p className='text-2xl font-medium'>About Us</p>
      <div className='flex max-lg:flex-col gap-6'>
        <div className='flex-1'>
            <div className='backdrop-saturate-200 bg-slate-300/30 p-4 rounded-xl mt-4 shadow-lg' data-aos='fade-up'>
              <p>We work with banks and financial institutes, each with their own tier and business needs, 
                to create excellent solutions in order to satisfy their corporate, SME, and retail needs.</p>
            </div>
            <div className='flex-1 flex flex-col mt-4 gap-4'>
              <div className='backdrop-saturate-200 bg-slate-300/30 p-4 rounded-xl shadow-lg' data-aos='fade-up'>
                <p className='text-lg font-semibold'>Vision</p>
                <p>We work with banks and financial institutes, each with their own tier and business needs, 
                  to create excellent solutions in order to satisfy their corporate, SME, and retail needs.</p>
              </div>
              <div className='backdrop-saturate-200 bg-slate-300/30 p-4 rounded-xl shadow-lg' data-aos='fade-up'>
                <p className='text-lg font-semibold'>Mission</p>
                <p>We work with banks and financial institutes, each with their own tier and business needs, 
                  to create excellent solutions in order to satisfy their corporate, SME, and retail needs.</p>
              </div>
            </div>
        </div>
        <div className='flex-1 mt-4 flex justify-center items-center max-sm:mb-5'>
          <img className='rounded-xl w-4/5 max-sm:w-full' src="/images.jpeg" alt="foto" data-aos='fade-down' />
        </div>
      </div>
    </div>
  )
}

export default About
