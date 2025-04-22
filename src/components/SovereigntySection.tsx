
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield } from "lucide-react";

const features = [
  "European data centers and infrastructure",
  "GDPR-compliant by design",
  "Open source technologies prioritized",
  "Local technical support and development",
  "No dependency on non-European tech giants",
  "Data security and sovereignty guaranteed",
];

const SovereigntySection = () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-studio-navy mb-4">European Digital Sovereignty</h2>
          <p className="text-lg text-gray-600 mb-8">
            At Techify, we believe in building a resilient European digital ecosystem
            that reduces dependencies on foreign technologies while fostering innovation.
          </p>

          <Card className="border-l-4 border-l-studio-teal">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <Shield className="h-5 w-5 mr-2 text-studio-teal" /> Our Sovereignty Pledge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600">
                We commit to developing all solutions using European cloud infrastructure, tools, and
                technologies whenever possible, ensuring your data and business remains under European
                jurisdiction and control.
              </CardDescription>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-studio-teal" />
                </div>
                <p className="ml-3 text-gray-600">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="h-[400px] w-[400px] rounded-full bg-studio-blue/10 blur-3xl"></div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100 relative z-10">
            <div className="aspect-video bg-gradient-to-br from-studio-navy via-studio-blue to-studio-teal rounded-lg flex items-center justify-center mb-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1920px-Flag_of_Europe.svg.png"
                alt="European Flag"
                className="w-24 h-auto opacity-90"
              />
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-studio-navy">Why European Sovereignty Matters</h3>

            <p className="text-gray-600 mb-4">
              In today's digital economy, controlling your business data and technology stack
              is more important than ever. European sovereignty ensures:
            </p>

            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-studio-teal/10 text-studio-teal mr-2">
                  <Check className="h-3 w-3" />
                </span>
                <span>Compliance with EU regulations</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-studio-teal/10 text-studio-teal mr-2">
                  <Check className="h-3 w-3" />
                </span>
                <span>Protection from foreign legislation</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-studio-teal/10 text-studio-teal mr-2">
                  <Check className="h-3 w-3" />
                </span>
                <span>Long-term resilience for your business</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-studio-teal/10 text-studio-teal mr-2">
                  <Check className="h-3 w-3" />
                </span>
                <span>Support for the European tech ecosystem</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SovereigntySection;
