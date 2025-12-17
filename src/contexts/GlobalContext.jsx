import {createContext,useState,useEffect} from "react";
import { toast } from 'react-toastify';

const GlobalContext=createContext();

export const GlobalProvider=(props)=>{
    const{children}=props;
    const[currentPage,setCurrentPage]=useState(1);
    const[cartItems,setCartItems]=useState(() => {
        const saved = localStorage.getItem('cartItems');
        return saved ? JSON.parse(saved) : [];
    });
    const[showCheckout,setShowCheckout]=useState(false);
    const[orders,setOrders]=useState(() => {
        const saved = localStorage.getItem('orders');
        return saved ? JSON.parse(saved) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);
    
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
    
    const addToCart = (product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                toast.success('Product quantity updated in cart!');
                return prev.map(item => 
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            toast.success('Product added to cart successfully!');
            return [...prev, { ...product, quantity: 1 }];
        });
    };
    
    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return;
        setCartItems(prev => prev.map(item => 
            item.id === id ? { ...item, quantity } : item
        ));
    };
    
    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
        toast.success('Product removed from cart!');
    };
    
    const placeOrder = (customerDetails) => {
        const order = {
            id: Date.now(),
            items: cartItems,
            customerDetails,
            total: cartItems.reduce((sum, item) => {
                const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^0-9.-]+/g, '')) : parseFloat(item.price) || 0;
                return sum + (price * item.quantity);
            }, 0),
            date: new Date().toISOString()
        };
        setOrders(prev => [...prev, order]);
        setCartItems([]);
        toast.success('Order placed successfully!');
    };
    
    const cancelOrder = (orderId) => {
        setOrders(prev => prev.filter(order => order.id !== orderId));
        toast.success('Order cancelled successfully!');
    };
    
    return (
        <GlobalContext.Provider value={{currentPage,setCurrentPage,cartItems,addToCart,updateQuantity,removeFromCart,showCheckout,setShowCheckout,orders,placeOrder,cancelOrder}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContext;