
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll respond within 24 hours.",
      });
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-studio-navy text-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                {t('contactHeroTitle')}
              </h1>
              <p className="mt-4 text-xl text-studio-teal max-w-3xl mx-auto">
                {t('contactHeroSubtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-studio-navy mb-6">
                  {t('contactUs')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contactFormName')}</Label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contactFormEmail')}</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('contactFormSubject')}</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contactFormMessage')}</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      rows={6} 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-studio-blue hover:bg-studio-teal"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : t('contactFormSubmit')}
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-studio-navy mb-6">
                  {t('contactOfficeTitle')}
                </h2>
                
                <Card className="p-6 mb-6 shadow-md">
                  <div className="flex space-x-4">
                    <div className="bg-studio-blue/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-studio-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Address</h3>
                      <p className="text-gray-600 mt-2">{t('contactOfficeAddress')}</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 mb-6 shadow-md">
                  <div className="flex space-x-4">
                    <div className="bg-studio-blue/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-studio-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Office Hours</h3>
                      <p className="text-gray-600 mt-2">{t('contactOfficeHours')}</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 mb-6 shadow-md">
                  <div className="flex space-x-4">
                    <div className="bg-studio-blue/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-studio-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{t('contactEmailUs')}</h3>
                      <a href="mailto:info@euroventureforge.eu" className="text-studio-blue hover:underline mt-2 block">
                        info@euroventureforge.eu
                      </a>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 mb-6 shadow-md">
                  <div className="flex space-x-4">
                    <div className="bg-studio-blue/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-studio-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{t('contactCallUs')}</h3>
                      <a href="tel:+3221234567" className="text-studio-blue hover:underline mt-2 block">
                        +32 2 123 45 67
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-[16/9] w-full bg-gray-200 rounded-lg overflow-hidden relative">
              <iframe
                title="Office Location"
                className="absolute inset-0 w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.2016241064505!2d4.3757371!3d50.8384202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c499384e5349%3A0x5695c5c507a3750c!2sRue%20de%20la%20Science%2023%2C%201040%20Bruxelles%2C%20Belgium!5e0!3m2!1sen!2sus!4v1649770123456!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Contact;
