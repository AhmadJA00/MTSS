import { useTranslation } from "react-i18next";
import "./Languages/i18n";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import MainLayout from "./Components/MainLayout";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Products from "./Pages/Products";
import AboutUs from "./Pages/AboutUs";
import WhyUs from "./Pages/WhyUs";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="products" element={<Products />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="whyUs" element={<WhyUs />} />
    </Route>
  )
);

const App = () => {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  return <RouterProvider router={routes} />;
};

export default App;
