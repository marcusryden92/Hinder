import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="h-screen w-screen flex flex-col justify-between items-center">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
