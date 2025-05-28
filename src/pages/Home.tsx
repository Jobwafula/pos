import React from 'react';
import { FiClock, FiDollarSign, FiUsers, FiPieChart } from 'react-icons/fi';
import Greetings from '../components/home/Greetings';
import BottomNav from '../components/shared/BottomNav';
import MiniCard from '../components/home/MiniCard';
import { BsCashCoin } from 'react-icons/bs';
import { GrInProgress } from 'react-icons/gr';
import RecentOrders from '../components/home/RecentOrders';
import PopularDishes from '../components/home/PopularDishes';

const Home = () => {
  return (
    <section className="flex gap-3  bg-[#1f1f1f] ">
    {/* left div */}
      <div className=" flex-[3] p-4 shadow-md">
        <Greetings />
        <div className='flex items-center w-full gap-3'>
            <MiniCard title="Total Earnings" icon={<BsCashCoin /> } number={512} footerNum={1.6} />
             <MiniCard title="In Progress" icon={<GrInProgress /> } number={16} footerNum={3.6} />
        </div>
        <RecentOrders />
        </div>
      {/* Right Section - Main Content */}
      <div className="flex-[2] bg-blue-700">
        <PopularDishes />
        
      </div>

      <BottomNav />
    </section>
    
  );
};

export default Home;