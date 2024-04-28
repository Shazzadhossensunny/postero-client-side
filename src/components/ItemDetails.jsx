import { useLoaderData } from "react-router-dom";

export default function ItemDetails() {
  const items = useLoaderData();
  const {
    photo,
    item,
    Customization,
    Status,
    description,
    price,
    rating,
    subcategory,
    time,
  } = items;
  return (
    <div className="container mx-auto my-9 lg:my-24 px-3 lg:px-0">
      <div className="space-y-5">
        <div>
          <img src={photo} alt="" className="w-full h-full md:h-[500px]" />
        </div>
        <h2 className="text-3xl font-bold">{item}</h2>
        <h3 className="text-2xl font-semibold">{subcategory}</h3>
        <p>{description}</p>
        <h4 className="text-2xl font-semibold">{price}</h4>
        <div className="space-y-5">
          <p className="font-semibold">Rating : {rating}</p>
          <p className="font-semibold">Time : {time}</p>
          <p className="font-semibold">Customization : {Customization}</p>
          <p className="font-semibold">Status : {Status}</p>
        </div>
      </div>
    </div>
  );
}
