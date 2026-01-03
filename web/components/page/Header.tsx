import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import Button from "../field/Button";

const Header = () => {
  return (
    <div className="z-50 fixed top-0 w-full grid items-center border-b border-border h-20 bg-background/80 backdrop-blur-md">
      <div className="app-container w-full flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Loan Parser Logo" width={32} height={32} className="w-8 h-8" />
            <h2 className="text-xl font-bold tracking-tight">Loan Parser</h2>
        </Link>

        <div className="flex items-center space-x-2">
          <Link
            href="https://github.com/fisayo-dev/loan-parser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hidden md:block">
              <Button text="Star on Github" icon={GithubIcon} variant="outline" className="text-xs md:text-sm start-btn" /> 
            </div>
            <div className="block md:hidden">
              <Button text="" icon={GithubIcon} variant="outline" className="text-xs md:text-sm start-btn" /> 
            </div>
          </Link>
          <Link href="/scan">
            <Button text="Get Started" className="text-xs md:text-sm" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
