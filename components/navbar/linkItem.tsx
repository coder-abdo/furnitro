import Link from "next/link";
import React, { FC } from "react";
type Props = {
  path: string;
  text: string;
};
export const LinkItem: FC<Props> = ({ path, text }) => {
  return (
    <li className="p-1">
      <Link
        className="text-base text-black font-medium capitalize hover:underline"
        href={path}
      >
        {text}
      </Link>
    </li>
  );
};
