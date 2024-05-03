import { useState } from 'react';
import React from 'react';

const StarRating: React.FC<{ id:number,initialRating: number ,fetchData: () => void; }>
 = ({id, initialRating,fetchData }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (newRating: number) => {
    setRating(newRating);
    localStorage.setItem("rating",newRating.toString())
  };

  const submitRate = async () => {
    
    // Fetch data to update average rate and refresh the page
     fetchData();
  };

  return (
   
    <div className=' mt-0'>
        
      {[...Array(10)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span 
            key={index}
            onClick={() => handleStarClick(starValue)}
            style={{
              cursor: 'pointer',
              color: starValue <= rating ? 'gold' : 'gray',
            }}
          >
            &#9733; {/* Star Unicode */}
          </span>
        );
      })}
      <form onSubmit={submitRate}>
      <p className=' mb-0'>Rating: {rating} / 10</p>
      <br />
      <button className='bg-green-600 text-stone-50 border-none rounded-xl p-2 ml-2'
      >submit rate</button>
      </form>
    </div>
  );
};

export default StarRating;