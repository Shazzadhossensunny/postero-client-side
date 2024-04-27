import { useForm } from "react-hook-form"
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2"

export default function UpdateItems() {
    const items = useLoaderData()
    const {
        register,
        handleSubmit,
      } = useForm()
      const onSubmit = (data1) => {
        const {photo, item, subcategory, description, price, rating, time} = data1
        fetch(`http://localhost:5000/items/${items._id}`,{
            method: "PUT",
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(data1)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Successfully update user",
                  });

            }
        })
      }
  return (
    <div className="container mx-auto my-9 lg:my-24">
        <h2 className="text-4xl font-bold text-center my-8">Update Art & Craft Item</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2 mx-auto space-y-5">
        <div>
          <p className="mb-3 font-semibold">Image</p>
          <input
            type="text"
            name="photo"
            defaultValue={items.photo}
            placeholder="Photo URL"
            className="input input-bordered w-full"
            {...register("photo")}
          />
        </div>
        <div>
          <p className="mb-3 font-semibold">Item Name</p>
          <input
            type="text"
            name="item"
            defaultValue={items.item}
            placeholder="Item Name"
            className="input input-bordered w-full"
            {...register("item")}
          />
        </div>
        <div>
          <p className="mb-3 font-semibold">Subcategory Name</p>
          <select  {...register("subcategory")} value={items.subcategory} className="select select-bordered w-full">
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
            defaultValue={items.description}
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
            defaultValue={items.price}
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
            defaultValue={items.rating}
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
              defaultChecked={items.Customization === "Yes"}
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
              defaultChecked={items.Customization === "No"}
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
            defaultValue={items.time}
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
              defaultChecked={items.Status === "In Stock"}
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
              defaultChecked={items.Status === "Made to Order"}
              {...register("Status", { required: true })}
            />
            Made to Order
          </label>
        </div>
        <button className="btn btn-block">Update</button>
      </form>

    </div>
  )
}
