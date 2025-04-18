"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    content: "Horizon completely transformed our online presence. Their team delivered a website that not only looks stunning but also significantly improved our conversion rates. The attention to detail was remarkable.",
    author: "Sarah Johnson",
    role: "CEO, Elevate Marketing",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    content: "Working with Horizon was an excellent experience from start to finish. They understood our vision and executed it flawlessly. Our new app has received outstanding feedback from users and stakeholders alike.",
    author: "Michael Chen",
    role: "Founder, TechFlow",
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    content: "The team at Horizon exceeded our expectations in every way. They didn't just build a website; they created a digital strategy that has helped us grow our business exponentially over the past year.",
    author: "Emma Rodriguez",
    role: "Marketing Director, Bloom Retail",
    avatar: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
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
  
  useEffect(() => {
    // Auto advance testimonials
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="testimonials" 
      className="py-20 md:py-32 bg-muted/30"
      ref={sectionRef}
    >
      <div className="container opacity-0 transition-opacity duration-1000">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it — hear from the clients we've helped succeed.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="absolute -top-10 left-0 text-primary opacity-20">
            <Quote className="h-20 w-20" />
          </div>
          
          <div className="relative overflow-hidden py-10">
            <div 
              className="transition-all duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="text-center">
                      <p className="text-lg md:text-xl mb-8 italic">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex flex-col items-center">
                        <div className="relative h-16 w-16 mb-4 rounded-full overflow-hidden border-2 border-primary">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button 
              size="icon" 
              variant="outline" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    index === activeIndex 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              size="icon" 
              variant="outline" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}