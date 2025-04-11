
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const FooterSection = () => {
  const { toast } = useToast();
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    toast({
      title: "Subscribed!",
      description: `You've been added to our newsletter with ${email}`,
    });
    
    form.reset();
  };

  return (
    <footer id="contact" className="bg-studio-navy text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">EuroVentureForge</h3>
            <p className="text-gray-300 mb-6">
              Transforming small business challenges into shared opportunities across Europe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.029 10.029 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.88 4.88 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.946 4.946 0 01-2.228-.616v.061a4.928 4.928 0 003.946 4.83 4.965 4.965 0 01-2.21.085 4.937 4.937 0 004.6 3.42 9.834 9.834 0 01-6.103 2.107c-.394 0-.787-.024-1.175-.07a13.995 13.995 0 007.557 2.21c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.013-.63A9.935 9.935 0 0024 4.59l-.047-.02z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white">How It Works</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white">Benefits</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#submit" className="text-gray-300 hover:text-white">Submit Project</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-studio-teal mr-3 mt-1" />
                <span className="text-gray-300">
                  Rue de la Science 23<br />
                  1040 Brussels, Belgium
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-studio-teal mr-3" />
                <span className="text-gray-300">+32 2 123 45 67</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-studio-teal mr-3" />
                <span className="text-gray-300">info@euroventureforge.eu</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and opportunities.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <Input
                type="email"
                name="email"
                placeholder="Your email address"
                className="bg-studio-navy/50 border-studio-blue/30 placeholder-gray-400 text-white"
                required
              />
              <Button type="submit" className="bg-studio-teal hover:bg-studio-teal/80 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} EuroVentureForge. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
