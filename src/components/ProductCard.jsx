import { Link } from 'react-router';
import Counter from './Counter';
import OrderSummary from './OrderSummary';


const ProductCard=(props)=>{

    const{name,price,image,id}=props;

    return(
        <Link to={`/products/${id}`}>
        <div className=" rounded-lg p-6 shadow-xl justify-center bg-white w-auto">
            <img src={image} alt={name} className="w-[400px] h-auto   rounded-lg "/>
            <h2 className="text-lg font-bold mt-2">{name}</h2>
            <p className="text-md text-gray-600">{price}</p>
            <button className="flex flex-col rounded-lg justify-center  items-center  bg-blue-500">Add To Cart</button>
            {/* <Counter/> */}
         

        </div>
        </Link>
    )
}

export default ProductCard;