import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContextComponent";
import MyCart from "../components/MyCart";

export default function MyArtCraftList() {
  const { user } = useContext(AuthContext) || {};
  const [userItems, setUserItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myProduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserItems(data);
        setDisplayItems(data);
      });
  }, [user]);

  const handleOnChange = (filter) => {
    if (filter === "all") {
      setDisplayItems(userItems);
    } else if (filter === "yes") {
      const remaining = userItems.filter((item) => item.Customization === "Yes");
      setDisplayItems(remaining);
    } else if (filter === "no") {
      const remaining = userItems.filter((item) => item.Customization === "No");
      setDisplayItems(remaining);
    }
  };

  return (
    <div className="container mx-auto my-9 lg:my-24">
      <div className="flex justify-end mb-8">
        <details className="dropdown">
          <summary className="m-1 btn">Filter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=>handleOnChange('all')}>
              <a>All</a>
            </li>
            <li onClick={()=>handleOnChange('yes')}>
              <a>Yes</a>
            </li>
            <li onClick={()=>handleOnChange('no')}>
              <a>No</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((items) => (
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
