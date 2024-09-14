import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Philip <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop Nav */}
        <DesktopNav />
        
        {/* mobile nav */}
        <MobileNav />
      </div>
    </header>
  );
}
