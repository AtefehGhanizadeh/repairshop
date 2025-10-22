"use client";
import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes } from "react";
import { Button } from "./ui/button";

type Props = {
  title: string;
  className?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BackButton = ({ title, variant, className, ...props }: Props) => {
  const router = useRouter();
  return (
    <Button
      {...props}
      className={className}
      variant={variant}
      onClick={() => router.back()}
      title={title}
    >
      {title}
    </Button>
  );
};

export default BackButton;
