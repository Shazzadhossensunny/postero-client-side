import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CraftItems from "../components/CraftItems";
import Discover from "../components/Discover";
import Featured from "../components/Featured";

export default function Home() {
  const itemsLoad = useLoaderData()
  return (
    <div>
        <Banner></Banner>
        <CraftItems itemsLoad={itemsLoad}></CraftItems>
        <Discover></Discover>
        <Featured></Featured>
    </div>
  )
}
