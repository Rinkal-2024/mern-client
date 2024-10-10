import { useState } from 'react'
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const UploadBooks = () => {
  const bookCategories = [
    "Fiction", "Science", "Biography", "Non-Fiction", "Historical Fiction", "Novel",
    "computer Science", "Mathematics", "Business", "Arts", "Health", "Sports", "Cooking",
    "Travel", "Religion"
  ]

  const [selectedBookCategories, setSelectedBookCategories] = useState(bookCategories[0]);

  const handleChangeSelectedValues = (event) => {
    setSelectedBookCategories(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
        bookTitle,authorName, imageURL, category, bookDescription, bookPDFURL
    };
    console.log(bookObj)

    const URL = import.meta.env.VITE_BASE_URL;

    fetch(`${URL}/upload-book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookObj)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response data:', data); 
        if (data.insertedId) {
            alert('Book uploaded successfully');
            form.reset();
            setSelectedBookCategories(bookCategories[0]);
        } else {
            alert('Error uploading book');
        }
    })
};

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-6 text-3xl font-bold'>Upload a Book</h2>

      <form onSubmit={handleSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="Book Name" required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" name='authorName' placeholder="Author Name" required />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" type="text" name='imageURL' placeholder="Book image URL" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select id="inputState" name="categoryName" className='w-full rounded' value={selectedBookCategories}
              onChange={handleChangeSelectedValues}>
              {
                bookCategories.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))
              }
            </select>
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Books Description" />
          </div>
          <Textarea id="bookDescription" name="bookDescription" placeholder="write Your Book Description..." required rows={5} />
        </div>

        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Book PDF URL" required/>
      </div>

      <Button type='submit'>Submit
      </Button>


      </form>
    </div>
  )
}

export default UploadBooks
