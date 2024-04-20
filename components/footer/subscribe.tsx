import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export const FooterSubscribe = () => {
  return (
    <div className="flex flex-col gap-4">
      <h6 className="text-base font-medium text-gray-400">NewsLetter</h6>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Enter your Email Address"
          className="border-0 border-b border-gray-400 outline-none focus:outline-none focus:border-main ring-0 focus:ring-0 focus:ring-offset-transparent focus:ring-offset-0 focus:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button type="submit" variant="ghost">
          Subscribe
        </Button>
      </div>
    </div>
  );
};
