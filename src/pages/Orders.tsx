import React, { useState } from 'react';
import { FiClock } from 'react-icons/fi';
import BottomNav from '../components/shared/BottomNav';

// Define the order type
type Order = {
  id: string;
  table: string;
  items: number;
  amount: number;
  time: string;
  status: 'preparing' | 'served' | 'paid';
};

function Orders() {
  const [activeTab, setActiveTab] = useState('all');

  // Sample order data
  const orders: Order[] = [
    { id: '#ORD-1024', table: 'T-05', items: 3, amount: 42.50, time: '2 mins ago', status: 'preparing' },
    { id: '#ORD-1023', table: 'T-12', items: 5, amount: 78.20, time: '10 mins ago', status: 'served' },
    { id: '#ORD-1022', table: 'T-08', items: 2, amount: 32.75, time: '25 mins ago', status: 'paid' },
    { id: '#ORD-1021', table: 'T-03', items: 4, amount: 56.90, time: '42 mins ago', status: 'preparing' },
    { id: '#ORD-1020', table: 'T-01', items: 6, amount: 65.00, time: '1 hour ago', status: 'paid' },
  ];

  // Filter orders based on active tab
  const filteredOrders =
    activeTab === 'all'
      ? orders
      : orders.filter((order) => order.status.toLowerCase() === activeTab);

  // Status color mapping
  const statusColors = {
    preparing: 'text-yellow-500 bg-yellow-500/10',
    served: 'text-blue-500 bg-blue-500/10',
    paid: 'text-green-500 bg-green-500/10',
  };

  return (
    <section className="h-screen bg-[#1f1f1f] overflow-hidden">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl text-center text-[#f5f5f5] font-bold tracking-wide">
          Orders
        </h1>
        <div className="flex items-center justify-around gap-4">
          {['all', 'preparing', 'served', 'paid'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-[#ababab] text-lg ${
                activeTab === tab
                  ? 'bg-[#383838] rounded-lg px-4 py-2 font-semibold'
                  : 'text- hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Order Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="w-[400px] bg-[#262626] p-4 rounded-lg shadow-md hover:bg-[#2f2f2f] transition-all duration-200 hover:shadow-lg cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-[#f5f5f5] font-semibold text-lg">{order.id}</h3>
                    <span
                      className={`ml-2 text-xs px-2 py-1 rounded-full font-medium ${statusColors[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-[#ababab] text-sm mt-1">
                    Table {order.table} • {order.items} items
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[#f5f5f5] font-bold text-lg">
                    ${order.amount.toFixed(2)}
                  </p>
                  <div className="flex items-center justify-end text-[#ababab] text-sm mt-1">
                    <FiClock className="mr-1" size={14} />
                    {order.time}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-1 md:col-span-3">
            No orders found for this status.
          </p>
        )}
      </div>

      <BottomNav />
    </section>
  );
}

export default Orders;