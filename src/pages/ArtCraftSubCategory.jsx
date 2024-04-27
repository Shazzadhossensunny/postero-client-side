import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SingleSubCatgeroyItem from "../components/SingleSubCatgeroyItem";


export default function ArtCraftSubCategory() {
    const {subcategory} = useParams()
    const [subCategoryItems, setSubCategoryItems] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/subcategory/${subcategory}`)
        .then(res => res.json())
        .then(data => {
            setSubCategoryItems(data)
        })

    },[subcategory])
  return (
    <div className="container mx-auto my-9 lg:my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            subCategoryItems.map((subCategoryItem) => <SingleSubCatgeroyItem key={subCategoryItem._id} subCategoryItem={subCategoryItem}></SingleSubCatgeroyItem>)
          }
      </div>

    </div>
  )
}
