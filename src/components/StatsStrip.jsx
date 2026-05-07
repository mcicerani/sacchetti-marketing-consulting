import React from "react";
import { useSiteData } from "../sanity/SanityContext";
import CountUp from "./AnimationComponents/CountUp";
import { SkeletonText } from "./AnimationComponents/Skeleton";

const StatsStrip = () => {
  const { data, loading } = useSiteData();
  const stats = data?.siteSettings?.stats || [];

  return (
    <div className="bg-logo text-white py-10 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <SkeletonText className="h-14 w-20 bg-white/20" />
                <SkeletonText className="h-4 w-28 bg-white/20" />
              </div>
            ))
          : stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-marcellus text-5xl lg:text-6xl"><CountUp value={value} /></span>
                <span className="font-work text-sm lg:text-base text-white/80 mt-1 uppercase tracking-wide">
                  {label}
                </span>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default StatsStrip;
