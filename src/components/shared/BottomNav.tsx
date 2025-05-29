import React, { useState } from 'react';
import { BiSolidDish } from 'react-icons/bi';
import { FaHome, FaClipboardList, FaUtensils, FaEllipsisH } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from './Modal';

const BottomNav = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [activeTab, setActiveTab] = React.useState('home');
    const navigate = useNavigate();
    const location = useLocation();
    const [personCount, setPersonCount] = useState(1);

    // Check if current route is /tables or /menu
    const isDisabledRoute = ['/tables', '/menu'].includes(location.pathname);

    // Function to handle navigation and active tab state
    const handleNavigation = (tab: string, path: string) => {
        setActiveTab(tab);
        navigate(path);
    };

    // Handlers for increment and decrement
    const handleIncrement = () => setPersonCount((prev) => prev + 1);
    const handleDecrement = () => setPersonCount((prev) => (prev > 1 ? prev - 1 : 1));

    // Handler for creating order
    const handleCreateOrder = () => {
        closeModal();
        navigate('/tables', { state: { customerName, customerPhone, personCount } });
        setActiveTab('tables');
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1f1f1f] shadow-lg z-50">
            <div className="flex justify-around items-center py-3">
                {/* Orders Button */}
                <button
                    onClick={() => handleNavigation('orders', '/orders')}
                    className={`flex flex-col items-center justify-center ${activeTab === 'orders' ? 'text-yellow-500' : 'text-gray-400'}`}
                >
                    <FaClipboardList className="text-xl mb-1" />
                    <span className="text-xs">Orders</span>
                </button>

                {/* Home Button */}
                <button
                    onClick={() => handleNavigation('home', '/')}
                    className={`flex flex-col items-center justify-center ${activeTab === 'home' ? 'text-yellow-500' : 'text-gray-400'}`}
                >
                    <FaHome className="text-xl mb-1" />
                    <span className="text-xs">Home</span>
                </button>

                {/* Tables Button */}
                <button
                    onClick={() => handleNavigation('tables', '/tables')}
                    className={`flex flex-col items-center justify-center ${activeTab === 'tables' ? 'text-yellow-500' : 'text-gray-400'}`}
                >
                    <FaUtensils className="text-xl mb-1" />
                    <span className="text-xs">Tables</span>
                </button>

                {/* More Button */}
                <button
                    onClick={() => handleNavigation('more', '/more')}
                    className={`flex flex-col items-center justify-center ${activeTab === 'more' ? 'text-yellow-500' : 'text-gray-400'}`}
                >
                    <FaEllipsisH className="text-xl mb-1" />
                    <span className="text-xs">More</span>
                </button>

                <button
                    onClick={openModal}
                    className={`absolute bottom-6 bg-[#f6b100] rounded-full p-4 items-center text-[#f5f5f5] ${isDisabledRoute ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#e6a900]'}`}
                    disabled={isDisabledRoute}
                    aria-label="Create Order"
                >
                    <BiSolidDish size={40} />
                </button>
                <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-[#f5f5f5] mb-2">Customer Name</label>
                            <input
                                type="text"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                className="w-full bg-[#333] text-[#f5f5f5] p-2 rounded"
                                placeholder="Enter customer name"
                            />
                        </div>

                        <div>
                            <label className="block text-[#f5f5f5] mb-2">Customer Phone Number</label>
                            <input
                                type="tel"
                                value={customerPhone}
                                onChange={(e) => setCustomerPhone(e.target.value)}
                                className="w-full bg-[#333] text-[#f5f5f5] p-2 rounded"
                                placeholder="Enter phone number"
                            />
                        </div>

                        <div>
                            <label className="block text-[#f5f5f5] mb-2">Number of Persons</label>
                            <div className="flex items-center">
                                <button
                                    onClick={handleDecrement}
                                    className="bg-[#333] text-[#f5f5f5] px-4 py-2 rounded-l"
                                >
                                    -
                                </button>
                                <div className="bg-[#333] text-[#f5f5f5] px-4 py-2">
                                    {personCount}
                                </div>
                                <button
                                    onClick={handleIncrement}
                                    className="bg-[#333] text-[#f5f5f5] px-4 py-2 rounded-r"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleCreateOrder}
                            className="w-full bg-[#f6b100] text-[#1f1f1f] py-3 rounded font-semibold hover:bg-[#e6a900] transition"
                        >
                            Create Order
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default BottomNav;