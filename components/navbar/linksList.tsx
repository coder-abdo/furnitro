import { cn } from "@/lib/utils";
import { LinkItem } from "./linkItem";
import { linksMap } from "@/utils";
type Props = {
  isMobile: boolean;
};
export const LinksList = ({ isMobile }: Props) => {
  return (
    <ul
      className={cn("flex items-center justify-center gap-10 flex-grow", {
        "flex-col justify-start gap-3 mb-4": isMobile,
      })}
    >
      {Array.from(linksMap).map(([text, path], index) => (
        <LinkItem text={text} path={path} key={index} />
      ))}
    </ul>
  );
};
