import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import Footer from "./footer";

export const metadata = {
  title: "404 dev_not_found",
  description:
    "Transform from a theory-heavy CS student into a practical developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-gray-900/80 backdrop-blur-sm fixed w-full z-50 border-b border-orange-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 font-bold text-xl hover:scale-105 transition-transform"
                >
                  &lt;half-baked_dev /&gt;
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="#resources"
                    className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                  >
                    &lt;resources /&gt;
                  </Link>
                  {/* <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:to-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                  >
                    &lt;GitHub /&gt;
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
