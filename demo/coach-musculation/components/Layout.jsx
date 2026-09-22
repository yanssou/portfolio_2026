import { Outlet } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
