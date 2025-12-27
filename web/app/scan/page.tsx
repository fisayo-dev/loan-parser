import Button from "@/components/field/Button";
import Image from "next/image";
import Link from "next/link";

const ScanPage = () => {
  return (
    <div className="block">
      <Link href="/">
        <Button variant="outline" text="Back home" className="px-6 mb-6" />
      </Link>
      <h1 className="text-xl lg:text-3xl font-bold mb-4">
        Scan your loans effortlessly
      </h1>
      <div className="py-4 h-[80vh] grid place-content-center border  max-w-2xl mx-auto rounded-2xl my-10">
        <div className="flex flex-col space-y-2 text-center items-center">
          <Image
            src="/assets/file_docs.jpg"
            alt="Document docs"
            height={100}
            width={100}
            className="h-50 w-50"
          />
          <div>
            <p>Upload documents OR</p>
            <p>Drag & Drop them</p>
          </div>
        </div>
      </div>
      <div className="grid">
        <Button
          variant="outline"
          text="Upload Documents"
          className="px-6 mb-10 mx-auto"
        />
      </div>
    </div>
  );
};

export default ScanPage;
