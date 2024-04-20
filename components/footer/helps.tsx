import React from "react";
const helps = ["payment options", "returns", "privacy policies"];
export const FooterHelps = () => {
  return (
    <div className="flex flex-col gap-5">
      <h6 className="text-base font-medium text-gray-400">Helps</h6>
      <ul className="space-y-6">
        {helps.map((help, i) => (
          <li
            key={i}
            className="text-base text-black font-medium capitalize hover:underline"
          >
            {help}
          </li>
        ))}
      </ul>
    </div>
  );
};
