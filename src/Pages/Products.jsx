import React from "react";
import img1 from "../assets/images/products/1.jpg";
import img2 from "../assets/images/products/2.jpg";
import img3 from "../assets/images/products/3.jpg";
import img4 from "../assets/images/products/4.jpg";
import img5 from "../assets/images/products/5.jpg";
import img6 from "../assets/images/products/6.jpg";
import img7 from "../assets/images/products/7.jpg";
import img8 from "../assets/images/products/8.jpg";
import img9 from "../assets/images/products/9.jpg";
import img10 from "../assets/images/products/10.jpg";
import img11 from "../assets/images/products/11.jpg";
import img12 from "../assets/images/products/12.jpg";
import img13 from "../assets/images/products/13.jpg";
import img14 from "../assets/images/products/14.jpg";
import img15 from "../assets/images/products/15.jpg";
import img16 from "../assets/images/products/16.jpg";
import img17 from "../assets/images/products/17.jpg";
import img18 from "../assets/images/products/18.jpg";
import img19 from "../assets/images/products/19.jpg";
import img20 from "../assets/images/products/20.jpg";
import img21 from "../assets/images/products/21.jpg";
import img22 from "../assets/images/products/22.jpg";
import img23 from "../assets/images/products/23.jpg";
import img24 from "../assets/images/products/24.jpg";
import img25 from "../assets/images/products/25.jpg";
import img26 from "../assets/images/products/26.jpg";
import img27 from "../assets/images/products/27.jpg";
import img28 from "../assets/images/products/28.jpg";
import img29 from "../assets/images/products/29.jpg";
import img30 from "../assets/images/products/30.jpg";
import img31 from "../assets/images/products/31.jpg";
import img32 from "../assets/images/products/32.jpg";
import img33 from "../assets/images/products/33.jpg";
import img34 from "../assets/images/products/34.jpg";
import img35 from "../assets/images/products/35.jpg";
import img36 from "../assets/images/products/36.jpg";
import img37 from "../assets/images/products/37.jpg";
import img38 from "../assets/images/products/38.jpg";
import img39 from "../assets/images/products/39.jpg";
import img40 from "../assets/images/products/40.jpg";
import img41 from "../assets/images/products/41.jpg";
import img42 from "../assets/images/products/42.jpg";
import img43 from "../assets/images/products/43.jpg";
import img44 from "../assets/images/products/44.jpg";
import img45 from "../assets/images/products/45.jpg";
import img46 from "../assets/images/products/46.jpg";
import img47 from "../assets/images/products/47.jpg";
import img48 from "../assets/images/products/48.jpg";
import img49 from "../assets/images/products/49.jpg";
import img50 from "../assets/images/products/50.jpg";
import img51 from "../assets/images/products/51.jpg";
import img52 from "../assets/images/products/52.jpg";
import img53 from "../assets/images/products/53.jpg";
import img54 from "../assets/images/products/54.jpg";
import img55 from "../assets/images/products/55.jpg";
import img56 from "../assets/images/products/56.jpg";
import img57 from "../assets/images/products/57.jpg";
import img58 from "../assets/images/products/58.jpg";
import img59 from "../assets/images/products/59.jpg";
import img60 from "../assets/images/products/60.jpg";
import img61 from "../assets/images/products/61.jpg";
import img62 from "../assets/images/products/62.jpg";
import img63 from "../assets/images/products/63.jpg";
import img64 from "../assets/images/products/64.jpg";

const data = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
  img56,
  img57,
  img58,
  img59,
  img60,
  img61,
  img62,
  img63,
  img64,
];
export default function Products() {
  return (
    <div className="max-w-[1400px] mx-auto p-5 px-10">
      <div className="grid grid-cols-4 gap-5">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-light shadow-xl rounded-2xl p-3 relative"
            >
              <div>
                {/* <div className="absolute top-5 right-5 left-5 z-10 flex items-center justify-between gap-5">
                  <div className="flex items-center gap-2 bg-light rounded p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-star-fill fill-amber-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>{" "}
                    4.5
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                  </div>
                </div> */}
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={item}
                    alt=""
                    className="hover:scale-110 duration-200 h-40 w-40 md:h-60 md:w-60 object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="my-3">
                <p className="text-primary-dark font-semibold">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
                <p className="text-xs">
                  Lorem ipsum dolor sit, amet consectetur{" "}
                </p>
                {/* <div className="flex justify-between items-center gap-2 mt-8">
                  <p className="text-2xl text-primary-dark">100$</p>
                  <button className="bg-primary text-light p-1 px-5 rounded-2xl">
                    Buy
                  </button>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
