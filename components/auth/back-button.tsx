"use client";

import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton: FC<BackButtonProps> = ({ label, href }) => {
  return (
    <Button asChild variant={"link"} className="w-full font-normal" size={"sm"}>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
