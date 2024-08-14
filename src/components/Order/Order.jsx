import React from "react";

const Order = () => {
  return (
    <div className="order-container bg-white">
      <div className="order-header bg-white flex justify-between items-center px-4 py-2">
        <h1 className="text-2xl font-bold text-black">Order</h1>
        <p className="text-sm text-gray-500">Order ID: 12345</p>
      </div>
      <div className="order-body p-4">
        <div className="order-items mb-4">
          <h2 className="text-xl font-bold mb-2">Order Items</h2>
          <div className="order-items-container border border-gray-200 rounded-lg p-4">
            <div className="order-item flex items-center justify-between border-b border-gray-200 pb-2">
              <div className="order-item-details flex items-center">
                <img
                  src="https://picsum.photos/200/300"
                  alt="order item"
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="order-item-details-text">
                  <h3 className="text-lg font-bold">Order Item Name</h3>
                  <p className="text-sm text-gray-500">$12.99</p>
                </div>
              </div>
              <div className="order-item-quantity text-right">
                <p className="text-sm text-gray-500">Quantity: 1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-summary mb-4">
          <h2 className="text-xl font-bold mb-2">Order Summary</h2>
          <div className="order-summary-container border border-gray-200 rounded-lg p-4">
            <div className="order-summary-item flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-sm text-gray-500">Subtotal</p>
              <p className="text-sm font-bold">$12.99</p>
            </div>
            <div className="order-summary-item flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-sm text-gray-500">Tax</p>
              <p className="text-sm font-bold">$1.99</p>
            </div>
            <div className="order-summary-item flex justify-between items-center border-b border-gray-200 pb-2">
              <p className="text-sm text-gray-500">Delivery Fee</p>
              <p className="text-sm font-bold">$5.99</p>
            </div>
            <div className="order-summary-item flex justify-between items-center pt-2">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">$22.97</p>
            </div>
          </div>
        </div>
        <div className="order-actions">
          <button className="bg-orange-400 text-white px-4 py-2 rounded-lg">
            Make Payment
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg ml-2">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export { Order };
