import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    animation?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-in-right' | 'slide-in-left';
    delay?: number;
    duration?: number;
    className?: string;
    threshold?: number;
}

export function ScrollReveal({ children, animation = 'fade-up', delay = 0, duration = 700, className = '', threshold = 0.1 }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Respect prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, {
            threshold,
            rootMargin: '50px',
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    const baseClasses = `transition-all ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${className}`;

    let animClasses = '';
    if (animation === 'fade-up') {
        animClasses = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
    } else if (animation === 'fade-in') {
        animClasses = isVisible ? 'opacity-100' : 'opacity-0';
    } else if (animation === 'scale-up') {
        animClasses = isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
    } else if (animation === 'slide-in-right') {
        animClasses = isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8';
    } else if (animation === 'slide-in-left') {
        animClasses = isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8';
    }

    return (
        <div
            ref={ref}
            className={`${baseClasses} ${animClasses}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
}
