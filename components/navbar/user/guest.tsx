import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import React from "react";
type Props = {
  isMobile: boolean;
};
export const Guest = ({ isMobile }: Props) => {
  return (
    <div className={cn("flex gap-4", { "flex-col gap-2": isMobile })}>
      <Button
        className="bg-main hover:bg-transparent hover:text-main transition-colors border border-main"
        size={"lg"}
      >
        <SignInButton />
      </Button>
      <Button
        size={"lg"}
        className="bg-main hover:bg-transparent hover:text-main transition-colors border border-main"
      >
        <SignUpButton />
      </Button>
    </div>
  );
};
