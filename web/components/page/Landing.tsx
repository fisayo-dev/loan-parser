import Link from "next/link";
import Button from "../field/Button";
import { ArrowRight, FileText, Zap, FileJson } from "lucide-react";

const Landing = () => {
  return (
    <div className="flex flex-col gap-24 pb-20 w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-10 lg:pt-20">
        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-8">
            <div className="hidden sm:inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-800 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-black mr-2 animate-pulse"></span>
                v1.0 Now Available
            </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance text-black">
            Simplify Complex <br />
            <span className="text-gray-500">Loan Documents</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl text-balance leading-relaxed">
            Instantly parse and analyze loan agreements into structured CSV/JSON data.
            Cut through the jargon with AI-powered conceptual understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
            <Link href="/scan" className="w-full sm:w-auto">
              <Button
                text="Start Parsing Now"
                className="w-full lg:text-lg px-8 py-4"
                icon={ArrowRight}
              />
            </Link>
             <Link href="#features" className="w-full sm:w-auto">
              <Button
                text="Learn More"
                variant="outline"
                className="w-full lg:text-lg px-8 py-4"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="px-4 container mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Loan Parser?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Designed for rapid analysis and extraction of critical financial data.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
                icon={FileText}
                title="Smart Parsing"
                description="Upload any PDF loan agreement. We extract key terms, interest rates, and covenants automatically."
            />
            <FeatureCard
                icon={FileJson}
                title="Structured Data"
                description="Export messy documents into clean JSON or CSV formats ready for Excel or database integration."
            />
            <FeatureCard
                icon={Zap}
                title="Instant Analysis"
                description="Get immediate insights. Identify risks and opportunities in seconds, not hours."
            />
        </div>
      </section>

         {/* Visual/Demo Section Placeholder */}
      <section className="px-4 container mx-auto">
        <div className="rounded-3xl border border-gray-200 bg-gray-50/50 p-8 lg:p-16 overflow-hidden relative">
            <div className="flex flex-col items-center text-center mb-12">
                 <h2 className="text-3xl font-bold mb-4">How it works</h2>
                 <p className="text-gray-600 max-w-xl">From PDF to Data in three simple steps. No configuration required.</p>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
                 <Step number="01" title="Upload" desc="Drag & drop your loan PDF" />
                 <Step number="02" title="Process" desc="AI analyzes structure & terms" />
                 <Step number="03" title="Export" desc="Download structured CSV/JSON" />
             </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-black" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const Step = ({ number, title, desc}: { number: string, title: string, desc: string }) => (
    <div className="flex flex-col items-center group">
        <div className="text-5xl font-bold text-gray-200 mb-6 group-hover:text-black transition-colors duration-300">{number}</div>
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-500">{desc}</p>
    </div>
);

export default Landing;
