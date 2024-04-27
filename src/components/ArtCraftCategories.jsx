import { useEffect, useState } from "react"
import SingleArtCraft from "./SingleArtCraft";


export default function ArtCraftCategories() {
    const [subItems, setSubItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/subitems')
        .then(res => res.json())
        .then(data => {
            setSubItems(data)
        })
    },[])
  return (
    <div className="container mx-auto my-9 lg:my-24">
        <h2 className="text-4xl font-bold text-center mb-9">Art & Craft Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                subItems.map((subItem)=> <SingleArtCraft key={subItem._id} subItem={subItem}></SingleArtCraft>)
            }

        </div>

    </div>
  )
}
