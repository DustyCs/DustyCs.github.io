import { useState, useEffect } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function ComponentSlider({ slides }) {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
        console.log("next")
    };

    const prev = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    // useEffect(() => {
    //     const interval = setInterval(next, 3000);

    //     // Clear the interval when the component unmounts
    //     return () => clearInterval(interval);
    // }, [current]);

    const CurrentSlide = slides[current]; // component

  return (
    <div className="h-auto sm:h-[22rem] relative flex flex-col sm:flex-row items-center ">
        <div className='h-[100%] '>
            <CurrentSlide />
        </div>
        <div className="
            flex mb-2 gap-5 items-center justify-center
            sm:absolute bottom-0 left-[50%] sm:translate-x-[-50%] sm:flex sm:self-center sm:gap-5">
            <button className='text-4xl cursor-pointer ' onClick={prev}>
                <FaArrowLeftLong />
            </button>
            <button className='text-4xl cursor-pointer' onClick={next}>
                <FaArrowRightLong />
            </button>
        </div>
    </div>
  )
}
