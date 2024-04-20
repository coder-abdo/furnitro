import React from "react";
import { Item } from "./item";
import { Clock8, MapPin, Phone } from "lucide-react";

export const Address = () => {
  return (
    <div className="flex flex-col gap-8">
      <Item
        icon={MapPin}
        title="Address"
        description="236 5th SE Avenue, New York NY10000, United States"
      />
      <Item
        icon={Phone}
        title="Phone"
        description="Mobile: +(84) 546-6789␍
Hotline: +(84) 456-6789"
      />
      <Item
        icon={Clock8}
        title="Working Time"
        description="Monday-Friday: 9:00 - 22:00␍
Saturday-Sunday: 9:00 - 21:00"
      />
    </div>
  );
};
