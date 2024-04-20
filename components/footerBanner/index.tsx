import { BadgeCheck, Gift, TimerReset, Trophy } from "lucide-react";
import { Item } from "./item";

export const FooterBanner = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 bg-pink-100 md:py-9 py-4 px-4">
      <Item
        icon={Trophy}
        title="high quality"
        description="crafted from top materials"
      />
      <Item
        icon={BadgeCheck}
        title="Warranty Protection"
        description="Over 2 years"
      />
      <Item icon={Gift} title="free shipping" description="Order over 150 $" />
      <Item
        icon={TimerReset}
        title="24 / 7 Support"
        description="Dedicated support"
      />
    </div>
  );
};
