import { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
  
    const[books , setBooks] = useState([]);

    useEffect(()=>{
      fetch("https://mern-server-navy.vercel.app/all-books").then(res =>res.json()).then(data =>setBooks(data.slice(5,12)))
    },[])

  return (
    <div>
        <BookCards books= {books} headline ="Other Books"/>
    </div>
  )
}

export default OtherBooks
