import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>We’re more than a clothing store — we’re a fashion experience. Our mission is to bring affordable, high-quality apparel to people who value comfort and creativity.</p>
          <p>We’re committed to sustainable practices and ethical sourcing because looking good should also feel good. Join us on a journey to redefine modern fashion — where authenticity meets innovation.</p>
          <b className='text-gray-800 '>Our Misson</b>
          <p>Our mission is to empower individuals to express their unique style through high-quality, affordable clothing. We strive to deliver exceptional fashion that combines comfort, sustainability, and trend-forward design — all while fostering a positive impact on our community and the environment</p>

        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text={'WHY'} text2={'CHOOSE US ?'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 '>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600 '>We prioritize quality in every stitch. Each item is carefully crafted using premium materials and undergoes strict quality checks to ensure durability, comfort, and style. When you shop with us, you can trust that you're getting products made to last.</p>

        </div>

        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600 '> Shop anytime, anywhere with our easy-to-navigate website and secure checkout. Enjoy fast, reliable shipping and hassle-free returns — making your shopping experience smooth from start to finish.</p>

        </div>

        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600 '>Our dedicated support team is here to assist you every step of the way. Whether you have questions about sizing, orders, or returns, we’re committed to providing fast, friendly, and helpful service to ensure your complete satisfaction.</p>

        </div>


      </div>

     <NewsLetterBox />

    </div>
  )
}

export default About
