import React from "react";
import { About } from "./about";
import { FooterLinks } from "./links";
import { FooterHelps } from "./helps";
import { FooterSubscribe } from "./subscribe";

export const Footer = () => {
  return (
    <footer className="pt-8 pb-4 border-t border-gray-300">
      <div className="container gap-5 flex flex-col md:justify-between md:flex-row">
        <About />
        <div className="flex gap-14 flex-col md:flex-row">
          <FooterLinks />
          <FooterHelps />
        </div>
        <FooterSubscribe />
      </div>
      <div className="container border-t border-gray-300 py-5">
        <p className="text-base text-black">
          {new Date().getFullYear()} furino&copy;All rights reserved
        </p>
      </div>
    </footer>
  );
};
