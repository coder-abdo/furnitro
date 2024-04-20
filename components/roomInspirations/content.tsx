import React from "react";
import { Button } from "../ui/button";

export const InspirationContent = () => {
  return (
    <div className="max-w-md w-full capitalize flex flex-col justify-center pr-5">
      <h2 className="text-4xl font-bold mb-4">
        50+ Beautiful rooms inspiration
      </h2>
      <p className="font-medium text-base mb-6">
        Our designer already made a lot of beautiful prototipe of rooms that
        inspire you
      </p>
      <Button
        size="lg"
        className="max-w-40 w-full bg-main text-white hover:bg-transparent hover:text-main border border-main"
      >
        explore more
      </Button>
    </div>
  );
};
