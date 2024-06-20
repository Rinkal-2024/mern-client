import { useEffect, useState } from "react"
import { Card } from "flowbite-react";

const Shop = () => {
  const[books , setBooks] = useState([]);

  useEffect(() =>{
      fetch('https://mern-server-navy.vercel.app/all-books').then(res=>res.json()).then(data=>setBooks(data))
  },[])
  return (
    <div className="mt-28 px-4 lg:px-24">
        <h2 className="text-5xl font-bold text-center">All Books are Here</h2>
        <div className="grid gap-8 my-12 lg:grid-col-4 sm:grid-cols-2 md:grid-cols-4 grid-cols-1">
          {
            books.map(book =><Card>
              <img src={book.imageURL} className="h-96"/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                  {book.bookTitle}
                </p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
              <button className="bg-blue-700 font-semibold text-white py-2 rounded">Buy Now</button>
            </Card>)
          }   
        </div>
    </div>
  )
}

export default Shop
