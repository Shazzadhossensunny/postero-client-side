
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthContextComponent";
import Swal from 'sweetalert2'

export default function AddCraftItem() {
  const {user} = useContext(AuthContext)

  const { register, handleSubmit } = useForm();

  const onSubmit = (data1) => {
    const { photo, item, subcategory, description, price, rating, time} =
      data1;
      data1.displayName = user.displayName
      data1.email = user.email
     fetch('http://localhost:5000/items',{

     method: "POST",
      headers:{
        'content-Type': 'application/json',
      },
      body: JSON.stringify(data1)

     })
     .then(res => res.json())
     .then(data => {
      if(data.insertedId){
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Successfully add user",
        });

      }
     })
  };
  return (
    <div className="container mx-auto my-12 px-3 lg:px-0">
      <h2 className="text-4xl font-bold text-center my-8">Add Craft Item</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/2 mx-auto space-y-5"
      >
        <div>
          <p className="mb-3 font-semibold">Name</p>
          <input
            type="text"
            name="displayName"
            defaultValue={user?.displayName || ""}
            placeholder="Name"
            className="input input-bordered w-full"
            {...register("displayName")}
            readOnly
          />
        </div>
        <div>
          <p className="mb-3 font-semibold">Email</p>
          <input
            type="email"
            name="email"
            defaultValue={user?.email || ""}
            placeholder="Email"
            className="input input-bordered w-full"
            {...register("email")}
            readOnly
          />
        </div>
        <div>
          <p className="mb-3 font-semibold">Image URL</p>
          <input
            type="text"
            name="photo"
            placeholder="Image URL"
            className="input input-bordered w-full"
            {...register("photo")}
          />
        </div>
        <div>
          <p className="mb-3 font-semibold">Item Name</p>
          <input
            type="text"
            name="item"
            placeholder="Item Name"
            className="input input-bordered w-full"
            {...register("item")}
          />
        </div>
        <div>
          <p className="mb-3 font-semibold">Subcategory Name</p>
          <select  {...register("subcategory")} className="select select-bordered w-full">
            <option disabled selected>Subcategory Name</option>
            <option value="Landscape Painting">Landscape Painting</option>
            <option value="Portrait Drawing">Portrait Drawing</option>
            <option value="Watercolor Painting">Watercolor Painting</option>
            <option value="Oil Painting">Oil Painting</option>
            <option value="Charcoal Sketching">Charcoal Sketching</option>
            <option value="Cartoon Drawing">Cartoon Drawing</option>
          </select>
        </div>
        <div>
          <p className="mb-3 font-semibold">Short Description</p>
          <input
            type="text"
            name="description"
            placeholder="Short Description"
            className="input input-bordered w-full"
            {...register("description")}
          />
        </div>
        <div>
          <p className="mb-3 font-semibold">Price</p>
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="input input-bordered w-full"
            {...register("price")}
          />
        </div>
        <div>
          <p className="mb-3 font-semibold">Rating</p>
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            className="input input-bordered w-full"
            {...register("rating")}
          />
        </div>
        <div className="space-x-5">
          <span className="mb-3 font-semibold">Customization</span>
          <label htmlFor="yes">
            <input
              className="mr-2"
              type="radio"
              name="customization"
              value="Yes"
              id="yes"
              {...register("Customization", { required: true })}
            />
            Yes
          </label>
          <label htmlFor="no">
            <input
              className="mr-2"
              type="radio"
              name="customization"
              value="No"
              id="no"
              {...register("Customization", { required: true })}
            />
            No
          </label>
        </div>
        <div>
          <p className="mb-3 font-semibold">Processing Time</p>
          <input
            type="text"
            name="time"
            placeholder="Processing Time"
            className="input input-bordered w-full"
            {...register("time")}
          />
        </div>
        <div className="space-x-5">
          <span className="mb-3 font-semibold">Stock Status</span>
          <label htmlFor="stock">
            <input
              className="mr-2"
              type="radio"
              name="status"
              value="In Stock"
              id="stock"
              {...register("Status", { required: true })}
            />
            In Stock
          </label>
          <label htmlFor="order">
            <input
              className="mr-2"
              type="radio"
              name="status"
              value="Made to Order"
              id="order"
              {...register("Status", { required: true })}
            />
            Made to Order
          </label>
        </div>
        <button className="btn btn-block">Add</button>
      </form>
    </div>
  );
}
