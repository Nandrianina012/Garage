import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { Dashboard } from "./components/Dashboard";
import { ProprietairesPage } from "./pages/ProprietairesPage";
import { VehiculesPage } from "./pages/VehiculesPage";
import { OrdresReparationPage } from "./pages/OrdresReparationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/proprietaires" element={<ProprietairesPage />} />
            <Route path="/vehicules" element={<VehiculesPage />} />
            <Route path="/ordres-reparation" element={<OrdresReparationPage />} />
            {/* Placeholder routes for other modules */}
            <Route path="/articles" element={<div className="p-8 text-center text-muted-foreground">Module Articles & Stock - En développement</div>} />
            <Route path="/main-oeuvre" element={<div className="p-8 text-center text-muted-foreground">Module Main-d'œuvre - En développement</div>} />
            <Route path="/visites" element={<div className="p-8 text-center text-muted-foreground">Module Visites/Contrôles - En développement</div>} />
            <Route path="/devis" element={<div className="p-8 text-center text-muted-foreground">Module Devis - En développement</div>} />
            <Route path="/factures" element={<div className="p-8 text-center text-muted-foreground">Module Factures & Paiements - En développement</div>} />
            <Route path="/utilisateurs" element={<div className="p-8 text-center text-muted-foreground">Module Utilisateurs - En développement</div>} />
            <Route path="/parametres" element={<div className="p-8 text-center text-muted-foreground">Module Paramètres - En développement</div>} />
            <Route path="/audit" element={<div className="p-8 text-center text-muted-foreground">Module Journal d'audit - En développement</div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
