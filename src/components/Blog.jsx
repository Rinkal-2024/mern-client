import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';

const Blog = () => {
  const [heart, setHeartClick] = useState(false);

  const handleHeartClick = () => {
    setHeartClick(!heart);
  };

  return (
    <>
    <FaRegHeart className='m-20'
    onClick={handleHeartClick} 
    color={heart ? "red" : "blue"}  >
    
  </FaRegHeart>
    
    </>
  );
}

export default Blog;