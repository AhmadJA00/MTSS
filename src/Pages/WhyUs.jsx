import React from "react";
import us1 from "../assets/images/whyus/1.jpg";
import us2 from "../assets/images/whyUs/2.jpg";
import us3 from "../assets/images/whyUs/3.jpg";
import us4 from "../assets/images/whyUs/4.jpg";
import us5 from "../assets/images/whyUs/5.jpg";
import us6 from "../assets/images/whyUs/6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function WhyUs() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  const data = [
    {
      title: "Eliminate Redundancy",
      icon: us1,
      detail:
        "Duplicate and redundant processes are eliminated to increase efficacy.",
    },
    {
      title: "Centralised Inspection",
      icon: us2,
      detail:
        "Unified Inspection between Dubai Customs and Dubai Municipality.",
    },
    {
      title: "Time Saving",
      icon: us3,
      detail:
        "Introduce efficiency for food item request turnaround time with fast clearance.",
    },
    {
      title: "Minimal Effort",
      icon: us4,
      detail: "Four simple steps to execute your work.",
    },
    {
      title: "Connected Systems",
      icon: us5,
      detail:
        "Electronic exchange of information between all stakeholders simplified.",
    },
    {
      title: "Single Window",
      icon: us6,
      detail:
        "One stop shop for all food import and re-export related services.",
    },
  ];
  return (
    <section
      id="Criteria"
      className="p-10 max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-10 overflow-hidden"
    >
      <div className="divider text-primary font-bold text-4xl text-center mb-3 pb-5">
        Why Us
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="750"
        className="grid grid-cols-1 md:grid-cols-3 justify-center items-streach gap-10 "
      >
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="p-10 rounded-xl text-light flex flex-col justify-start items-center gap-5 border-2  hover:shadow-lg hover:shadow-secondary/25 hover:border-secondary bg-primary-dark border-transparent duration-200"
            >
              <div className="w-20 border-2 border-secondary  rounded-full overflow-hidden">
                <img
                  src={item.icon}
                  alt=""
                  className="w-21 h-21 rounded-full object-contain"
                />
              </div>
              <p className=" text-xl font-semibold">{item.title}</p>
              <p className=" text-sm md:text-md text-center ">{item.detail}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
