import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function MyCart({ items, userItems, setUserItems }) {
  const { _id, photo, item, price, rating, Customization, Status } = items;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/items/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = userItems.filter((i)=> i._id !== id)
              setUserItems(remaining)
            }
          });
      }
    });
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="relative">
        <img className="h-[278px] w-full" src={photo} alt="image" />
        <p className="font-semibold absolute top-4 left-4 badge badge-neutral">
          {Status}
        </p>
      </figure>
      <div className="p-6 space-y-4">
        <h2 className="card-title">{item}</h2>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Customization : {Customization}</h3>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">{price}</h3>
          <p className="font-semibold">Rating : {rating}</p>
        </div>
        <div className="flex justify-between">
          <Link to={`/updateItems/${_id}`}>
            <button className="btn bg-[#ca9234] border-[#ca9234] text-white">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-error text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
