import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";

const queryClient = new QueryClient();


import { EmailModalProvider } from "@/contexts/EmailModalContext";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <EmailModalProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Index />
        </TooltipProvider>
      </EmailModalProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
