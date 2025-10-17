import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import GutterCleaning from "./pages/services/GutterCleaning";
import GutterGuards from "./pages/services/GutterGuards";
import RoofCleaning from "./pages/services/RoofCleaning";
import MossRemoval from "./pages/services/MossRemoval";
import SoftWash from "./pages/services/SoftWash";
import Anchorage from "./pages/service-areas/Anchorage";
import EagleRiver from "./pages/service-areas/EagleRiver";
import Girdwood from "./pages/service-areas/Girdwood";
import Chugiak from "./pages/service-areas/Chugiak";
import Palmer from "./pages/service-areas/Palmer";
import Wasilla from "./pages/service-areas/Wasilla";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/gutter-cleaning" element={<GutterCleaning />} />
          <Route path="/services/gutter-guards" element={<GutterGuards />} />
          <Route path="/services/roof-cleaning" element={<RoofCleaning />} />
          <Route path="/services/moss-removal" element={<MossRemoval />} />
          <Route path="/services/soft-wash" element={<SoftWash />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-areas/anchorage" element={<Anchorage />} />
          <Route path="/service-areas/eagle-river" element={<EagleRiver />} />
          <Route path="/service-areas/girdwood" element={<Girdwood />} />
          <Route path="/service-areas/chugiak" element={<Chugiak />} />
          <Route path="/service-areas/palmer" element={<Palmer />} />
          <Route path="/service-areas/wasilla" element={<Wasilla />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
