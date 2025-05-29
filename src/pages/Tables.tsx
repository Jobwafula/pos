import React, { useState } from 'react';
import BottomNav from '../components/shared/BottomNav';
import { useNavigate } from 'react-router-dom';

// Define the table type
type Table = {
  id: string;
  number: string;
  status: 'booked' | 'vacant';
  initials: string;
};

function Tables() {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  // Sample table data
  const tables: Table[] = [
    { id: 'TBL001', number: 'Table 1', status: 'booked', initials: 'JD' },
    { id: 'TBL002', number: 'Table 2', status: 'vacant', initials: '' },
    { id: 'TBL003', number: 'Table 3', status: 'booked', initials: 'JS' },
    { id: 'TBL004', number: 'Table 4', status: 'vacant', initials: '' },
    { id: 'TBL005', number: 'Table 5', status: 'booked', initials: 'ED' },
  ];

  // Filter tables based on active tab
  const filteredTables =
    activeTab === 'all'
      ? tables
      : tables.filter((table) => table.status.toLowerCase() === activeTab);

  // Status color mapping
  const statusColors = {
    booked: 'text-red-400 bg-red-400/20',
    vacant: 'text-green-400 bg-green-400/20',
  };

  // Handler for table click
  const handleTableClick = (tableId: string) => {
    navigate('/menu', { state: { tableId } });
  };

  return (
    <section className="h-screen bg-[#1f1f1f] overflow-hidden pb-20">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl text-center text-[#f5f5f5] font-bold tracking-wide">
          Tables
        </h1>
        <div className="flex items-center justify-around gap-4">
          {['all', 'booked', 'vacant'].map((tab) => (
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

      {/* Table Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 max-w-[1280px] mx-auto">
        {filteredTables.length > 0 ? (
          filteredTables.map((table) => (
            <div
              key={table.id}
              onClick={() => handleTableClick(table.id)}
              className="w-[400px] bg-[#262626] p-4 rounded-lg shadow-md hover:bg-[#2f2f2f] hover:scale-105 transition-all duration-200 hover:shadow-lg cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`Table ${table.number}`}
            >
              <div className="flex justify-between items-center gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#f5f5f5] font-semibold text-lg">{table.number}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[table.status]}`}
                    >
                      {table.status}
                    </span>
                  </div>
                  {table.initials && (
                    <p className="text-[#ababab] text-sm mt-2">
                      Initials: {table.initials}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-[#ababab] text-sm">
                    Status: {table.status.charAt(0).toUpperCase() + table.status.slice(1)}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-1 md:col-span-3">
            No tables found for this status.
          </p>
        )}
      </div>

      <BottomNav />
    </section>
  );
}

export default Tables;