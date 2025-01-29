import React from "react";

const RoadMapCard = ({
  phase,
  title,
  details,
}: {
  phase: number;
  title: string;
  details: string[];
}) => {
  return (
    <div
      className="col-span-1 px-6 py-8 flex flex-col items-start justify-start gap-5 border-[4px] border-solid border-primary bg-background rounded-[24px]"
      style={{
        boxShadow: "4px 4px 0px 0px #FFD700",
      }}
    >
      <p className="text-text font-grandstander-bold_700 text-[24px] leading-[125%]">
        Phase {phase}: {title}
      </p>
      <ul className=" list-disc pl-[20px] flex flex-col items-start max-w-[366px]  ">
        {details.map((item, index) => {
          return (
            <li
              key={index}
              className="text-text text-[16px] leading-[160%] font-grandstander-medium_500 "
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RoadMapCard;
