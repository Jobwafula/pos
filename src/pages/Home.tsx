import { useTheme } from '../context/ThemeContext';
import Greetings from '../components/home/Greetings';
import BottomNav from '../components/shared/BottomNav';
import MiniCard from '../components/home/MiniCard';
import { BsCashCoin, BsSun, BsMoon } from 'react-icons/bs';
import { GrInProgress } from 'react-icons/gr';
import RecentOrders from '../components/home/RecentOrders';
import PopularDishes from '../components/home/PopularDishes';

const Home = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <section 
      className={`flex gap-3 min-h-screen ${
        isDarkMode ? 'bg-[#1f1f1f] text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      {/* Left Div */}
      <div className="flex-[3] p-4 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <Greetings />
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500"
          >
            {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </div>

        <div className="flex items-center w-full gap-3">
          <MiniCard 
            title="Total Earnings" 
            icon={<BsCashCoin />} 
            number={512} 
            footerNum={1.6} 
            darkMode={isDarkMode}
          />
          <MiniCard 
            title="In Progress" 
            icon={<GrInProgress />} 
            number={16} 
            footerNum={3.6} 
            darkMode={isDarkMode}
          />
        </div>
        <RecentOrders darkMode={isDarkMode} />
      </div>

      {/* Right Section - Main Content */}
      <div className={`flex-[2] ${isDarkMode ? 'bg-[#2a2a2a]' : 'bg-blue-700'}`}>
        <PopularDishes darkMode={isDarkMode} />
      </div>

      <BottomNav darkMode={isDarkMode} />
    </section>
  );
};

export default Home;