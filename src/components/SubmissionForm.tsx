import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/context/LanguageContext";

const SubmissionForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    industry: "",
    challengeDescription: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: t("submissionFeedback"),
        description: t("submissionFeedbackMessage"),
      });
      setLoading(false);
      setFormData({
        businessName: "",
        contactName: "",
        email: "",
        industry: "",
        challengeDescription: "",
      });
    }, 1500);
  };

  return (
    <section
      id="submit"
      className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">{t("submissionTitle")}</h2>
          <p className="section-subtitle">{t("submissionSubtitle")}</p>
        </div>

        <Card className="max-w-2xl mx-auto mt-10 border shadow-lg">
          <CardHeader>
            <CardTitle>{t("submissionFormTitle")}</CardTitle>
            <CardDescription>{t("submissionFormSubtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="businessName">
                    {t("submissionFormBusinessName")}
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    placeholder={t("submissionFormBusinessNamePlaceholder")}
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactName">
                    {t("submissionFormBusinessContact")}
                  </Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    placeholder={t("submissionFormBusinessContactPlaceholder")}
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    {t("submissionFormBusinessEmail")}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("submissionFormBusinessEmailPlaceholder")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">
                    {t("submissionFormBusinessIndustry")}
                  </Label>
                  <Input
                    id="industry"
                    name="industry"
                    type="string"
                    placeholder={t("submissionFormBusinessIndustryPlaceholder")}
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <Label htmlFor="challengeDescription">
                  {t("submissionFormBusinessDescription")}
                </Label>
                <Textarea
                  id="challengeDescription"
                  name="challengeDescription"
                  placeholder={t(
                    "submissionFormBusinessDescriptionPlaceholder"
                  )}
                  rows={5}
                  value={formData.challengeDescription}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                className="mt-6 w-full bg-studio-blue hover:bg-studio-teal"
                disabled={loading}
              >
                {loading ? t("submissionSubmitting") : t("submissionButton")}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 text-sm text-gray-500">
            <p className="text-center">{t("submissionPolicy")}</p>
            <p className="text-center">{t("submissionPrivacy")}</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default SubmissionForm;
