import { ChevronRight } from "lucide-react";

type Props = {
  pageName: string;
};
export const PageBanner = ({ pageName }: Props) => {
  return (
    <div
      role="banner"
      className="page-banner relative capitalize flex justify-center items-center flex-col gap-4 h-80"
    >
      <h1 className="text-5xl font-bold">{pageName}</h1>
      <h3 className="flex gap-2 items-center">
        <span className="font-medium">home</span>
        <ChevronRight />
        <span className="font-light">{pageName}</span>
      </h3>
    </div>
  );
};
