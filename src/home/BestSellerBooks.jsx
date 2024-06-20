import { useEffect, useState } from "react"
import BookCards from "../components/BookCards";

const BestSellerBooks = () => {

    const[books , setBooks] = useState([]);

    useEffect(()=>{
      fetch("https://mern-server-navy.vercel.app/all-books").then(res =>res.json()).then(data =>setBooks(data.slice(1,7)))
    },[])

  return (
    <div>
        <BookCards books= {books} headline ="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks