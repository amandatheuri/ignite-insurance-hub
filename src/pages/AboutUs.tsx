import { Link } from "react-router-dom";
import { Shield, Users, Target, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroHandshake from "@/assets/hero-handshake.jpg";
import heroFamily from "@/assets/hero-family.jpg";
import heroOffice from "@/assets/hero-office.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Theory Insurance</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in comprehensive insurance solutions across Kenya
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Theory Insurance was founded with a simple yet powerful mission: to make quality insurance 
                accessible and understandable for everyone in Kenya. We recognized that insurance doesn't 
                have to be complicated or intimidating.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the years, we've grown from a small local agency to a trusted insurance partner 
                serving thousands of individuals, families, and businesses across Kenya. Our success 
                is built on strong relationships, personalized service, and a genuine commitment to 
                protecting what matters most to our clients.
              </p>
              <p className="text-muted-foreground">
                Today, we work with Kenya's leading insurance providers to offer comprehensive coverage 
                solutions that combine competitive pricing with exceptional service.
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src={heroHandshake} 
                alt="Professional handshake representing trust and partnership" 
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-scale-in">
              <img 
                src={heroFamily} 
                alt="Happy family representing protection and security" 
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 hover-scale">
                  <div className="bg-primary rounded-full p-3">
                    <Shield className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Trusted Protection</h3>
                    <p className="text-muted-foreground text-sm">
                      Partnered with Kenya's most reliable insurance providers
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover-scale">
                  <div className="bg-primary rounded-full p-3">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Client-Focused</h3>
                    <p className="text-muted-foreground text-sm">
                      Personalized service tailored to your unique needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover-scale">
                  <div className="bg-primary rounded-full p-3">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Industry Expertise</h3>
                    <p className="text-muted-foreground text-sm">
                      Years of experience in the Kenyan insurance market
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide accessible, reliable, and comprehensive insurance solutions that protect 
                  what matters most to our clients, while delivering exceptional service and peace of 
                  mind through every interaction.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be Kenya's most trusted insurance partner, known for our commitment to client 
                  satisfaction, innovative solutions, and unwavering dedication to protecting the 
                  prosperity and well-being of every individual and business we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-scale-in">
            <img 
              src={heroOffice} 
              alt="Professional office environment showing our commitment to excellence" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in hover-scale">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform hover:rotate-12">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with honesty and transparency, building trust through every interaction
              </p>
            </div>
            <div className="text-center animate-fade-in hover-scale">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform hover:rotate-12">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client First</h3>
              <p className="text-muted-foreground">
                Your needs and satisfaction are at the heart of everything we do
              </p>
            </div>
            <div className="text-center animate-fade-in hover-scale">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform hover:rotate-12">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in service, coverage, and client care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Theory Insurance Difference?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you find the perfect insurance solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="mailto:info@theoryinsurance.co.ke">Get a Quote</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href="/#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
