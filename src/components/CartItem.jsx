import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <img className="w-24 h-24 object-cover rounded-md" src={item.image} alt={item.title} />
        <div>
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p className="text-gray-600 mt-1">{item.description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p className="text-xl font-semibold">${item.price}</p>
        <button
          onClick={removeFromCart}
          className="text-red-500 hover:text-red-600 transition duration-300"
        >
          <FcDeleteDatabase size={24} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;