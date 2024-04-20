import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};
export const Item = ({ icon: Icon, title, description }: Props) => {
  return (
    <div className="flex lg:justify-center gap-4 items-center capitalize py-4">
      <Icon size={48} />
      <div className="flex flex-col">
        <h4 className="font-semibold text-2xl">{title}</h4>
        <h6 className="text-xl text-gray-400 font-medium">{description}</h6>
      </div>
    </div>
  );
};
