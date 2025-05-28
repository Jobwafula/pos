import React from 'react';
import { FiClock } from 'react-icons/fi';

// Define the order type
type Order = {
  id: string;
  table: string;
  items: number;
  amount: number;
  time: string;
  status: 'preparing' | 'served' | 'paid';
};

const OrderList: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  // Sample order data
  const orders: Order[] = [
    { id: '#ORD-1024', table: 'T-05', items: 3, amount: 42.50, time: '2 mins ago', status: 'preparing' },
    { id: '#ORD-1023', table: 'T-12', items: 5, amount: 78.20, time: '10 mins ago', status: 'served' },
    { id: '#ORD-1022', table: 'T-08', items: 2, amount: 32.75, time: '25 mins ago', status: 'paid' },
    { id: '#ORD-1021', table: 'T-03', items: 4, amount: 56.90, time: '42 mins ago', status: 'paid' },
  ];

  // Filter orders based on search query
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.table.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Status color mapping
  const statusColors = {
    preparing: 'text-yellow-500',
    served: 'text-blue-500',
    paid: 'text-green-500'
  };

  return (
    <div className="space-y-3">
      {filteredOrders.map((order) => (
        <div key={order.id} className="flex justify-between items-center p-3 bg-[#1f1f1f] rounded-lg hover:bg-[#252525] transition">
          <div>
            <div className="flex items-center">
              <h3 className="text-[#f5f5f5] font-medium">{order.id}</h3>
              <span className={`ml-2 text-xs px-2 py-1 rounded-full ${statusColors[order.status]}`}>
                {order.status}
              </span>
            </div>
            <p className="text-[#ababab] text-sm">Table {order.table} • {order.items} items</p>
          </div>
          <div className="text-right">
            <p className="text-[#f5f5f5] font-bold">${order.amount.toFixed(2)}</p>
            <div className="flex items-center justify-end text-[#ababab] text-sm">
              <FiClock className="mr-1" size={14} />
              {order.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;