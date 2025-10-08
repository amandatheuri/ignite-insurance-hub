import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingButtons = () => {
  const phoneNumber = "254728813594";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const telUrl = `tel:0${phoneNumber.slice(-9)}`; // formats to tel:0728813594

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 animate-fade-in"
      >
        <Button
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all hover:scale-110 bg-[#25D366] hover:bg-[#20BA5A] text-white"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </a>

      {/* Floating Call Button */}
      <a href={telUrl} className="fixed bottom-24 right-6 z-50 animate-fade-in">
        <Button
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all hover:scale-110 text-white bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          aria-label="Call us directly"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </a>
    </>
  );
};

export default FloatingButtons;
