# E-Commerce Website
Yelavi Clothing Co. is a full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that offers timeless fashion blending comfort with effortless style. The website features product browsing, secure checkout with Razorpay and Stripe integration, user authentication, order tracking, and an admin panel for inventory management.

# Key Features
# User Features
Product Catalog: Browse clothing items by category (Men, Women, Kids) and type (Topwear, Bottomwear, Winterwear)

Product Filtering: Filter products by categories and types

Product Details: View detailed product information including descriptions, sizes, and reviews

Shopping Cart: Add/remove items and manage quantities before checkout

Secure Checkout: Multiple payment options including Stripe, Razorpay, and Cash on Delivery

Order Tracking: View order status (Placed, Packing, Shipped) with tracking functionality

User Authentication: Login system with email/password and password recovery

Responsive Design: Fully responsive across all device sizes

# Admin Features
Product Management: Add/edit products with images, descriptions, categories, and pricing

Inventory Control: Manage product sizes and mark items as bestsellers

Order Management: View and process customer orders

# Technologies Used
# Frontend
React.js

Redux (for state management)

HTML5/CSS3

JavaScript (ES6+)

# Backend
Node.js

Express.js

MongoDB (Database)

Mongoose (ODM)

# Payment Integration
Stripe

Razorpay

# Other Libraries
Axios (for API calls)

JWT (for authentication)

Various React libraries for UI components

# Installation
1.Clone the repository:
git clone https://github.com/bhuwanshrestha1/e-commerce.git

2.Install dependencies for both client and server:
cd e-commerce
cd frontend
npm install

cd admin
npm install

cd backend
npm install

3.Set up environment variables:

Create a .env file in the root directory with your:

MongoDB connection string

JWT secret key

Stripe and Razorpay API keys

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret_key


# Future Enhancements
Implement user reviews and ratings system

Add wishlist functionality

Enhance admin dashboard with analytics

Implement social media login options

Add loyalty program integration


