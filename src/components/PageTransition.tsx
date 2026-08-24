import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export function PageTransition({ children }: { children: ReactNode }) {
    const location = useLocation();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(false);
        // Ensure scroll to top happens at the moment of route switch
        window.scrollTo(0, 0);

        // Force reflow and subtle transition on route change
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setAnimate(true);
            });
        });
    }, [location.pathname]);

    return (
        <div className={`transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            {children}
        </div>
    );
}
