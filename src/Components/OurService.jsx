import React from "react";
import us1 from "../assets/images/service/1.png";
import us2 from "../assets/images/service/2.png";
import us3 from "../assets/images/service/3.png";
import us4 from "../assets/images/service/4.png";
import us5 from "../assets/images/service/5.png";
import us6 from "../assets/images/service/6.png";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";

export default function OurService() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  const servies = [
    {
      title: "Global Import & Export Solutions",
      dec: "Seamless international trade of high-demand products, including machinery, food items, and consumer goods.",
      fade: "fade-right",
      img: us5,
    },
    {
      title: "Security & Surveillance Systems",
      dec: "Cutting-edge alarm and security control equipment for businesses and residential properties.",
      fade: "fade-up",
      img: us4,
    },
    {
      title: "Re-Export & Trade Facilitation ",
      dec: "Efficient handling of re-export operations, ensuring smooth logistics and compliance.",
      fade: "fade-left",
      img: us1,
    },
    {
      title: "Wholesale Distribution & Supply Chain Management ",
      dec: "Bulk procurement and streamlined distribution of office supplies, health products, and more.",
      fade: "fade-right",
      img: us2,
    },
    {
      title: "Business Consulting & Trade Advisory",
      dec: "Expert guidance on market entry, trade regulations, and investment opportunities.",
      fade: "fade-up",
      img: us6,
    },
    {
      title: "Customized Product Sourcing & Procurement",
      dec: "Tailored sourcing solutions to meet client-specific needs with quality assurance.",
      fade: "fade-left",
      img: us3,
    },
  ];
  return (
    <div
      id="services"
      className="max-w-[1400px] mx-auto  p-5 px-10 overflow-hidden"
    >
      <div className="divider text-primary font-bold text-4xl text-center mb-3 pb-5">
        Our Servies
      </div>
      <p className=" text-primary-dark text-lg text-center mb-10">
        Powering Global Trade & Security
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {servies.map((serviec, index) => {
          return (
            <div
              id={index}
              data-aos={serviec.fade}
              data-aos-duration="1500"
              className="flex flex-col gap-2 items-center px-8 text-center relative"
              key={serviec.id}
            >
              <img
                src={serviec.img}
                alt=""
                className="h-40 md:h-50 hover:scale-110 duration-300 ease-in-out"
              />
              <p className="text-xl text-primary font-bold ">{serviec.title}</p>
              <p className="text-primary-dark">{serviec.dec}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
