import { Button, Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import {Link} from'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const URL = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    fetch(`${URL}/all-books`)
      .then(response => response.json())
      .then(data => setAllBooks(data));
  },[]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`${URL}/book/${id}`,{
      method : 'DELETE',
    }).then(response => response.json()).then(data =>{
      alert('Book deleted successfully')
      setAllBooks(allBooks.filter(book => book._id!== id))
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-6 text-3xl font-bold'>Manage Your Books</h2>

      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => (
              <Table.Body className="divide-y" key={book._id} >
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {book.bookTitle}
                </Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell> 100/-</Table.Cell>
                <Table.Cell>
                
                <Link 
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 "
                to={`/admin/dashboard/edit-books/${book._id}`} >Edit
                </Link>
                <Button onClick={()=>handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-400'>Delete</Button>
                </Table.Cell>
              </Table.Row>
              </Table.Body>
            ))
          }
      </Table>

    </div>
  );
}

export default ManageBooks;
