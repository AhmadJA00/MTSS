import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

export default function MainLayout() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    Aos.init();
  }, [pathname]);
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
