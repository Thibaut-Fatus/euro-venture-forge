
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const SubmissionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    industry: "",
    challengeDescription: "",
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, industry: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Project Submitted!",
        description: "We'll review your challenge and get back to you within 3 business days.",
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
    <section id="submit" className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Submit Your Challenge</h2>
          <p className="section-subtitle">
            Share your business pain point with us. If selected, we'll develop a solution at minimal cost 
            and split the revenue when it's marketed to others.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto mt-10 border shadow-lg">
          <CardHeader>
            <CardTitle>Challenge Submission Form</CardTitle>
            <CardDescription>
              Tell us about your business and the problem you'd like solved.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    placeholder="Your Company Ltd."
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Name</Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    placeholder="John Doe"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={formData.industry} onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="professional-services">Professional Services</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <Label htmlFor="challengeDescription">Describe your challenge</Label>
                <Textarea
                  id="challengeDescription"
                  name="challengeDescription"
                  placeholder="Tell us about the problem you're facing and how it impacts your business..."
                  rows={5}
                  value={formData.challengeDescription}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button type="submit" className="mt-6 w-full bg-studio-blue hover:bg-studio-teal" disabled={loading}>
                {loading ? "Submitting..." : "Submit Challenge"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 text-sm text-gray-500">
            <p>
              By submitting, you agree to our Terms of Service and Privacy Policy.
            </p>
            <p>
              Your information is kept confidential and only used to evaluate your project.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default SubmissionForm;
