import Link from "next/link";
import Button from "../field/Button";

const Landing = () => {
  return (
    <div className="grid place-items-center">
      <div className="2xl:py-20 py-10 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col">
          <h2 className="lg:leading-20 text-5xl lg:text-7xl font-bold">
            Simplify Complex <br></br> Loan Documents
          </h2>
          <p className="text-sm lg:text-2xl mt-6 mb-10">
            AI-powered loan summary
          </p>
        </div>
        <Link href="/scan" className="mb-4 w-full">
          <Button text="Start for free" className="lg:text-xl px-10" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
