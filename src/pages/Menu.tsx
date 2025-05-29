import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BottomNav from '../components/shared/BottomNav';

// Define the menu item type
type MenuItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  stock: number;
};

// Define cart item type
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

function Menu() {
  const location = useLocation();
  const { tableId, customerName = 'Unknown', customerPhone = 'N/A', personCount = 1 } = location.state || {};

  // Sample menu item data
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: 'ITEM001',
      name: 'Margherita Pizza',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a680',
      price: 12.99,
      stock: 10,
    },
    {
      id: 'ITEM002',
      name: 'Caesar Salad',
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
      price: 8.99,
      stock: 15,
    },
    {
      id: 'ITEM003',
      name: 'Grilled Chicken Sandwich',
      image: 'https://images.unsplash.com/photo-1528736235302-52922d02c842',
      price: 10.49,
      stock: 8,
    },
    {
      id: 'ITEM004',
      name: 'Chocolate Lava Cake',
      image: 'https://images.unsplash.com/photo-1611348586804-4067de2a307a',
      price: 6.99,
      stock: 5,
    },
  ]);

  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to cart
  const handleAddToCart = (item: MenuItem) => {
    if (item.stock > 0) {
      setCart((prev) => {
        const existingItem = prev.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
          return prev.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        }
        return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
      });
      setMenuItems((prev) =>
        prev.map((menuItem) =>
          menuItem.id === item.id ? { ...menuItem, stock: menuItem.stock - 1 } : menuItem
        )
      );
    }
  };

  // Remove item from cart
  const handleRemoveFromCart = (itemId: string) => {
    let itemRemoved = false;
    setCart((prev) =>
      prev
        .map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => {
          if (cartItem.id === itemId && cartItem.quantity === 0) {
            itemRemoved = true;
            return false;
          }
          return true;
        })
    );
    if (itemRemoved) {
      setMenuItems((prev) =>
        prev.map((menuItem) =>
          menuItem.id === itemId ? { ...menuItem, stock: menuItem.stock + 1 } : menuItem
        )
      );
    }
  };

  // Calculate bill
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxRate = 0.08; // 8% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  // Print receipt (simulated)
  const handlePrintReceipt = () => {
    const receipt = `
      Receipt for Table ${tableId}
      Customer: ${customerName}
      Phone: ${customerPhone}
      Persons: ${personCount}
      -----------------------
      Items:
      ${cart
        .map((item) => `${item.name} x${item.quantity}: $${(item.price * item.quantity).toFixed(2)}`)
        .join('\n')}
      -----------------------
      Subtotal: $${subtotal.toFixed(2)}
      Tax (8%): $${tax.toFixed(2)}
      Total: $${total.toFixed(2)}
    `;
    console.log(receipt);
    alert('Receipt printed to console (check developer tools).');
    // Integrate a printing library like react-to-print for actual printing
  };

  // Place order (simulated)
  const handlePlaceOrder = () => {
    const orderDetails = {
      tableId,
      customerName,
      customerPhone,
      personCount,
      items: cart,
      bill: { subtotal, tax, total },
    };
    console.log('Order placed:', orderDetails);
    alert('Order placed successfully (check console for details).');
    setCart([]); // Clear cart after placing order
    setMenuItems((prev) =>
      prev.map((menuItem) => ({
        ...menuItem,
        stock: menuItem.stock + (cart.find((item) => item.id === menuItem.id)?.quantity || 0),
      }))
    );
  };

  return (
    <section className="h-screen bg-[#1f1f1f] overflow-hidden pb-20">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl text-center text-[#f5f5f5] font-bold tracking-wide">
          Menu for Table {tableId}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 px-8 max-w-[1280px] mx-auto h-[calc(100vh-120px)]">
        {/* Left Div: Menu Items */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
          {menuItems.length > 0 ? (
            menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#262626] rounded-lg shadow-md hover:bg-[#2f2f2f] hover:scale-105 transition-all duration-200 hover:shadow-lg cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Menu item ${item.name}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-[#f5f5f5] font-semibold text-lg">{item.name}</h3>
                  <p className="text-[#ababab] text-sm mt-1">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <p className="text-[#ababab] text-sm mt-1">
                    Stock: {item.stock} {item.stock === 1 ? 'item' : 'items'} available
                  </p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`mt-4 w-full py-2 rounded-lg font-semibold text-[#1f1f1f] ${
                      item.stock > 0
                        ? 'bg-[#f6b100] hover:bg-[#e6a900]'
                        : 'bg-[#4a4a4a] cursor-not-allowed'
                    }`}
                    disabled={item.stock === 0}
                  >
                    {item.stock > 0 ? 'Add to Order' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-[#ababab] col-span-1 sm:col-span-2 lg:col-span-3">
              No menu items available.
            </p>
          )}
        </div>

        {/* Right Div: Customer Info, Cart, and Bill */}
        <div className="md:w-1/3 bg-[#262626] rounded-lg p-6 flex flex-col gap-6 h-fit md:h-[calc(100vh-180px)] sticky top-0">
          {/* Customer Info */}
          <div>
            <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">Customer Information</h2>
            <p className="text-[#ababab] text-sm">Name: {customerName}</p>
            <p className="text-[#ababab] text-sm">Phone: {customerPhone}</p>
            <p className="text-[#ababab] text-sm">Persons: {personCount}</p>
          </div>

          {/* Cart */}
          <div>
            <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">Cart</h2>
            {cart.length > 0 ? (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="text-[#f5f5f5] text-sm">{item.name}</p>
                      <p className="text-[#ababab] text-xs">
                        ${item.price.toFixed(2)} x {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="bg-[#333] text-[#f5f5f5] px-2 py-1 rounded"
                      >
                        -
                      </button>
                      <span className="text-[#f5f5f5]">{item.quantity}</span>
                      <button
                        onClick={() => handleAddToCart(menuItems.find((m) => m.id === item.id)!)}
                        className="bg-[#333] text-[#f5f5f5] px-2 py-1 rounded"
                        disabled={!menuItems.find((m) => m.id === item.id)?.stock}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#ababab] text-sm">Cart is empty.</p>
            )}
          </div>

          {/* Bill */}
          <div>
            <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">Bill</h2>
            <p className="text-[#ababab] text-sm">Subtotal: ${subtotal.toFixed(2)}</p>
            <p className="text-[#ababab] text-sm">Tax (8%): ${tax.toFixed(2)}</p>
            <p className="text-[#f5f5f5] font-semibold text-sm mt-2">
              Total: ${total.toFixed(2)}
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <button
              onClick={handlePrintReceipt}
              className="w-full bg-[#f6b100] text-[#1f1f1f] py-3 rounded-lg font-semibold hover:bg-[#e6a900] transition disabled:bg-[#4a4a4a] disabled:cursor-not-allowed"
              disabled={cart.length === 0}
            >
              Print Receipt (Cash)
            </button>
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-[#f6b100] text-[#1f1f1f] py-3 rounded-lg font-semibold hover:bg-[#e6a900] transition disabled:bg-[#4a4a4a] disabled:cursor-not-allowed"
              disabled={cart.length === 0}
            >
              Place Order (Online)
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </section>
  );
}

export default Menu;