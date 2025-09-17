"use client"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useRef, useState } from "react";
import heroFamily from "@/assets/hero-family.jpg";
import heroHandshake from "@/assets/hero-handshake.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import theoryLogo from "@/assets/logobackground.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Building2, Car, CheckCircle, Heart, Home, Mail, MapPin, Menu, Phone, Search, Shield, Star, X } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";




const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header>
        {/* 🔹 Top Gradient Bar */}
        <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
            {/* Left - Phone */}
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+254 728 813 594</span>
            </div>

            {/* Center - Email */}
            <div className="hidden md:flex items-center gap-2">
              <Mail size={16} />
              <span>support@theoryinsurance.com</span>
            </div>

            {/* Right - Links + Social */}
            <div className="flex items-center gap-6">
              <a href="#" className="hover:underline">FAQs</a>
              <a href="#contact" className="hover:underline">Contact</a>
              <div className="flex gap-3">
                <FaFacebookF className="cursor-pointer hover:text-secondary-foreground" />
                <FaTwitter className="cursor-pointer hover:text-secondary-foreground" />
                <FaLinkedinIn className="cursor-pointer hover:text-secondary-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Main White Navbar */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
            {/* Left - Logo */}
            <div className="flex items-center gap-2">
              <img src={theoryLogo} alt="Logo" className="h-20 w-auto" />
            </div>

            {/* Center - Desktop Nav */}
         <nav className="hidden md:flex gap-8 text-foreground font-medium">
              <a href="#our-story" className="hover:text-primary">Our Story</a>
              <a href="#risk" className="hover:text-primary">Risk Consulting</a>
              <a href="#benefits" className="hover:text-primary">Employee Benefits</a>
              <a href="#personal" className="hover:text-primary">Personal</a>
              <a href="#business" className="hover:text-primary">Business</a>
            </nav>
            {/* Right - Location + Search + Mobile Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                <span>Nairobi, Kenya</span>
              </div>
              <button className="hidden md:flex items-center text-muted-foreground hover:text-primary">
                <Search size={20} />
              </button>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* 🔹 Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
            <a href="#our-story" className="block hover:text-primary">Our Story</a>
            <a href="#risk" className="block hover:text-primary">Risk Consulting</a>
            <a href="#benefits" className="block hover:text-primary">Employee Benefits</a>
            <a href="#bonds" className="block hover:text-primary">Personal</a>
            <a href="#planning" className="block hover:text-primary">Business</a>
          </div>
        )}
</header>
<HeroCarousel />

      {/* Auto-Scrolling Services Band */}
      <section className="py-8 bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex items-center space-x-12 text-primary-foreground text-lg font-semibold">
              <span className="flex items-center space-x-2">
                <Car className="h-6 w-6" />
                <span>Auto Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Home className="h-6 w-6" />
                <span>Home Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Heart className="h-6 w-6" />
                <span>Life Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Building2 className="h-6 w-6" />
                <span>Business Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Shield className="h-6 w-6" />
                <span>Health Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Car className="h-6 w-6" />
                <span>Motorcycle Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Home className="h-6 w-6" />
                <span>Renters Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Shield className="h-6 w-6" />
                <span>Travel Insurance</span>
              </span>
              {/* Duplicate for seamless loop */}
              <span className="flex items-center space-x-2">
                <Car className="h-6 w-6" />
                <span>Auto Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Home className="h-6 w-6" />
                <span>Home Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Heart className="h-6 w-6" />
                <span>Life Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Building2 className="h-6 w-6" />
                <span>Business Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Shield className="h-6 w-6" />
                <span>Health Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Car className="h-6 w-6" />
                <span>Motorcycle Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Home className="h-6 w-6" />
                <span>Renters Insurance</span>
              </span>
              <span className="flex items-center space-x-2">
                <Shield className="h-6 w-6" />
                <span>Travel Insurance</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground">Comprehensive coverage solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="relative pt-8 p-6 hover:shadow-lg transition-shadow">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded-full p-3">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-center">Auto Insurance</h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">Complete protection for your vehicle on and off the road</p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Liability Coverage</li>
                  <li>• Collision Protection</li>
                  <li>• Comprehensive Coverage</li>
                  <li>• Uninsured Motorist</li>
                  <li>• Personal Injury Protection</li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="relative pt-8 p-6 hover:shadow-lg transition-shadow">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded-full p-3">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-center">Home Insurance</h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">Comprehensive protection for your home and personal belongings</p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Dwelling Protection</li>
                  <li>• Personal Property</li>
                  <li>• Liability Coverage</li>
                  <li>• Additional Living Expenses</li>
                  <li>• Natural Disaster Coverage</li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="relative pt-8 p-6 hover:shadow-lg transition-shadow">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded-full p-3">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-center">Life Insurance</h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">Financial security and peace of mind for your loved ones</p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Term Life Insurance</li>
                  <li>• Whole Life Insurance</li>
                  <li>• Universal Life</li>
                  <li>• Accidental Death</li>
                  <li>• Critical Illness Cover</li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="relative pt-8 p-6 hover:shadow-lg transition-shadow">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded-full p-3">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-center">Business Insurance</h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">Protect your business operations and safeguard your assets</p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• General Liability</li>
                  <li>• Professional Indemnity</li>
                  <li>• Property Insurance</li>
                  <li>• Workers' Compensation</li>
                  <li>• Cyber Liability</li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Theory Insurance?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                    <p className="text-muted-foreground">Our experienced agents help you find the perfect coverage for your unique needs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
                    <p className="text-muted-foreground">We work with top insurers to get you the best coverage at the most affordable prices</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">Round-the-clock support when you need us most, including claims assistance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Quote</h3>
              <div className="space-y-4">
                <Input placeholder="Full Name" />
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <Input placeholder="Type of Insurance" />
                <Button className="w-full" size="lg">Get My Quote</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                No obligation. Free consultation with our experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Theory Insurance made finding the right coverage so easy. Their team was incredibly helpful and found me great rates!"
                </p>
                <p className="font-semibold">- Sarah Johnson</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Outstanding service! When I had a claim, they handled everything quickly and professionally. Highly recommend!"
                </p>
                <p className="font-semibold">- Michael Chen</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Been with Theory Insurance for 5 years. Their personalized service and competitive rates keep me coming back."
                </p>
                <p className="font-semibold">- Emma Rodriguez</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">Ready to secure your future? Contact us today</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <Phone className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="text-muted-foreground">(555) 123-4567</p>
            </div>

            <div className="space-y-4">
              <Mail className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-muted-foreground">info@theoryinsurance.com</p>
            </div>

            <div className="space-y-4">
              <MapPin className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Visit Us</h3>
              <p className="text-muted-foreground">123 Main Street<br />City, State 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={theoryLogo} alt="Theory Insurance Agency" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="opacity-90">Think ahead, insure wisely with Theory Insurance Agency.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 opacity-90">
                <li>Auto Insurance</li>
                <li>Home Insurance</li>
                <li>Life Insurance</li>
                <li>Business Insurance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 opacity-90">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 opacity-90">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="opacity-90">&copy; 2024 Theory Insurance Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const slides = [
  {
    image: heroOffice,
    title: "Think Ahead, Insure Wisely",
    subtitle:
      "Protecting what matters most with comprehensive insurance solutions tailored for you",
  },
  {
    image: heroFamily,
    title: "Protect Your Family's Future",
    subtitle:
      "Comprehensive coverage for your home, auto, and everything that matters most",
  },
  {
    image: heroHandshake,
    title: "Expert Insurance Guidance",
    subtitle:
      "Trusted advisors helping you navigate insurance with confidence and clarity",
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  // manually cycle slides since we’re fading
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[550px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-hero/90 to-secondary/80"></div>
          <div className="relative h-full flex items-center justify-center text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6"
                >
                  Our Covers
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  Get A Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Index;
