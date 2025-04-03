
import { CheckCircle, FileText, Settings, Users } from "lucide-react";

const steps = [
  {
    id: 1,
    name: "Submit Challenge",
    description:
      "Small businesses share their tech challenges through our simple submission form.",
    icon: FileText,
  },
  {
    id: 2,
    name: "Validation & Selection",
    description:
      "We analyze submissions to identify common problems shared by multiple businesses in the same industry.",
    icon: CheckCircle,
  },
  {
    id: 3,
    name: "Development",
    description:
      "Our team builds a European sovereign solution at a fraction of traditional agency costs.",
    icon: Settings,
  },
  {
    id: 4,
    name: "Scale & Share Revenue",
    description:
      "The solution becomes a product offered to other businesses, with originators sharing in the revenue.",
    icon: Users,
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-studio-cream py-16 md:py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            We transform small business pain points into sustainable solutions through our unique studio model
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.id} className="group relative">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-studio-blue/10 flex items-center justify-center mb-6 group-hover:bg-studio-blue/20 transition-colors">
                    <step.icon className="h-8 w-8 text-studio-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.name}
                  </h3>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="h-0.5 w-full bg-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-studio-cream px-3 text-lg font-medium text-studio-blue">
                        {step.id}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-gray-500 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
