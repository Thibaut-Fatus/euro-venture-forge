
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Marie Dubois",
    role: "Founder & CEO",
    bio: "Former tech lead at a major European startup accelerator with 15+ years experience in product development.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Stefan Weber",
    role: "CTO",
    bio: "Full-stack developer with a passion for European tech sovereignty and open source software.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Elena Rossi",
    role: "Business Development",
    bio: "10+ years working with SMEs across Europe on digital transformation and business strategy.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Jan Kowalski",
    role: "Lead Developer",
    bio: "Expert in building scalable applications with focus on security and compliance.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
];

const TeamSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="text-center">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">
          Meet the dedicated professionals building the future of European small business technology
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <Card key={index} className="overflow-hidden border-none shadow hover:shadow-md transition-all duration-300">
            <div className="aspect-square overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle>{member.name}</CardTitle>
              <CardDescription className="text-studio-teal font-medium">
                {member.role}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </CardContent>
            <CardFooter className="flex justify-start space-x-4 pt-0">
              {member.social.linkedin && (
                <a href={member.social.linkedin} className="text-gray-400 hover:text-studio-blue">
                  <Linkedin size={18} />
                </a>
              )}
              {member.social.twitter && (
                <a href={member.social.twitter} className="text-gray-400 hover:text-studio-blue">
                  <Twitter size={18} />
                </a>
              )}
              {member.social.github && (
                <a href={member.social.github} className="text-gray-400 hover:text-studio-blue">
                  <Github size={18} />
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-studio-cream rounded-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-studio-navy mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              We believe European small businesses deserve access to affordable, custom technology
              solutions that protect their data sovereignty and help them grow.
            </p>
            <p className="text-gray-600">
              By pooling resources and sharing the benefits, we're creating a more sustainable
              approach to small business technology development across Europe.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-studio-blue/10 flex items-center justify-center flex-shrink-0">
                <span className="text-studio-blue font-bold">01</span>
              </div>
              <div>
                <h4 className="font-semibold text-studio-navy">European Sovereignty</h4>
                <p className="text-sm text-gray-600 mt-1">Putting European technology and data control first</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-studio-blue/10 flex items-center justify-center flex-shrink-0">
                <span className="text-studio-blue font-bold">02</span>
              </div>
              <div>
                <h4 className="font-semibold text-studio-navy">Shared Prosperity</h4>
                <p className="text-sm text-gray-600 mt-1">Distributing benefits across the small business ecosystem</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-studio-blue/10 flex items-center justify-center flex-shrink-0">
                <span className="text-studio-blue font-bold">03</span>
              </div>
              <div>
                <h4 className="font-semibold text-studio-navy">Sustainability</h4>
                <p className="text-sm text-gray-600 mt-1">Building long-term solutions rather than one-off projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
