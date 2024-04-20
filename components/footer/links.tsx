import { linksMap } from "@/utils";
import React from "react";
import { LinkItem } from "../navbar/linkItem";

export const FooterLinks = () => {
  return (
    <div className="flex flex-col gap-4">
      <h6 className="text-base font-medium text-gray-400">Links</h6>
      <ul className="space-y-5">
        {Array.from(linksMap).map(([text, path]) => (
          <LinkItem key={text} path={path} text={text} />
        ))}
      </ul>
    </div>
  );
};
