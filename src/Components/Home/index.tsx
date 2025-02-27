import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  return (
    <div className='flex gap-6 mt-8 md:mx-4 max-sm:flex-col-reverse'>
      <div className='flex-1 pl-10 flex flex-col items-center justify-center gap-4' data-aos="fade-up">
        <p className='text-6xl font-conforter max-sm:text-4xl'>The Feature Is In Your Hands</p>
        <p className='text-xl'>We provide fast and flexible solutions, designed for you to serve your customers and face the challenges of the future</p>
      </div>
      <div className='flex-1 flex justify-center' data-aos="fade-down">
        <img src="/Image.svg" alt="home" className='max-sm:w-5/6 max-sm:h-5/6' width={450} />
      </div>
    </div>
  )
}

export default Home
