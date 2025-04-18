import Image from "next/image";

const team = [
  {
    name: "Manidweep",
    role: "Project Lead",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    name: "Sagar",
    role: "Technical Architect",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
  },
  {
    name: "Karthik",
    role: "Frontend Developer",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg"
  },
  {
    name: "Rohith",
    role: "Backend Developer",
    image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg"
  },
  {
    name: "Karthikeya",
    role: "UX Designer",
    image: "https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our dedicated team of professionals working to revolutionize emergency response.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/0 rounded-full" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}