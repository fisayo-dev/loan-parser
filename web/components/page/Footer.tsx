import Link from "next/link";
import Image from "next/image";
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Loan Parser Logo"
                width={32}
                height={32}
                className="w-8 h-8 opacity-90"
              />
              <span className="font-bold text-xl tracking-tight">
                Loan Parser
              </span>
            </Link>
            <p className="text-gray-500 text-lg max-w-sm leading-relaxed">
              &quot;Loans are written as documents. They should behave like
              data.&quot;
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/fisayo-dev/loan-parser"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link href="/scan" className="hover:text-black transition-colors">
                  Start Scanning
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-black transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/scan" className="hover:text-black transition-colors">
                  Live Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a
                  href="https://github.com/fisayo-dev/loan-parser"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/fisayo-dev/loan-parser"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Loan Parser. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for Hackathon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
