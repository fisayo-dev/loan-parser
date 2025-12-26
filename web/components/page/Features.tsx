import Image from "next/image";
import Button from "../field/Button";

const Features = () => {
  return (
    <div className="lg:my-20 grid gap-4">
      <div className="grid gap-20">
        <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
          <div className="block">
            <h2 className="capitalize font-bold text-5xl lg:text-7xl lg:leading-19 mb-4">
              Unlimited Documents upload.
            </h2>
            <Button text="Upload docs now" className="px-6 " />
          </div>
          <div className="flex justify-end">
            <Image
              src="/assets/upload.jpg"
              alt="Globe Image"
              height={20}
              width={20}
              className="h-100 w-100"
            />
          </div>
        </div>
        <div className="grid justify-between items-center grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <Image
              src="/assets/integrate.png"
              alt="Globe Image"
              height={20}
              width={20}
              className="h-100 w-100"
            />
          </div>
          <div className="col-span-1">
            <h2 className="font-bold text-5xl lg:text-7xl lg:leading-19 mb-4">
              Integrate CSV/JSON <br /> Data into Loan Software.
            </h2>
            <Button text="Start integrating" className="px-6 " />
          </div>
        </div>
        <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
          <div className="block">
            <h2 className="font-bold text-5xl lg:text-7xl lg:leading-19 mb-4">
              Get loan Breakdown & Risk Highlight.
            </h2>
            <Button text="Get Breakdown" className="px-6 " />
          </div>
          <div className="flex justify-end">
            <Image
              src="/assets/integrate.png"
              alt="Globe Image"
              height={20}
              width={20}
              className="h-100 w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
