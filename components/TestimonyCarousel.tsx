'use client';

import { useState, useEffect } from 'react';
import Testimony from './Testimony';

interface TestimonyData {
    id: string;
    name: string;
    date: string;
    comment: string;
    rating: number;
    image: string;
}

interface TestimonyCarouselProps {
    testimonies: TestimonyData[];
}

const TestimonyCarousel = ({ testimonies }: TestimonyCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);
    const totalSlides = testimonies.length;

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    const getVisibleIndices = () => {
        const indices: number[] = [];
        for (let i = 0; i < slidesToShow; i++) {
            indices.push((currentIndex + i) % totalSlides);
        }
        return indices;
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const visibleIndices = getVisibleIndices();

    return (
        <div className="w-full">
            <div className="relative">
                <button
                    onClick={goToPrevious}
                    className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-secondary hover:text-white transition-colors"
                    aria-label="Témoignage précédent"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
                    </svg>
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-secondary hover:text-white transition-colors"
                    aria-label="Témoignage suivant"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
                    </svg>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
                    {visibleIndices.map((index) => (
                        <div key={testimonies[index].id} className="flex w-full items-start">
                            <Testimony
                                name={testimonies[index].name}
                                date={testimonies[index].date}
                                comment={testimonies[index].comment}
                                rating={testimonies[index].rating}
                                image={testimonies[index].image}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-[8px] h-[8px] rounded-full transition-all ${
                            slidesToShow === 1 
                                ? (index === currentIndex ? 'bg-secondary w-8' : 'bg-gray-300 hover:bg-gray-400')
                                : (visibleIndices.includes(index) ? 'bg-secondary w-8' : 'bg-gray-300 hover:bg-gray-400')
                        }`}
                        aria-label={`Aller au témoignage ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonyCarousel;

