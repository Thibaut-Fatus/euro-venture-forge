import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { getFeatures, getReasons } from "@/translations/sovereignty";
import { Check, Shield } from "lucide-react";

const SovereigntySection = () => {
  const { currentLanguage, t } = useLanguage();
  const features = getFeatures({ languageCode: currentLanguage.code });
  const sovereigntyMattersReasons = getReasons({
    languageCode: currentLanguage.code,
  });
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-studio-navy mb-4">
            {t("sovereigntyTitle")}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t("sovereigntySubtitle")}
          </p>

          <Card className="border-l-4 border-l-studio-teal">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <Shield className="h-5 w-5 mr-2 text-studio-teal" /> Our
                {t("sovereigntyPledgeTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600">
                {t("sovereigntyPledge")}
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

            <h3 className="text-2xl font-semibold mb-4 text-studio-navy">
              {t("sovereigntyMatters")}
            </h3>

            <p className="text-gray-600 mb-4">
              {t("sovereigntyMattersContent")}
            </p>
            <ul className="space-y-2 text-gray-600">
              {sovereigntyMattersReasons.map((reason) => (
                <li key={reason} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-studio-teal/10 text-studio-teal mr-2">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SovereigntySection;
