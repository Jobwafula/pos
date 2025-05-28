import React from 'react';

type Dish = {
  id: number;
  name: string;
  image: string;
  available: number;
};

const AllDishes = () => {
  // Sample dish data
  const dishes: Dish[] = [
    { id: 1, name: 'Margherita Pizza', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002', available: 12 },
    { id: 2, name: 'Spaghetti Carbonara', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb', available: 8 },
    { id: 3, name: 'Caesar Salad', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1', available: 15 },
    { id: 4, name: 'Beef Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd', available: 5 },
    { id: 5, name: 'Chocolate Lava Cake', image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e', available: 10 },
  ];

  return (
    <div className="space-y-4">
      {dishes.map((dish) => (
        <div key={dish.id} className="flex items-center p-2 bg-[#1f1f1f] rounded-lg hover:bg-[#252525] transition">
          <div className="w-16 h-16 rounded-lg overflow-hidden mr-3">
            <img 
              src={dish.image} 
              alt={dish.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-[#f5f5f5] font-medium">{dish.name}</h3>
            <p className="text-[#ababab] text-sm">
              <span className={`font-semibold ${dish.available < 5 ? 'text-red-500' : 'text-green-500'}`}>
                {dish.available}
              </span> available
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllDishes;