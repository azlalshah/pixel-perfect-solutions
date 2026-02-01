import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import WebDevelopment from "./pages/services/WebDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import MobileDevelopment from "./pages/services/MobileDevelopment";
import CloudDevOps from "./pages/services/CloudDevOps";
import VideoAnimation from "./pages/services/VideoAnimation";
import LogoDesign from "./pages/services/LogoDesign";
import Branding from "./pages/services/Branding";
import BackendDevelopment from "./pages/services/BackendDevelopment";
import WordPress from "./pages/services/WordPress";
import Shopify from "./pages/services/Shopify";
import Wix from "./pages/services/Wix";
import Webflow from "./pages/services/Webflow";
import Squarespace from "./pages/services/Squarespace";
import PremadeTemplates from "./pages/services/PremadeTemplates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/mobile-development" element={<MobileDevelopment />} />
          <Route path="/services/cloud-devops" element={<CloudDevOps />} />
          <Route path="/services/video-animation" element={<VideoAnimation />} />
          <Route path="/services/logo-design" element={<LogoDesign />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/backend-development" element={<BackendDevelopment />} />
          <Route path="/services/wordpress" element={<WordPress />} />
          <Route path="/services/shopify" element={<Shopify />} />
          <Route path="/services/wix" element={<Wix />} />
          <Route path="/services/webflow" element={<Webflow />} />
          <Route path="/services/squarespace" element={<Squarespace />} />
          <Route path="/services/premade-templates" element={<PremadeTemplates />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
