import React from 'react';
const serverURL = 'http://localhost:3000';

// import image from "../../../my-express-project-oms/src/config/uploads"
const ProductCard = ({ product }) => {
    console.log("product product?.images[0]",product?.images[0])
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={`${serverURL}${product?.images[0]}`}
          alt={product?.name}
          className="w-full h-60 object-cover"
        />
        {product.isOnSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
