import { Link, useLoaderData } from "react-router-dom";


export default function AllArtCraftItems() {
  const loadItems = useLoaderData();
  return (
    <div className="container mx-auto my-9 lg:my-24">

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Item Name</th>
                <th>Subcategory</th>
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {loadItems.map((items, index) => (
                <tr key={items._id}>
                  <td>{index + 1}</td>
                  <td>{items.item}</td>
                  <td>{items.subcategory}</td>
                  <td>{items.price}</td>
                  <td className="text-center">
                    <Link to={`/itemDetails/${items._id}`}>
                     <button className="btn bg-[#ca9234] border-[#ca9234] text-white">View Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

    </div>
  );
}
