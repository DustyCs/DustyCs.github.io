import { useState, useEffect } from 'react'

export default function ComponentSlider({ slides }) {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prev = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    // useEffect(() => {
    //     const interval = setInterval(next, 5000);

    //     // Clear the interval when the component unmounts
    //     return () => clearInterval(interval);
    // }, [current]);

    const CurrentSlide = slides[current]; // component

  return (
    <div className="h-[20rem] relative border">
        <CurrentSlide />
        <div className="absolute bottom-0 left-2 space-x-2">
            <button onClick={prev}>← Prev</button>
            <button onClick={next}>Next →</button>
            <div className="relative flex justify-center">
                <button className="w-3 h-3 mt-[1.75rem] rounded-full bg-gray-800 cursor-pointer outline-offset-2 outline-2 outline-[#895c27]"/>
            </div>
        </div>
    </div>
  )
}
