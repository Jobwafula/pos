import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import OrderList from './OrderList';

const RecentOrders = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="mt-6 bg-[#1a1a1a] rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#f5f5f5] text-xl font-semibold">Recent Orders</h2>
        <button className="text-[#02ca3a] text-sm font-medium">View All</button>
      </div>
      
      {/* Search Bar */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="text-[#ababab]" />
        </div>
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 bg-[#1f1f1f] border border-[#333] rounded-lg text-[#f5f5f5] focus:outline-none focus:ring-1 focus:ring-[#02ca3a]"
          placeholder="Search orders..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Order List */}
      <OrderList searchQuery={searchQuery} />
    </div>
  );
};

export default RecentOrders;