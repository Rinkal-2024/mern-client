import { useLoaderData } from "react-router-dom"

const SingleBook = () => {
        const {bookTitle, imageURL ,authorName} = useLoaderData();

        console.log(useLoaderData())
  return (
    <div className="mt-28 px-4 lg:px-24">
        <img src= {imageURL} className="h-96"/>
        <h2>Book Title :{bookTitle}</h2>
        <p>Author Name: {authorName}</p>
    </div>
  )
}

export default SingleBook
