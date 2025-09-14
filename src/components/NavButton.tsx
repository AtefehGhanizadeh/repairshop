import { Icon, LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface Props {
  icon: LucideIcon;
  href?: string;
  label: string;
}

const NavButton = ({ icon: Icon, href, label }: Props) => {
  return (
    <Button
      variant="ghost"
      title={label}
      size="icon"
      aria-label={label}
      className="rounded-full"
      asChild
    >
      {href ? (
        <Link href={href}>
          <Icon />
        </Link>
      ) : (
        <Icon />
      )}
    </Button>
  );
};

export default NavButton;
