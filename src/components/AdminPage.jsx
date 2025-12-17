import { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const productData = {
            name,
            price: parseInt(price),
            image
        };

        const response = await axios.post('http://localhost:3000/products', productData);
        
        alert('Product added successfully!');
        setName('');
        setPrice('');
        setImage('');
        setLoading(false);
    };

    return (
        <>
            <div className="flex flex-col mt-40 ml-130 rounded-xl bg-gray-400 shadow-2xl h-[500px] w-[500px] py-20 flex justify-center">
                <h1 className="flex mb-5 justify-center mt-1 text-3xl mb-6 font-bold">Add Product</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                    <input 
                        type="text" 
                        placeholder="Product Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-2 rounded-lg text-lg hover:bg-slate-400 border-black mb-3 mx-7 p-5 w-80"
                        required
                        disabled={loading}
                    />
                    <input 
                        type="number" 
                        placeholder="Product Price" 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="border-2 rounded-lg text-lg hover:bg-slate-400 border-black mb-3 mx-7 p-5 w-80"
                        required
                        disabled={loading}
                    />
                    <input 
                        type="text" 
                        placeholder="Product Image URL" 
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="border-2 rounded-lg text-lg hover:bg-slate-400 border-black mb-6 mx-7 p-5 w-80"
                        required
                        disabled={loading}
                    />
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white mb-3 mx-20 font-bold p-5 rounded-lg w-48"
                    >
                        {loading ? 'Adding...' : 'Add Product'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default AdminPage;
