import {
  Upload,
  Bed,
  Brain,
  MessageSquare,
  Smartphone,
} from "lucide-react";

const features = [
  {
    title: "Accident Image Upload",
    description: "Captures critical data to inform hospital response teams in real time.",
    icon: Upload,
  },
  {
    title: "Live Bed Availability",
    description: "Access real-time data on hospital capacity near the incident location.",
    icon: Bed,
  },
  {
    title: "AI-Powered Hospital Matching",
    description: "Automatically suggests the most suitable hospital based on severity and availability.",
    icon: Brain,
  },
  {
    title: "Seamless Communication",
    description: "Hospitals receive immediate updates with patient data and estimated arrival time.",
    icon: MessageSquare,
  },
  {
    title: "User-Friendly Interface",
    description: "Designed for both public users and emergency responders.",
    icon: Smartphone,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features That <span className="text-primary">Save Lives</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our comprehensive platform is designed to minimize response time and maximize efficiency 
            during critical emergencies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}