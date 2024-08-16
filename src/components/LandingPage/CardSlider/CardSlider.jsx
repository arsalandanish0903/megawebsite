import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function CardSlider() {
    const [value, setValue] = useState(0);
    const cards = [
        {
            image: '/card1.png',
            heading: 'App UI/UX Design',
            content: 'Designing the UI/UX for mobile apps and web applications to ensure usability & engagement.',
            rightArrow: <FaArrowRight />
        },
        {
            image: '/card2.png',
            heading: 'Package Design',
            content: 'Creating packaging solutions for products that not only protect but also attract customers in stores.',
            rightArrow: <FaArrowRight />
        },
        {
            image: '/card3.png',
            heading: 'Product Design',
            content: 'Creating packaging solutions for products that not only protect but also attract customers in stores.',
            rightArrow: <FaArrowRight />
        },
        {
            image: '/card4.png',
            heading: 'Logo & Branding',
            content: 'Designing visuals for branding, advertising, and promotional materials.',
            rightArrow: <FaArrowRight />
        },
    ];

    const handleInputChange = (e) => {
        setValue(Number(e.target.value));
    };

    return (
        <div className='text-white my-16'>
            <div className='relative w-full overflow-hidden'>
                <div 
                    className='flex transition-transform duration-500 gap-8'
                    style={{ transform: `translateX(-${value * 100 / (cards.length - 1)}%)` }}>
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            className='min-w-1/3 flex-shrink-0 border-4 my-2 border-[#fdfde1] rounded-xl cursor-pointer relative overflow-hidden'>
                            <img src={card.image} alt="" className='w-full h-96 object-cover transition-all duration-300 hover:scale-110' />
                            <div className='absolute bottom-12 px-4'>
                                <h4 className='font-bold text-xl text-[#fdfde1]'>{card.heading}</h4>
                                <div className='flex items-center'>
                                    <span className='text-lg text-[#fdfde1]'>{card.content}</span>
                                    <span className='text-xl font-bold mx-2'>{card.rightArrow}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative mt-4'>
                <input 
                    type="range" 
                    min="0"
                    max={cards.length - 2}
                    value={value}
                    onChange={handleInputChange}
                    step="1"
                    className='w-full focus:outline-none cursor-pointer'
                />
            </div>
        </div>
    );
}

export default CardSlider;
