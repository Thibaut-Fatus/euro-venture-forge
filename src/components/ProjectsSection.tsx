
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Appointment Scheduler",
      description: "An intelligent scheduling system for service-based businesses that reduces no-shows by 35%",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Service Industry",
      status: "Live",
      partners: 16,
    },
    {
      title: "Supply Chain Tracker",
      description: "Track inventory and shipments in real-time with this European-hosted logistics platform",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Retail & Distribution",
      status: "Beta",
      partners: 8,
    },
    {
      title: "Client Portal",
      description: "Secure client management system with document sharing and payment processing",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Professional Services",
      status: "Development",
      partners: 12,
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">{t('featuredProjects')}</h2>
          <p className="section-subtitle">
            {t('featuredProjectsSubtitle')}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="bg-studio-cream text-studio-navy">
                    {project.category}
                  </Badge>
                  <Badge className={
                    project.status === "Live" ? "bg-green-500" : 
                    project.status === "Beta" ? "bg-amber-500" : 
                    "bg-blue-500"
                  }>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-2">{project.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-studio-blue">{project.partners}</span> small businesses partnered
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">{t('learnMoreBtn')}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-studio-blue hover:bg-studio-teal">
            {t('viewAllProjects')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
