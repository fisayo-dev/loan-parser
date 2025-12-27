import Features from "@/components/page/Features";
import Footer from "@/components/page/Footer";
import Landing from "@/components/page/Landing";

const page = () => {
  return (
    <div className="grid gap-30">
      <Landing />
      <Features />
      <Footer />
    </div>
  );
};

export default page;
