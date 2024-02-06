import HeaderBand from '@/components/header-band';
import ProductCard from '@/components/produce-card';
import React from 'react';

const TopListing = () => {
  const numberOfCards = 10;
  const spaceBetweenColumns = 6; // Adjust the space between columns as needed

  // Calculate the number of rows needed
  const numRows = Math.ceil(numberOfCards / 2);

  return (
    <div className="flex flex-col justify-start items-center">
      <HeaderBand title={"Top Listing near you"} />
      <div className='p-5'>
        {[...Array(numRows)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex">
            {[0, 1].map((colIndex) => {
              const cardIndex = rowIndex * 2 + colIndex;
              return cardIndex < numberOfCards ? (
                <div key={colIndex} className={`p-4 ${colIndex === 0 ? '' : `ml-${spaceBetweenColumns}`}`}>
                  <ProductCard />
                </div>
              ) : null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopListing;