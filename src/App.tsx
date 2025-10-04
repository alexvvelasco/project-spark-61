import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import PostProject from "./pages/PostProject";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";
import EVChatbotPage from "./pages/EVChatbotPage";
import Chatbot from "./components/Chatbot";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isEVChatbotPage = location.pathname === '/ev-chatbot';

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/post-project" element={<PostProject />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/ev-chatbot" element={<EVChatbotPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isEVChatbotPage && <Chatbot />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
