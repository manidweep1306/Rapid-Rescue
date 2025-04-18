"use client";

import React from "react";
import { cn } from "@/lib/utils";

type MotionProps = {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
} & React.HTMLAttributes<HTMLDivElement>;

// This is a simplified motion component that mimics some basic framer-motion functionality
export const motion = {
  div: ({ 
    initial, 
    animate, 
    transition, 
    className, 
    children,
    ...props 
  }: MotionProps) => {
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (!ref.current) return;
      
      // Apply initial state
      if (initial) {
        Object.entries(initial).forEach(([key, value]) => {
          if (key === 'opacity') {
            ref.current!.style.opacity = value.toString();
          } else if (key === 'y') {
            ref.current!.style.transform = `translateY(${value}px)`;
          } else if (key === 'x') {
            ref.current!.style.transform = `translateX(${value}px)`;
          }
        });
      }
      
      // Apply animations after a frame
      requestAnimationFrame(() => {
        if (!ref.current) return;
        
        // Set transition properties
        if (transition) {
          const duration = transition.duration || 0.3;
          const delay = transition.delay || 0;
          const ease = transition.ease || 'ease';
          
          ref.current.style.transition = `all ${duration}s ${ease} ${delay}s`;
        } else {
          ref.current.style.transition = 'all 0.3s ease';
        }
        
        // Apply animate state
        if (animate) {
          Object.entries(animate).forEach(([key, value]) => {
            if (key === 'opacity') {
              ref.current!.style.opacity = value.toString();
            } else if (key === 'y') {
              ref.current!.style.transform = `translateY(${value}px)`;
            } else if (key === 'x') {
              ref.current!.style.transform = `translateX(${value}px)`;
            }
          });
        }
      });
    }, [initial, animate, transition]);

    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  }
};