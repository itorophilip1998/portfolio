import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function DesktopNav() {
  return (
    <div className="hidden xl:flex">
      <nav>Desktop Nav</nav>

      <Link href="/contact">
        <Button>Hire Me</Button>
      </Link>
    </div>
  );
}
