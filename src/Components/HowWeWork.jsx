import Aos from "aos";
import React from "react";
import CountUp from "react-countup";

export default function HowWeWork() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex gap-5 items-stretch">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="basis-1/3 bgMG-dark w-full rounded-xl p-4 text-light flex flex-col justify-between gap-10"
      >
        <div>
          <h1 className="text-7xl font-semibold ">
            <CountUp start={0} end={500} duration={5} />{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-plus-lg inline text-primary-light mb-4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </h1>
          <p data-aos="fade-right" data-aos-duration="800">
            Our expert team drives seamless trade operations with innovation and
            efficiency, ensuring global success for our clients.
          </p>
        </div>
        <div className="flex items-center overflow-hidden">
          <img
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className=" w-20 h-20 object-cover rounded-full border-2 border-primary-dark"
            src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="w-20  h-20 object-cover rounded-full border-2 border-primary-dark ms-[-5px]"
            src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="w-20  h-20 object-cover rounded-full border-2 border-primary-dark ms-[-10px]"
            src="https://media.licdn.com/dms/image/C4E03AQEtuq_u3B2QgQ/profile-displayphoto-shrink_800_800/0/1616678310456?e=2147483647&v=beta&t=IzBjrOwPlR6ytUkQQIzs9w74v4QUf7Cu_hnXssBnuGE"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1400"
            className="w-20  h-20 object-cover rounded-full border-2 border-primary-dark ms-[-15px] z-10"
            src="https://media.licdn.com/dms/image/C4D03AQFlwTr1qNIqpA/profile-displayphoto-shrink_400_400/0/1613241358391?e=2147483647&v=beta&t=cNTGCcJZNHxX5jINg0oM7Onwj7yZ0NxExXhVbiolqhA"
            alt=""
          />
          <p
            className="text-6xl z-0"
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="basis-2/3 bg-primary w-full rounded-xl h-80 overflow-hidden shadow-lg relative group"
      >
        <div className="absolute left-0 right-0 bottom-0 top-0 bg-black/30 group-hover:scale-110 duration-200 z-10"></div>
        <img
          className="object-cover w-full h-full  group-hover:scale-110 duration-200"
          src="https://th.bing.com/th/id/R.689eb37da4ebe2524dd853cb3d002da8?rik=aaXFxR0bQaMjgg&pid=ImgRaw&r=0"
          alt=""
        />
      </div>
    </div>
  );
}
