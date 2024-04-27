import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContextComponent";
import MyCart from "../components/MyCart";

export default function MyArtCraftList() {
  const { user } = useContext(AuthContext) || {};
  const [userItems, setUserItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myProduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserItems(data);
      });
  }, [user]);

  return (
    <div className="container mx-auto my-9 lg:my-24">
      <div className="flex justify-end mb-8">
        <select className="select select-warning">
          <option disabled selected>
            Customization
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userItems.map((items) => (
          <MyCart
            key={items._id}
            items={items}
            userItems={userItems}
            setUserItems={setUserItems}
          ></MyCart>
        ))}
      </div>
    </div>
  );
}
