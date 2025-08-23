import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ACU from "./pages/ACU";
import Contact from "./pages/Contact";
import Proceso from "./pages/Proceso";
import Grabitec from "./pages/Grabitec";
import PuntosLimpios from "./pages/PuntosLimpios";
import Normatividad from "./pages/Normatividad";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/proceso" element={<Proceso />} />
            <Route path="/acu" element={<ACU />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/grabitec" element={<Grabitec />} />
            <Route path="/puntos-limpios" element={<PuntosLimpios />} />
            <Route path="/normatividad" element={<Normatividad />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
