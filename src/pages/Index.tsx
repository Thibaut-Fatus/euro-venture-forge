
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Header / Navigation */}
      <header className="w-full p-4 bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">EuroVentureForge</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center p-8">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">Explore European Business Opportunities</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with partners across Europe and discover new ventures for your business growth.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose EuroVentureForge</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Pan-European Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access business opportunities across all European countries through our extensive network.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Funding Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Navigate EU grants, venture capital, and other funding sources with expert guidance.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Stay compliant with local laws and EU regulations with our comprehensive support.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-bold mb-4">EuroVentureForge</h4>
              <p className="text-gray-300">Expanding business horizons across Europe</p>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">Quick Links</h5>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} EuroVentureForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
