import { Shield, Home, Car, Plane, Heart, GraduationCap, Stethoscope, Users, Briefcase, MapPin, FileText, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

const PersonalInsurance = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const insuranceProducts = [
    {
      title: "Home Insurance",
      description: "Protect your home and personal belongings from unexpected events",
      icon: Home,
      coverage: ["Property damage", "Personal belongings", "Liability protection", "Additional living expenses"]
    },
    {
      title: "Car Insurance",
      description: "Comprehensive auto coverage for your vehicle and peace of mind on the road",
      icon: Car,
      coverage: ["Collision coverage", "Comprehensive coverage", "Liability protection", "Uninsured motorist protection"]
    },
    {
      title: "Apartment Insurance",
      description: "Tenant insurance to protect your personal property and liability",
      icon: MapPin,
      coverage: ["Personal property protection", "Liability coverage", "Additional living expenses", "Medical payments"]
    },
    {
      title: "Motorcycle Insurance",
      description: "Specialized coverage for motorcycle enthusiasts",
      icon: Briefcase,
      coverage: ["Bodily injury liability", "Property damage liability", "Collision and comprehensive", "Uninsured motorist coverage"]
    },
    {
      title: "Valuable Possessions Insurance",
      description: "Special coverage for high-value items like jewelry, art, and collectibles",
      icon: Shield,
      coverage: ["Jewelry and watches", "Fine art and antiques", "Electronics and equipment", "Collectibles and memorabilia"]
    },
    {
      title: "Personal Liability Insurance",
      description: "Additional liability protection beyond your home and auto policies",
      icon: Users,
      coverage: ["Personal injury protection", "Property damage liability", "Legal defense costs", "Worldwide coverage"]
    },
    {
      title: "Funeral Expenses Insurance",
      description: "Help your family with final expenses and funeral costs",
      icon: Heart,
      coverage: ["Funeral and burial costs", "Memorial services", "Outstanding debts", "Final expense coverage"]
    },
    {
      title: "Travel Insurance",
      description: "Protection for domestic and international travel",
      icon: Plane,
      coverage: ["Trip cancellation", "Medical emergencies abroad", "Lost luggage protection", "Travel delay coverage"]
    },
    {
      title: "Personal Accident Insurance",
      description: "Financial protection against accidental injuries and disabilities",
      icon: Shield,
      coverage: ["Accidental death benefit", "Disability benefits", "Medical expense coverage", "Rehabilitation support"]
    },
    {
      title: "Renters Life Insurance",
      description: "Life insurance specifically designed for renters and young professionals",
      icon: Home,
      coverage: ["Term life coverage", "Accidental death benefit", "Affordable premiums", "Flexible coverage amounts"]
    },
    {
      title: "Student Insurance",
      description: "Specialized coverage for students and their unique needs",
      icon: GraduationCap,
      coverage: ["Personal property protection", "Liability coverage", "Study abroad coverage", "Electronics protection"]
    },
    {
      title: "Medical Insurance",
      description: "Comprehensive health coverage for you and your family",
      icon: Stethoscope,
      coverage: ["Hospitalization coverage", "Outpatient care", "Prescription drugs", "Preventive care services"]
    }
  ];

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return insuranceProducts;
    
    return insuranceProducts.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.coverage.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">Personal Insurance</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Protect what matters most to you with our comprehensive personal insurance solutions. 
              From your home and car to your health and valuable possessions, we offer tailored coverage 
              to safeguard your lifestyle and provide peace of mind for you and your loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-muted/20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search personal insurance products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>
      </section>

      {/* Insurance Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No insurance products found matching "{searchTerm}"</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Coverage includes:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {product.coverage.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <a href="mailto:info@theoryinsurance.co.ke">Get Quote</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Coverage?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our insurance experts are here to help you find the perfect personal insurance solution for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="mailto:info@theoryinsurance.co.ke">Speak with an Agent</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href="mailto:info@theoryinsurance.co.ke">Get Free Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalInsurance;