
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, CircleDollarSign, Code, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t('affordableSolutions'),
      description: t('affordableSolutionsDesc'),
      icon: CircleDollarSign,
      color: "bg-green-100 text-green-700",
      label: t('save'),
    },
    {
      title: t('bespokeDevelopment'),
      description: t('bespokeDevelopmentDesc'),
      icon: Code,
      color: "bg-amber-100 text-amber-700",
      label: t('customBuilt'),
    },
    {
      title: t('recurringRevenue'),
      description: t('recurringRevenueDesc'),
      icon: Building,
      color: "bg-purple-100 text-purple-700",
      label: t('profitShare'),
    },
    {
      title: t('europeanSovereignty'),
      description: t('europeanSovereigntyDesc'),
      icon: Globe,
      color: "bg-blue-100 text-blue-700",
      label: t('euFirst'),
    },
  ];

  return (
    <section id="benefits" className="section-container">
      <div className="text-center">
        <h2 className="section-title">{t('benefits')}</h2>
        <p className="section-subtitle">
          {t('benefitsSubtitle')}
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
