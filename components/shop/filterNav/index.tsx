import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GalleryVertical, Grip, SlidersHorizontal } from "lucide-react";
import React from "react";

export const FilterNav = () => {
  return (
    <div className="bg-pink-100" role="menu" aria-label="filter navigation">
      <div className="container capitalize flex flex-col md:flex-row py-5 items-center">
        <div className="flex gap-5 items-center border-none md:border-r-4 border-gray-400 pr-5">
          <Button variant="ghost" className="flex gap-2 capitalize">
            <SlidersHorizontal />
            <span className="text-xl">filter</span>
          </Button>
          <Grip />
          <GalleryVertical />
        </div>
        <div className="flex flex-1 flex-col md:flex-row justify-between items-center pl-5 capitalize">
          <span className="text-base">showing 1-16 of 32 results</span>
          <div className="flex gap-5 items-center">
            <span className="text-xl">show</span>
            <div className="p-5 bg-white text-xl text-gray-300">16</div>
            <span className="text-xl">sort by</span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AS">AS</SelectItem>
                <SelectItem value="DS">DS</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
