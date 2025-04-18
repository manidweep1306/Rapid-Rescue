"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "@/lib/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Stellar - SaaS Platform",
    description: "A modern SaaS platform with user management, billing integration, and analytics dashboard.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Web App", "SaaS", "React", "Node.js"]
  },
  {
    id: 2,
    title: "EcoTrack Mobile App",
    description: "Mobile application helping users track and reduce their carbon footprint through daily activities.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Mobile", "React Native", "UI/UX"]
  },
  {
    id: 3,
    title: "Fintech Dashboard",
    description: "Financial analytics dashboard with real-time data visualization and predictive insights.",
    image: "https://images.pexels.com/photos/7876708/pexels-photo-7876708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Web App", "Data Viz", "TypeScript"]
  },
  {
    id: 4,
    title: "Luxe E-commerce",
    description: "High-end e-commerce platform with AR product previews and seamless checkout experience.",
    image: "https://images.pexels.com/photos/5912616/pexels-photo-5912616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["E-commerce", "Next.js", "3D/AR"]
  }
];

export default function Work() {
  const [activeProject, setActiveProject] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section 
      id="work" 
      className="py-20 md:py-32 bg-muted/30"
      ref={sectionRef}
    >
      <div className="container opacity-0 transition-opacity duration-1000">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Featured Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of successful projects that have helped businesses achieve their digital goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className={cn(
                    "cursor-pointer rounded-xl p-6 transition-all duration-300",
                    activeProject === project.id 
                      ? "bg-card shadow-md" 
                      : "hover:bg-card/50"
                  )}
                  onClick={() => setActiveProject(project.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: project.id * 0.1 }}
                >
                  <h3 className={cn(
                    "text-xl font-semibold mb-2 transition-colors",
                    activeProject === project.id ? "text-primary" : ""
                  )}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl shadow-xl aspect-video bg-muted">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-500 ease-in-out",
                    activeProject === project.id 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-full"
                  )}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white text-xl font-semibold mb-2">{project.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-white border-white/50">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}