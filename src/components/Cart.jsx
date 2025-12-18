const Cart=()=>{
    return (
        <>
        <div className="flex flex-row bg-red-500 justify-center  h-100 rounded-xl  w-[500px]">
            <h2 className="font-bold mt-2 mb-10 text-2xl">Cart</h2>
            <input type="text" id="productname" name="cart" placeholder="item name" className="flex flex-col bg-blue-800 py-10"/>


        </div>
        
        </>
    )
}
export default Cart;