"use client";
import React from "react";
import CountUp from "react-countup";

const Badge = ({
  containerStyles,
  endCountText,
  endCountNumb = null,
  icon,
  badgeText,
}) => {
  if (endCountNumb) {
    return (
      <div className={`badge ${containerStyles}`}>
        <div className="text-3xl text-primary ">{icon}</div>
        <div className="flex items-center gap-x-2">
          <div className="text-4xl leading-none font-bold text-primary">
            <CountUp end={endCountNumb} delay={1} duration={4} />
            {endCountText}
          </div>
          <div className=" max-w-[70px] leading-none text-[15px] font-medium text-black">
            {badgeText}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={` ${containerStyles} rounded-lg bg-primary leading-none text-[15px] p-1 font-medium text-white`}
      >
        {badgeText}
      </div>
    );
  }
};

export default Badge;
