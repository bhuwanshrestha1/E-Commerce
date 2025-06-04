import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shop'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const [latestProducts, setLatestProducts] = useState([]);

    const {products} = useContext(ShopContext);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])

    
  return (
    <div className='my-10 '>
        <div className='text-center py-8 text-3xl'>
            <Title text={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Step into the season with our newest arrivals. From everyday essentials to standout styles, explore fresh looks designed to elevate your wardrobe.
            </p>
        </div>
      
    {/* Rendering Products */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
        {
            latestProducts.map((item,index)=>(
                <ProductItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    />
            ))
        }
    </div>
    </div>
  )
}

export default LatestCollection
