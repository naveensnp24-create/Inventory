import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import OrderSummary from "./OrderSummary";
import axios from "axios"

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace with your deployed backend URL
        const apiUrl = import.meta.env.VITE_API_URL || 'https://your-backend-url.railway.app';
        const res = await axios.get(`${apiUrl}/products`);
        console.log('API Response:', res.data);
        setProducts(res.data || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products from database');
        setProducts([]); // Ensure no fallback data
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex-col flex pb-100 bg-black">
        <div className="text-white text-center p-8">Loading products from database...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-col flex pb-100 bg-black">
        <div className="text-red-500 text-center p-8">
          <p>{error}</p>
          <p>Make sure your backend is running and database is connected.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-col flex pb-100 bg-black">
      <div className="mx-auto my-auto mt-4 mb-4 gap-4 bg-black flex justify-center items-start flex-wrap">
        {products.length === 0 ? (
          <div className="text-white text-center p-8">
            <p>No products found in database</p>
            <p>Add some products using the Add Products page</p>
          </div>
        ) : (
          products.map((product) => (
            <div key={product._id || product.id} className="flex flex-col gap-4">
              <ProductCard id={product._id || product.id} name={product.name} price={product.price} image={product.image} />
              <OrderSummary key={product._id || product.id} product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
