import { BrowseItems } from "@/utils";
import { BrowseCardItem } from "./browseCardItem";

export const BrowseCardItems = () => {
  return (
    <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-2">
      {Array.from(BrowseItems).map(([title, imageSrc]) => (
        <BrowseCardItem imageSrc={imageSrc} imageCaption={title} key={title} />
      ))}
    </div>
  );
};
