'use client';

import { useState, useEffect, useRef } from 'react';

const KeyNumber = ({ number, description, animate = true, symbol }:
    { number: string, description: string, animate?: boolean, symbol?: string }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const numberRef = useRef<HTMLDivElement>(null);
    const hasAnimatedRef = useRef(false);

    const extractNumber = (str: string): number | null => {
        const match = str.match(/(\+?\d+)/);
        return match ? parseInt(match[1], 10) : null;
    };

    const extractFormat = (str: string): { prefix: string, suffix: string, num: number | null } => {
        const num = extractNumber(str);
        if (num === null) return { prefix: '', suffix: '', num: null };

        const prefixMatch = str.match(/^(\+?)/);
        const prefix = prefixMatch ? prefixMatch[1] : '';
        const suffix = str.replace(/^\+?\d+/, '').trim();

        return { prefix, suffix, num };
    };

    const { prefix, suffix, num } = extractFormat(number);

    useEffect(() => {
        if (num === null || hasAnimatedRef.current || !animate) return;

        const currentElement = numberRef.current;
        if (!currentElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimatedRef.current) {
                        hasAnimatedRef.current = true;
                        setHasAnimated(true);

                        const duration = 1000;
                        const steps = 60;
                        const increment = num / steps;
                        const stepDuration = duration / steps;

                        let currentStep = 0;
                        const timer = setInterval(() => {
                            currentStep++;
                            const newValue = Math.min(Math.floor(increment * currentStep), num);
                            setCount(newValue);

                            if (currentStep >= steps) {
                                setCount(num);
                                clearInterval(timer);
                            }
                        }, stepDuration);

                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        observer.observe(currentElement);

        return () => {
            observer.disconnect();
        };
    }, [num]);

    if (num === null) {
        return (
            <div className="col-span-2 gap-[24px]">
                <h3 className="text-2xl mb-2">{number}</h3>
                <p className="text-base">{description}</p>
            </div>
        );
    }

    if (!animate) {
        return (
            <div className="col-span-2 gap-[24px]">
                <h3 className="text-2xl mb-2">{number}</h3>
                <p className="text-base">{description}</p>
            </div>
        );
    }

    return (
        <div ref={numberRef} className="col-span-2 gap-[24px]">
            <h3 className="text-2xl mb-2">
                {hasAnimated ? `${prefix}${symbol ? symbol + ' ' : ''}${count}${suffix ? ' ' + suffix : ''}` : `${prefix}0${suffix ? ' ' + suffix : ''}`}
            </h3>
            <p className="text-base">{description}</p>
        </div>
    );
}

export default KeyNumber;