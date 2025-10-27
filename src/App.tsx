import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PersonalInsurance from "./pages/PersonalInsurance";
import BusinessInsurance from "./pages/BusinessInsurance";
import EmployeeInsurance from "./pages/EmployeeInsurance";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/faq";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/scrolltotop";
import usePageTracking from "./hooks/usePageTracking";
import { HelmetProvider } from "react-helmet-async";


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <HelmetProvider>
          <Toaster />
          <Sonner />
          <WhatsAppButton />

          <BrowserRouter>
            <ScrollToTop />
            <PageTracking />

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/personal-insurance" element={<PersonalInsurance />} />
              <Route path="/business-insurance" element={<BusinessInsurance />} />
              <Route path="/employee-insurance" element={<EmployeeInsurance />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/loggedin" element={<Auth />} />
              <Route path="/writeblog" element={<Admin />} />
              <Route path="/faqs" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};


function PageTracking() {
  usePageTracking();
  return null;
}

export default App;
