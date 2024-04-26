import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/AuthContextComponent"


export default function MyArtCraftList() {

  const {user} = useContext(AuthContext) || {};
  const [userItems, setUserItems] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/myProduct/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setUserItems(data)
    })
  },[user])



  return (
    <div>MyArtCraftList</div>
  )
}
