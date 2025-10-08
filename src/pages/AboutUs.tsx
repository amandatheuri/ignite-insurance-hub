import { Link } from "react-router-dom";
import { Shield, Users, Target, Award, CheckCircle, Briefcase , Handshake} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroHandshake from "@/assets/hero-handshake.jpg";
import heroFamily from "@/assets/hero-family.jpg";
import heroOffice from "@/assets/hero-office.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
<section className="relative py-20 md:py-24 overflow-hidden">
  <img
    src={heroOffice}
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
    <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
      About <span className="text-primary">Theory Insurance</span>
    </h1>
    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
      Since 1997, we’ve been protecting what matters most — your family, your business, and your peace of mind.
    </p>
  </div>
</section>


      {/* Our Story */}
      <section id="our-story" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
               Your trusted insurance intermediary in handling Motor, health, life & 
corporate insurances with offices in both Nairobi and Nakuru. 
Since 1997, Theory Insurance Agency has been helping individuals, 
families, and businesses across Kenya protect what matters most. With 
almost three decades of experience, we have built our reputation on 
trust, personalized service, and reliable insurance solutions.</p>
              <p className="text-muted-foreground mb-4">
                Over two decades later, we remain committed to that mission. From protecting families to supporting businesses,
                we’ve built a reputation based on integrity, compassion, and results.
              </p>
              <p className="text-muted-foreground">
                Partnered with Kenya’s most reliable insurers, we offer tailor-made solutions backed by exceptional customer care.
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
                    <h3 className="font-semibold text-lg mb-2">Proven Reliability</h3>
                    <p className="text-muted-foreground text-sm">
                      Nearly 30 years of experience means we have both the expertise and technical know how in handling all insurance matters smoothly and efficiently. 
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover-scale">
                  <div className="bg-primary rounded-full p-3">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
                    <p className="text-muted-foreground text-sm">
                      Benefit from over 40 years of combined industry knowledge, ensuring you get the most strategic and cost-effective coverage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover-scale">
                  <div className="bg-primary rounded-full p-3">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Client-First Approach</h3>
                    <p className="text-muted-foreground text-sm">
                     Your security and success are our top priorities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover-scale">
                  <div className="bg-primary rounded-full p-3">
                    <Handshake className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Integrity & Trust</h3>
                    <p className="text-muted-foreground text-sm">
                      A legacy built through referrals and long-term relationships.
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
                 To deliver insurance solutions that are as reliable as they are easy to understand. We build lasting trust by proactively managing your cover, communicating with clarity, and standing firmly in your corner — every step of the way.
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
                  To build a legacy of trust, one protected dream at a time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Meet our professionals</h2>
          <p className="text-muted-foreground mb-12">
            The dedicated professionals behind Theory Insurance — serving you with excellence since 1990.
          </p>

<div className="flex flex-wrap justify-center gap-10">
            {/* Director */}
            <div className="animate-scale-in hover-scale">
              <div className="bg-primary/10 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Antony Theuri</h3>
              <p className="text-primary font-medium mb-2">Director</p>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
Our director carries a wealth of both technical and professional expertise having 
worked in the insurance industry since 1980.
</p>
            </div>

            {/* Manager */}
            <div className="animate-scale-in hover-scale">
              <div className="bg-primary/10 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Perpetua Theuri</h3>
              <p className="text-primary font-medium mb-2">Manager</p>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                With over nine years of experience, Perpetua drives innovation, 
modernization, and growth to ensure clients receive seamless, forward
looking insurance solutions.
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
