import { Outlet } from "react-router-dom";
import Headers from "./Headers";
import Footer from "./Footer";

export default function Root() {
  return (
    <div>
        <Headers></Headers>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
