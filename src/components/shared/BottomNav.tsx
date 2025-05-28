import React from 'react';
import { FaHome, FaClipboardList, FaUtensils, FaEllipsisH } from 'react-icons/fa';

const BottomNav = () => {
  const [activeTab, setActiveTab] = React.useState('home');

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1f1f1f] shadow-lg z-50">
      <div className="flex justify-around items-center py-3">
        {/* Orders Button */}
        <button
          onClick={() => setActiveTab('orders')}
          className={`flex flex-col items-center justify-center ${activeTab === 'orders' ? 'text-yellow-500' : 'text-gray-400'}`}
        >
          <FaClipboardList className="text-xl mb-1" />
          <span className="text-xs">Orders</span>
        </button>

        {/* Home Button */}
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center justify-center ${activeTab === 'home' ? 'text-yellow-500' : 'text-gray-400'}`}
        >
          <FaHome className="text-xl mb-1" />
          <span className="text-xs">Home</span>
        </button>

        {/* Tables Button */}
        <button
          onClick={() => setActiveTab('tables')}
          className={`flex flex-col items-center justify-center ${activeTab === 'tables' ? 'text-yellow-500' : 'text-gray-400'}`}
        >
          <FaUtensils className="text-xl mb-1" />
          <span className="text-xs">Tables</span>
        </button>

        {/* More Button */}
        <button
          onClick={() => setActiveTab('more')}
          className={`flex flex-col items-center justify-center ${activeTab === 'more' ? 'text-yellow-500' : 'text-gray-400'}`}
        >
          <FaEllipsisH className="text-xl mb-1" />
          <span className="text-xs">More</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;