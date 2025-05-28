import React from 'react';
import AllDishes from './AllDishes';

const PopularDishes = () => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#f5f5f5] text-xl font-semibold">Popular Dishes</h2>
        <button className="text-[#02ca3a] text-sm font-medium">View All</button>
      </div>
      
      <AllDishes />
    </div>
  );
};

export default PopularDishes;