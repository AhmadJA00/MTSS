import { Link, useLocation } from "react-router";
import logo from "../assets/logo.avif";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const navItems = [
    { title: "home", path: "/", delay: 0 },
    { title: "products", path: "/products", delay: 100 },
    { title: "aboutUs", path: "/aboutUs", delay: 200 },
    { title: "contactUs", path: "/contactUs", delay: 300 },
    { title: "whyUs", path: "/whyUs", delay: 400 },
  ];
  return (
    <nav className="bgMG overflow-hidden px-5">
      <nav className="max-w-[1400px] mx-auto py-2 flex justify-between gap-10 text-light">
        <img
          data-aos="fade-right"
          className="w-40 rounded"
          data-aos-duration={800}
          src={logo}
          alt=""
        />
        <div className="flex items-center gap-4 mt-2">
          {navItems.map((navItem, index) => {
            return (
              <Link
                data-aos="fade-left"
                to={navItem.path}
                data-aos-duration={800}
                data-aos-delay={navItem.delay}
                className="text-xl inset-0 bg-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-200 group"
                key={index}
              >
                {t(`${navItem.title}`)}
                <div className="relative flex items-center justify-center">
                  <hr
                    className={` w-0 h-0 z-20 rounded-full bg-light my-2 ${
                      pathname === navItem.path
                        ? "w-full h-1 my-0"
                        : "group-hover:w-full group-hover:h-1 group-hover:my-0"
                    } duration-300`}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </nav>
  );
}
