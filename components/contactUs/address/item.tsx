import type { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};
export const Item = ({ icon: Icon, title, description }: Props) => {
  return (
    <div className="flex gap-2">
      <Icon size={36} />
      <div className="flex flex-col gap-2 capitalize">
        <h4 className="text-2xl font-medium">{title}</h4>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};
