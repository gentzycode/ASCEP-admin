import { ReactNode } from "react";
import IconWrapper from "./IconWrapper";

interface StatsCardProps {
  icon: ReactNode;
  title: string;
  count: number | string;
}

export default function StatsCard({ icon, count, title }: StatsCardProps) {
  return (
    <div className="flex items-center p-6 bg-secondary rounded-[20px] gap-4">
      <IconWrapper className="w-11 bg-[#FFC3341A] h-11 rounded-xl">
        <div className="text-primary text-[24px]">{icon}</div>
      </IconWrapper>
      <div>
        <h3 className="text-2xl font-bold text-white">
          {count.toLocaleString()}
        </h3>
        <p className="text-[#F9F6FB]/50 text-sm">{title}</p>
      </div>
    </div>
  );
}
