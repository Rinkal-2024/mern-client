import { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
  
    const[books , setBooks] = useState([]);
    const URL = import.meta.env.VITE_BASE_URL;

    useEffect(()=>{
      fetch(`${URL}/all-books`)
      .then(res =>res.json()).then(data =>setBooks(data.slice(5,12)))
    },[])

  return (
    <div>
        <BookCards books= {books} headline ="Other Books"/>
    </div>
  )
}

export default OtherBooks
