import { Link } from "react-router-dom";

export default function SingleArtCraft({ subItem }) {
  const { _id, photo, subcategory, origins, key_elements } = subItem;
  return (
    <Link to={`/artCraftSubCategory/${subcategory}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-[278px] w-full" src={photo} alt="image" />
        </figure>
        <div className="p-6 space-y-4">
          <h2 className="card-title">{subcategory}</h2>
          <h3 className="font-semibold">Origins : {origins}</h3>
          <p className="font-semibold">Key Elements : {key_elements}</p>
        </div>
      </div>
    </Link>
  );
}
