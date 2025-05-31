import { createContext, use, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const ShopContext = createContext();

const ShopContextProvider =(props) =>{

    const currency ='$';
    const delivery_fee = 10;
    const [search,setSearch]= useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId,size) => {

        if(!size){
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if (cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        } 

        setCartItems(cartData);
        toast.success("Added to cart.")

    }
    
    const updateQuantity = async (itemId,size,quality) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quality;

        setCartItems(cartData);
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item]>0){
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
    
        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product._id === itemId);
            if (!itemInfo) continue;
    
            for (const size in cartItems[itemId]) {
                const quantity = cartItems[itemId][size];
                if (quantity > 0) {
                    totalAmount += itemInfo.price * quantity;
                }
            }
        }
    
        return totalAmount;
    };

    

    const value = {
        products,currency,
        delivery_fee,search,
        setSearch,showSearch,
        setShowSearch,cartItems,addToCart,
        getCartCount,updateQuantity,
        getCartAmount,navigate,
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider