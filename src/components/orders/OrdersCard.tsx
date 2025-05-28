import React from 'react'

function OrdersCard() {
     const [activeTab, setActiveTab] = useState("all");

  // Sample order data
  const orders = [
    {
      id: "ORD001",
      customer: "John Doe",
      status: "In Progress",
      items: "Burger, Fries",
      total: 15.99,
    },
    {
      id: "ORD002",
      customer: "Jane Smith",
      status: "Ready",
      items: "Pizza, Soda",
      total: 22.5,
    },
    {
      id: "ORD003",
      customer: "Mike Johnson",
      status: "Completed",
      items: "Salad, Juice",
      total: 12.75,
    },
    {
      id: "ORD004",
      customer: "Emily Davis",
      status: "In Progress",
      items: "Pasta, Wine",
      total: 28.0,
    },
    {
      id: "ORD005",
      customer: "Sarah Brown",
      status: "Completed",
      items: "Steak, Mash",
      total: 35.99,
    },
  ];

  // Filter orders based on active tab
  const filteredOrders =
    activeTab === "all"
      ? orders
      : orders.filter((order) => order.status.toLowerCase() === activeTab);

  return (
    <div>
      <div className="grid gap-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {order.id}
                </h3>
                <p className="text-sm text-gray-600">
                  Customer: {order.customer}
                </p>
                <p className="text-sm text-gray-600">Items: {order.items}</p>
                <p className="text-sm text-gray-600">
                  Total: ${order.total.toFixed(2)}
                </p>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === "In Progress"
                    ? "bg-blue-100 text-blue-800"
                    : order.status === "Ready"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {order.status}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No orders found for this status.
          </p>
        )}
      </div> 
    </div>
  )
}

export default OrdersCard
