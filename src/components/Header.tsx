import React from "react";
import NavButton from "./NavButton";
import { File, HomeIcon, UsersRound } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  return (
    <header className=" h-12 animate-slide bg-background border-b sticky top-0 z-20 p-2">
      <div className="flex justify-between items-center h-8 w-full">
        <div className="flex items-center gap-2">
          <NavButton href="/home" label="Home" icon={HomeIcon} />
          <Link
            href="/home"
            className="flex items-center justify-center gap-2 ml-0"
            title="Home"
          >
            <h1 className="hidden sm:block text-xl font-bold m-0 mb-1">
              Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <NavButton icon={File} href="/tickets" label="Tickets" />
          <NavButton icon={UsersRound} href="/customers" label="Customers" />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
