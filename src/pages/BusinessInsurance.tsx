import { Building2, Shield, Car, Home, Users, Ship, Cog, Lock, Gavel, HardHat, Wifi, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import business from "@/assets/business.jpg";


const BusinessInsurance = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const insuranceProducts = [
    {
      title: "General Liability",
      description: "Essential protection against third-party claims and lawsuits",
      icon: Shield,
      coverage: ["Bodily injury claims", "Property damage liability", "Personal and advertising injury", "Legal defense costs"]
    },
    {
      title: "Business Auto",
      description: "Commercial vehicle coverage for your business fleet",
      icon: Car,
      coverage: ["Vehicle damage coverage", "Liability protection", "Uninsured motorist coverage", "Cargo protection"]
    },
    {
      title: "Commercial Property",
      description: "Protect your business premises and equipment",
      icon: Home,
      coverage: ["Building and structure coverage", "Business equipment protection", "Inventory coverage", "Business interruption"]
    },
    {
      title: "Work Injury Coverage",
      description: "Workers' compensation for employee injuries and illnesses",
      icon: Users,
      coverage: ["Medical expenses", "Lost wage replacement", "Disability benefits", "Rehabilitation costs"]
    },
    {
      title: "Ocean Marine",
      description: "Coverage for goods and vessels during ocean transport",
      icon: Ship,
      coverage: ["Cargo protection", "Hull insurance", "Freight coverage", "General average protection"]
    },
    {
      title: "Inland Marine",
      description: "Protection for goods in transit and mobile equipment",
      icon: Ship,
      coverage: ["Equipment in transit", "Mobile equipment coverage", "Contractor's equipment", "Installation floater"]
    },
    {
      title: "Machinery Breakdown",
      description: "Coverage for mechanical and electrical equipment failures",
      icon: Cog,
      coverage: ["Equipment repair costs", "Business interruption", "Expediting expenses", "Spoilage coverage"]
    },
    {
      title: "Fidelity Guarantee",
      description: "Protection against employee theft and dishonest acts",
      icon: Lock,
      coverage: ["Employee dishonesty", "Forgery protection", "Computer fraud", "Money and securities coverage"]
    },
    {
      title: "Employers Liability",
      description: "Additional protection beyond workers' compensation",
      icon: Gavel,
      coverage: ["Third-party over claims", "Dual capacity suits", "Consequential bodily injury", "Care and custody coverage"]
    },
    {
      title: "Construction All Risk",
      description: "Comprehensive coverage for construction projects",
      icon: HardHat,
      coverage: ["Material damage", "Third-party liability", "Delay in start-up", "Professional indemnity"]
    },
    {
      title: "Cyber Liability",
      description: "Protection against cyber attacks and data breaches",
      icon: Wifi,
      coverage: ["Data breach response", "Cyber extortion", "Business interruption", "Regulatory fines and penalties"]
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
 <section className="relative py-20 md:py-24 overflow-hidden">
  <img
    src={business}
    alt="Professional insurance consultation"
    className="absolute inset-0 w-full h-full object-cover opacity-90"
  />
<div className="absolute inset-0 bg-black/55" />
  
  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <Link
      to="/"
      className="inline-flex items-center text-white/80 hover:text-secondary/80 mb-6 transition-colors"
    >
      ← Back to Home
    </Link>
    <h1 className="text-4xl font-bold text-white mb-4">Business Insurance</h1>
    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
   Safeguard your business operations with our comprehensive commercial insurance solutions. 
    </p>
  </div>
</section>
      {/* Search Bar */}
      <section className="py-8 bg-muted/20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search business insurance products..."
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
              <p className="text-lg text-muted-foreground">No business insurance products found matching "{searchTerm}"</p>
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
          <h2 className="text-3xl font-bold mb-4">Protect Your Business Investment</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every business is unique. Let our commercial insurance specialists create a customized protection plan 
            that fits your industry, size, and specific risk profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="mailto:info@theoryinsurance.co.ke">Consult Business Expert</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href="mailto:info@theoryinsurance.co.ke">Request Business Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessInsurance;