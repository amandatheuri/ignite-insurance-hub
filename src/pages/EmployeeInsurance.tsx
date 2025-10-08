import { Users, Stethoscope, Heart, Shield, Building2, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import employees from "@/assets/employees.jpg";

const EmployeeInsurance = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const insuranceProducts = [
    {
      title: "Medical Insurance",
      description: "Comprehensive health coverage for your employees and their families",
      icon: Stethoscope,
      coverage: ["Inpatient and outpatient care", "Prescription drug coverage", "Preventive care services", "Specialist consultations", "Emergency medical treatment", "Maternity and newborn care"]
    },
    {
      title: "Work Injury Coverage",
      description: "Workers' compensation for on-the-job injuries and occupational illnesses",
      icon: Shield,
      coverage: ["Medical treatment costs", "Lost wage replacement", "Disability benefits", "Rehabilitation services", "Return-to-work programs", "Occupational illness coverage"]
    },
    {
      title: "Group Life Insurance",
      description: "Life insurance coverage for your employees at group rates",
      icon: Heart,
      coverage: ["Death benefit protection", "Accidental death coverage", "Terminal illness benefit", "Conversion options", "Portability features", "Supplemental coverage options"]
    },
    {
      title: "Group Personal Accident",
      description: "Additional accident protection for employees on and off the job",
      icon: Users,
      coverage: ["Accidental death benefit", "Permanent disability coverage", "Temporary disability benefits", "Medical expense reimbursement", "Rehabilitation support", "Family support benefits"]
    }
  ];

  const benefits = [
    {
      title: "Attract Top Talent",
      description: "Competitive employee benefits packages help you recruit and retain the best employees in your industry."
    },
    {
      title: "Tax Advantages",
      description: "Many employee insurance premiums are tax-deductible for employers and tax-free for employees."
    },
    {
      title: "Group Buying Power",
      description: "Group insurance plans offer better rates and coverage than individual policies."
    },
    {
      title: "Employee Wellness",
      description: "Comprehensive coverage promotes employee health and reduces absenteeism."
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
    src={employees}
    alt="Professional insurance consultation"
    className="absolute inset-0 w-full h-full object-cover opacity-90"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
  
  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <Link
      to="/"
      className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
    >
      ← Back to Home
    </Link>
    <h1 className="text-4xl font-bold text-foreground mb-4">Employee Insurance</h1>
    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
  Build a comprehensive employee benefits package that attracts top talent and shows your team you care. 
              Our group insurance solutions provide essential coverage for your employees while offering significant 
              cost savings and tax advantages for your business.    </p>
  </div>
</section>

      {/* Search Bar */}
      <section className="py-8 bg-muted/20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search employee insurance products..."
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
              <p className="text-lg text-muted-foreground">No employee insurance products found matching "{searchTerm}"</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 mb-16">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <product.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{product.description}</CardDescription>
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
                  <Button className="w-full mt-6" variant="outline" asChild>
                    <a href="mailto:info@theoryinsurance.co.ke">Get Group Quote</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
            </div>
          )}

          {/* Benefits Section */}
          <div className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Why Offer Employee Insurance?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                    <Building2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Employee Benefits Package?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our employee benefits specialists will work with you to design a comprehensive package 
            that fits your budget and meets your employees' needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="mailto:info@theoryinsurance.co.ke">Schedule Benefits Consultation</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href="mailto:info@theoryinsurance.co.ke">Get Group Rates</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeInsurance;