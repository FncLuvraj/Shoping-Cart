import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      {cart.length > 0 ? (
        <div>
          <div className="mb-8 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">Your Cart</h2>
              <h3 className="text-xl font-semibold mt-2">Summary</h3>
              <p className="text-lg mt-2">Total Items: {cart.length}</p>
            </div>

            <div className="text-lg">
              <p className="font-semibold">Total Amount: <span className="text-green-500">${totalAmount.toFixed(2)}</span></p>
              <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <h1 className="text-3xl font-semibold mb-4">Cart Empty</h1>
          <Link to="/">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;