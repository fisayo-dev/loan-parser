import Image from "next/image";
import Button from "../field/Button";
import Link from "next/link";

const Features = () => {
  return (
    <div className="mb-10 grid gap-4">
      <h2 className="text-2xl md:text-4xl text-center font-bold mb-10">What Loan Parser offers?</h2>
      <div className="grid gap-20">
        <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
          <div className="block">
            <h2 className="capitalize font-bold text-5xl lg:text-7xl lg:leading-19 mb-4">
              Unlimited Documents upload.
            </h2>
            <Link href="/scan">
              <Button text="Upload docs now" className="px-6 " />
            </Link>
          </div>
          <div className="flex md:justify-end">
            <Image
              src="/assets/upload.jpg"
              alt="Globe Image"
              height={300}
              width={300}
              className="h-80 w-80 md:h-100 md:w-100 grayscale"
            />
          </div>
        </div>
        <div className="grid justify-between items-center grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <Image
              src="/assets/extract_csv_json.jpg"
              alt="Globe Image"
              height={300}
              width={300}
              className="h-80 w-80 md:h-100 md:w-100 grayscale"
            />
          </div>
          <div className="col-span-1">
            <h2 className="font-bold text-5xl lg:text-7xl lg:leading-19 mb-4">
              Integrate CSV/JSON <br /> Data into Loan Software.
            </h2>
            <Link href="/scan">
              <Button text="Start integrating" className="px-6 " />
            </Link>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
          <div className="block">
            <h2 className="font-bold text-5xl lg:text-7xl lg:leading-19 mb-4">
              Get loan Breakdown & Risk Highlight.
            </h2>
            <Link href="/scan">
              <Button text="Get Breakdown" className="px-6 " />
            </Link>
          </div>
          <div className="flex md:justify-end">
            <Image
              src="/assets/loan_breakdown.png"
              alt="Globe Image"
              height={300}
              width={300}
              className="h-80 w-80 md:h-100 md:w-100 grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
