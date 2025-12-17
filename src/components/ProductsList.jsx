import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import OrderSummary from "./OrderSummary";
import axios from "axios"

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/products");
      setProducts(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex-col flex pb-100 bg-black">
      <div className="mx-auto my-auto mt-4 mb-4 gap-4 bg-black flex justify-center items-start flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-4">
            <ProductCard  id={product.id} name={product.name} price={product.price} image={product.image} />
            {/* <OrderSummary key={product.id} product={product} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
