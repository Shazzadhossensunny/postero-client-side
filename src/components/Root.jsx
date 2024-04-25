import { Outlet } from "react-router-dom";
import Headers from "./Headers";

export default function Root() {
  return (
    <div>
        <Headers></Headers>
        <Outlet></Outlet>
    </div>
  )
}
