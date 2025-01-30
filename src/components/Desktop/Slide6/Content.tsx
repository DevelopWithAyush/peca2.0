import Image from "next/image";
import RoadMapCard from "./RoadMapCard";

  const phases = [
      {
          phase: 1,
          title: "Presale Process",
          details: [
              "Memetic branding of the project",
              "Smart contract audit and security",
              "Launch of the SPECA token during the presale",
              "Community growth through large-scale worldwide marketing campaigns"
          ]
      },
      {
          phase: 2,
          title: "Token Launch and Listings",
          details: [
              "Token generation event",
              "Listings on DEX and CEX platforms",
              "Community participation",
              "Focus on maintaining healthy financial indicators"
          ]
      },
      {
          phase: 3,
          title: "SupaDapp Launch",
          details: [
              "SupaDapp launch with extensive global marketing",
              "Continuous onboarding and integration of dApps",
              "Product enhancements and new feature rollouts"
          ]
      },
      {
          phase: 4,
          title: "Ecosystem Enhancements",
          details: [
              "Multifold growth in downloads and active users",
              "Partnership development",
              "Continuous improvements to maintain industry leadership"
          ]
      }
  ];

const Content = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-8 pt-[13.5px] w-full">
      <p
        className="text-secondary text-[48px] font-grandstander-black_900 leading-normal  "
        style={{
          WebkitTextStrokeColor: "#FFD700",
          WebkitTextStrokeWidth: "4px",
          paintOrder: "stroke fill",
        }}
      >
        PEPIUS CAESAR’S ROADMAP
      </p>

          <div className="grid grid-cols-2 items-start justify-start gap-x-8 gap-y-9 relative w-full">
              <Image src={"/images/Images/Slide6Image1.png"} width={233} height={186} alt="Slide6Image1" className="absolute top-0 right-0 -translate-y-[87%] z-0"/>
              {/* <Image src={"/images/Images/Slide6Image2.png"} width={233} height={186} alt="Slide6Image1" className="absolute bottom-0 right-0 z-20 -translate-x-[100%]"/> */}
              <Image src={"/images/Images/Slide6Image3.png"} width={233} height={186} alt="Slide6Image1" className="absolute bottom-0 left-0  z-30 -translate-x-[55%] translate-y-[30%]"/>
              {phases.map((phase) => {
                  return <RoadMapCard key={phase.phase} phase={phase.phase} title ={phase.title} details={phase.details} />
              })}
      </div>
    </div>
  );
};

export default Content;
