import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import { fetchProducts } from '../features/actions/productAction';
// import { decrementStock } from '../features/products/productSlice';
import ProductCard from "../components/ProductCard"
const ProductList = () => {
  const products = useSelector((state) => state.products?.productData);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // dispatch(addOrder({ ...product, status: 'pending' }));
    // dispatch(decrementStock({ id: product.id, quantity: 1 }));
  };
  useEffect(() => {
    dispatch(fetchProducts());

}, [dispatch])
console.log("products",products)
  return (
    <div className="grid grid-cols-2 gap-4">
      
      {products && products?.data?.map((product) => (
        <ProductCard product={product}/>
      ))}
    </div>
  );
};

export default ProductList;
