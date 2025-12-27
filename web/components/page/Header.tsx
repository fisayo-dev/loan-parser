import { Star } from "lucide-react";
import Button from "../field/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed w-full grid items-center border-b border-black/90 h-20 bg-[#ffffff]">
      <div className="app-container w-full flex justify-between items-center">
        <h2 className="text-2xl font-bold">Loan Parser</h2>

        <div className="flex items-center space-x-2">
          <Link
            href="https://github.com/fisayo-dev/loan-parser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="star-btn flex gap-2 items-center outline-none border border-black  hover:bg-black px-4 py-3 rounded-full hover:text-white text-sm">
              <Star className="star-icon h-4 w-4" />
              Star on GitHub
            </button>
          </Link>
          <Button text="Get Started" className="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Header;
