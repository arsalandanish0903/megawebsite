import React, { useEffect } from 'react'

function AutoTextSlider({texts, interval}) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    useEffect(() => {
        const sliderInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, interval);
        return () => clearInterval(sliderInterval);
    }, [texts, interval])


    return (
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="absolute transition-opacity duration-1000">
            <p className="text-lg font-semibold">{texts[currentIndex]}</p>
          </div>
        </div>
      );
}

export default AutoTextSlider