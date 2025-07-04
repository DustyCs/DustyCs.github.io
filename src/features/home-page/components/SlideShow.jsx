import { useState, useEffect } from 'react'

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
    <div className="h-[22rem] relative flex items-center ">
        <div className='h-[90%] '>
            <CurrentSlide />
        </div>
        <div className="absolute bottom-0 left-2 space-x-2">
            <button className='text-2xl bg-gray-100 border-1' onClick={prev}>← Prev</button>
            <button className='text-2xl bg-gray-100 border-1' onClick={next}>Next →</button>
            <div className="relative flex justify-center">
                <button className="w-3 h-3 mt-[1.75rem] rounded-full bg-gray-800 cursor-pointer outline-offset-2 outline-2 outline-[#895c27]"/>
            </div>
        </div>
    </div>
  )
}
