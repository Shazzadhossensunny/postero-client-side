import { Link } from "react-router-dom";


export default function SingleSubCatgeroyItem({subCategoryItem}) {
    console.log(subCategoryItem)
    const {_id, photo, item, subcategory, description, price, rating, time} = subCategoryItem;
  return (
    <div className="card bg-base-100 shadow-xl">
    <figure ><img className="h-[278px] w-full" src={photo} alt="image" /></figure>
    <div className="p-6 space-y-4">
      <h2 className="card-title">{item}</h2>
      <p>{description}</p>
      <p>Process Time : {time}</p>
      <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">{price}</h3>
          <p className="font-semibold">{rating}</p>
      </div>
      <div className="card-actions">
          <Link to={`/itemDetails/${_id}`} className="w-full">
            <button className="btn btn-block bg-[#ca9234] border-[#ca9234] text-white">View Details</button>
          </Link>
      </div>
    </div>
  </div>
  )
}
