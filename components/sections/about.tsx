export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Rapid Rescue</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're revolutionizing emergency response through technology and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              Rapid Rescue Agency (RRA) is a next-gen hospital allotment system aimed at 
              minimizing delays during emergencies. Our system enables accident victims to 
              instantly share data with hospitals, improving chances of survival and care quality.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Product Development</h4>
                <p className="text-muted-foreground">
                  Developed through a design thinking approach that prioritizes user needs 
                  and emergency scenarios. Our system is continuously refined based on 
                  feedback from medical professionals and emergency responders.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Impact</h4>
                <p className="text-muted-foreground">
                  By streamlining the emergency response process, we're helping save 
                  precious minutes when they matter most. Our platform connects victims, 
                  hospitals, and emergency services in real-time.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Lives Impacted</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Partner Hospitals</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">15min</div>
              <div className="text-sm text-muted-foreground">Average Response</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}