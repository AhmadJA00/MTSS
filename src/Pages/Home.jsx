import { GiWorld } from "react-icons/gi";
import OurService from "../Components/OurService";
import Slider from "../Components/Slider";
import ContactUs from "./ContactUs";
import logo from "../assets/logo.avif";

import { PiTruckThin } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Slider />
      <div className="relative mb-40 max-w-[1000px] mx-auto ">
        <div className="absolute top-[-65px] mx-auto">
          <div className="grid grid-cols-3 items-stretch justify-center px-20 mx-auto">
            <div className="hover:shadow-lg hover:shadow-primary/50 duration-300 ease-in-out z-40 rounded-s-lg overflow-hidden">
              <div
                data-aos="fade-right"
                data-aos-duration="800"
                className="bg-primary p-2 px-4 text-light"
              >
                <div className="flex flex-col gap-3 p-2 items-center">
                  <GiWorld size={40} />
                  <p className="text-xl">We do</p>
                  <p>Worldwide import and export</p>
                </div>
              </div>
            </div>
            <div className="hover:shadow-lg hover:shadow-primary-light/50 duration-300 ease-in-out z-40 ">
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="bg-primary-light p-2 px-4 "
              >
                <div className="flex flex-col gap-3 p-2 items-center">
                  <PiTruckThin size={40} />
                  <p className="text-xl">Guaranteed</p>
                  <p>Fast delivery from our own stock</p>
                </div>
              </div>
            </div>
            <div className="hover:shadow-lg hover:shadow-secondary/50 duration-300 ease-in-out z-40 rounded-e-lg overflow-hidden">
              <div
                data-aos="fade-left"
                data-aos-duration="800"
                className="bg-secondary p-2 px-4 text-light"
              >
                <div className="flex flex-col gap-3 p-2 items-center">
                  <IoPricetagsOutline size={40} />
                  <p className="text-xl">Always</p>
                  <p>Incredibly low prices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="max-w-[1400px] mx-auto p-5 px-10 overflow-hidden"
      >
        <div className="divider text-primary font-bold text-4xl text-center mb-3 pb-5">
          About Us
        </div>
        <p className=" text-gray-500  text-lg text-center mb-10">
          Your Trusted Partner in Global Trade & Security Solutions{" "}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 gap-y-5 md:gap-5 justify-center">
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
            <p className="text-justify text-lg">
              M T S S GENERAL TRADING (L.L.C) is a leading trading company based
              in Dubai, UAE, specializing in General Trading and Security
              Control & Alarm Equipment Trading. Established with a commitment
              to quality and excellence, we provide high-demand products to
              global markets while ensuring seamless trade operations. Dubai’s
              strategic location enables us to engage in both export and
              re-export operations, ensuring our partners receive high-quality
              goods efficiently. Our expertise includes trading in machinery,
              food items, chemicals, office supplies, consumer electronics, and
              health & wellness products, which are in high demand in the UAE
              and beyond.
            </p>
          </div>
        </div>
      </div>
      <OurService />
      <ContactUs />
    </div>
  );
}
