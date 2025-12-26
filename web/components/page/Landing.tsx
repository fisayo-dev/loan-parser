import Button from "../field/Button";

const Landing = () => {
  return (
    <div className="">
      <div className="grid place-items-center h-full">
        <div className="2xl:py-20 py-10 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col">
            <h2 className="leading-20 text-4xl lg:text-7xl font-bold">
              Simplify Complex <br></br> Loan Documents
            </h2>
            <p className="text-sm md:text-2xl mt-6 mb-10">
              AI-powered loan summary
            </p>
          </div>
          <Button text="Start for free" className="text-2xl px-10" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
