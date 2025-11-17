import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WorkflowSection from "@/components/WorkflowSection";
import ProductsSection from "@/components/ProductsSection";
import CustomersSection from "@/components/CustomersSection";
import ImpactSection from "@/components/ImpactSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden pt-16 md:pt-20 scroll-smooth" role="main" aria-label="Main content">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <StatsSection />
      <div id="problem">
        <ProblemSection />
      </div>
      <div id="solution">
        <SolutionSection />
      </div>
      <div id="workflow">
        <WorkflowSection />
      </div>
      <div id="products">
        <ProductsSection />
      </div>
      <div id="customers">
        <CustomersSection />
      </div>
      <TestimonialsSection />
      <div id="impact">
        <ImpactSection />
      </div>
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
