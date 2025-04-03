
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, CircleDollarSign, Code, Globe } from "lucide-react";

const benefits = [
  {
    title: "Affordable Solutions",
    description: "Get custom solutions at a fraction of traditional development costs through our shared investment model.",
    icon: CircleDollarSign,
    color: "bg-green-100 text-green-700",
    label: "Save €€€",
  },
  {
    title: "European Sovereignty",
    description: "All our technology is developed using European tools and infrastructure, ensuring data sovereignty and compliance.",
    icon: Globe,
    color: "bg-blue-100 text-blue-700",
    label: "EU First",
  },
  {
    title: "Recurring Revenue",
    description: "Share in the revenue when your solution is deployed to other businesses with similar challenges.",
    icon: Building,
    color: "bg-purple-100 text-purple-700",
    label: "Profit Share",
  },
  {
    title: "Bespoke Development",
    description: "Custom solutions built specifically for small business needs, not enterprise software scaled down.",
    icon: Code,
    color: "bg-amber-100 text-amber-700",
    label: "Custom Built",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-container">
      <div className="text-center">
        <h2 className="section-title">Small Business Benefits</h2>
        <p className="section-subtitle">
          Our studio model delivers unique advantages designed specifically for European small businesses
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-y-8 gap-x-6 md:grid-cols-2 lg:mt-16">
        {benefits.map((benefit, index) => (
          <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
              <div className={`${benefit.color} rounded-full p-2`}>
                <benefit.icon className="h-6 w-6" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mt-2 text-gray-500">
                {benefit.description}
              </CardDescription>
              <Badge className="mt-4 bg-studio-blue">{benefit.label}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
