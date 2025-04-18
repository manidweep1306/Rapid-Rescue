"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div 
          ref={sectionRef}
          className="relative rounded-2xl overflow-hidden bg-card opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -inset-[100%] bg-[size:20%_20%] bg-[radial-gradient(circle,hsl(var(--primary)/0.075),transparent_1px)] mix-blend-normal opacity-60" />
            <div className="absolute h-full w-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--chart-1)/0.1),transparent_70%)]" />
            <div className="absolute h-full w-full bg-[radial-gradient(circle_at_70%_70%,hsl(var(--chart-2)/0.1),transparent_70%)]" />
          </div>
          
          <div className="relative p-8 md:p-12 lg:py-16 lg:px-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let's collaborate to create something exceptional. Our team is ready to help you achieve your digital goals.
            </p>
            <Button size="lg" asChild>
              <Link href="#contact">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}