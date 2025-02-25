import SingleCraftItem from "./SingleCraftItem"

export default function CraftItems({itemsLoad}) {

  return (
    <div className="container mx-auto my-9 lg:my-24">
        <h2 className="text-4xl font-bold text-center mb-9">Craft Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 lg:px-0">
       {
        itemsLoad.slice(0, 6).map((items) => <SingleCraftItem key={items._id} items={items}></SingleCraftItem>)
       }
      </div>
    </div>
  )
}
