import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shop'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const bestProduct = products.filter((item) => item.bestseller);
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]);
    

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text={'BEST'}  text2={'SELLERS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
           Discover what everyone’s loving! These top-rated favorites are tried, tested, and styled by thousands. Shop our most popular pieces before they’re gone.
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem  key={index}
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

export default BestSeller
