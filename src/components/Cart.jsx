// import OrderSummary from "./components/OrderSummary"
// import ProductCard from "./components/ProductCard"
const Cart = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-900 items-center justify-start rounded-xl w-[500px] px-6 py-4 gap-4">
        <h2 className="font-bold text-2xl text-slate-50">Cart</h2>

        <div className="flex flex-col w-full gap-2">
          <label htmlFor="productname" className="text-slate-200 font-semibold">
            Add item
          </label>
          <input
            type="text"
            id="productname"
            name="cart"
            placeholder="Item name"
            className="bg-slate-800 text-slate-50 placeholder:text-slate-400 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button className="mt-2 bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-500">
          Add to Cart
        </button>
      </div>
     {/* <ProductCard  id={product.id} name={product.name} price={product.price} image={product.image} /> */}
     {/* <OrderSummary key={product.id} product={product} /> */}
    </>
  );
};

export default Cart;
