import React from "react";
import logo from "../assets/logo.avif";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import HowWeWork from "../Components/HowWeWork";

const cards = [
  {
    title: "Experience",
    text: "20+ Years Working",
    icon: <FaAward className="text-2xl" />,
    fade: "fade-left",
    duration: "1000",
  },
  {
    title: "Clients",
    text: "1000+ Local Clints",
    icon: <FiUsers className="text-2xl" />,
    fade: "fade-left",
    duration: "1500",
  },
  {
    title: "Offices & Depo",
    text: "7+ Offices",
    icon: <VscFolderLibrary className="text-2xl" />,
    fade: "fade-left",
    duration: "2000",
  },
];
export default function AboutUs() {
  return (
    <div
      id="about"
      className="max-w-[1400px] mx-auto p-10 overflow-hidden flex flex-col gap-5"
    >
      <div className="divider text-primary font-bold text-4xl text-center mb-3 pb-5">
        About Us
      </div>
      <p className=" text-gray-500  text-lg text-center mb-10">
        Your Trusted Partner in Global Trade & Security Solutions{" "}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 gap-y-5 md:gap-5 justify-center mb-10">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="relative overflow-hidden rounded-xl shadow-0 lg:shadow flex justify-center items-center "
        >
          <img
            className="w-60 md:w-80 lg:w-96 object-cover top30-0 left-0 "
            src={logo}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between items-center gap-5 h-full col-span-2 px-0 lg:px-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 justify-around items-center">
            {cards.map((card, index) => {
              return (
                <div
                  data-aos={card.fade}
                  data-aos-duration={card.duration}
                  key={index}
                >
                  <div className="bgMG-dark w-full text-light border-2 border-light hover:border-primary hover:shadow-md hover:shadow-primary/25 duration-300  ease-in-out flex flex-col items-center gap-2 p-7 rounded-2xl ">
                    {card.icon}
                    <p className="text-xl">{card.title}</p>
                    <p className="text-sm">{card.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            className="text-justify text-lg"
          >
            M T S S GENERAL TRADING (L.L.C) is a leading trading company based
            in Dubai, UAE, specializing in General Trading and Security Control
            & Alarm Equipment Trading. Established with a commitment to quality
            and excellence, we provide high-demand products to global markets
            while ensuring seamless trade operations. Dubai’s strategic location
            enables us to engage in both export and re-export operations,
            ensuring our partners receive high-quality goods efficiently. Our
            expertise includes trading in machinery, food items, chemicals,
            office supplies, consumer electronics, and health & wellness
            products, which are in high demand in the UAE and beyond.
          </p>
        </div>
      </div>
      <HowWeWork />{" "}
      <div
        data-aos={"fade-up"}
        data-aos-duration={"1000"}
        className="flex gap-5 items-start"
      >
        <div>
          <p className="text-xl font-semibold">Trading</p>
          <p>
            We have a strong international network of customers and are able to
            market very large quantities in the area of electrical goods whether
            the products are used, returned, new or refurbished.
          </p>
        </div>

        <div>
          <p className="text-xl font-semibold"> How can you contact us? </p>

          <p>
            If you have any questions or want to receive more information, do
            not hesistate to contact us, we are happy to assist you! You can
            always contact us by filling in the contact form, calling, mail or
            WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
