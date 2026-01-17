'use client';

import { useState, useEffect, useRef } from 'react';

export default function ServiceCard({
    icon,
    title,
    description,
    url,
    number
}: {
    icon: string,
    title: string,
    description: string,
    url: string,
    number?: number
}) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (number === undefined || hasAnimated) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        // Déclencher l'animation quand l'élément devient visible
                        const duration = 2000; // 2 secondes
                        const steps = 60; // 60 étapes pour une animation fluide
                        const increment = number / steps;
                        const stepDuration = duration / steps;

                        let currentStep = 0;
                        const timer = setInterval(() => {
                            currentStep++;
                            const newValue = Math.min(Math.floor(increment * currentStep), number);
                            setCount(newValue);

                            if (currentStep >= steps) {
                                setCount(number);
                                setHasAnimated(true);
                                clearInterval(timer);
                            }
                        }, stepDuration);

                        // Arrêter d'observer une fois l'animation déclenchée
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.1 // Déclencher quand 10% de l'élément est visible
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [number, hasAnimated]);

    return (
        <div
            ref={cardRef}
            className="bg-white border-4 border-secondary space-y-[20px] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
        >
            <div className="text-4xl mb-4 flex justify-center items-center">
                {icon.startsWith('<svg') ? (
                    <div dangerouslySetInnerHTML={{ __html: icon }} className="w-12 h-12 text-secondary" />
                ) : (
                    icon
                )}
            </div>
            {number !== undefined && (
                <div className="text-3xl font-bold text-secondary mb-2">
                    {count}
                </div>
            )}
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="opacity-80">{description}</p>
            <a href={url} className="text-secondary underline block">En savoir plus</a>
        </div>
    );
}