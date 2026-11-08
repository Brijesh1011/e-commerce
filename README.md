# 🛒 E-Commerce Website

A full-stack E-Commerce web application built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. This application allows users to browse products, add items to their cart, place orders, and make secure online payments. It also includes an Admin Panel for managing products and orders.

## 🚀 Features

### 👤 User Panel
- User Registration and Login
- JWT Authentication
- Browse and Explore Products
- Search and Filter Products
- Add Products to Cart
- Update Cart Quantity
- Place Orders
- Secure Online Payments using Stripe
- View Order Details

### 🔐 Admin Panel
- Admin Login
- Add New Products
- Upload Product Images
- Manage Products
- View and Manage Orders

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- REST APIs
- Cloudinary

### Payment Integration
- Stripe

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## 📂 Project Structure

```text
E-Commerce/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
│
└── README.md
```

## 📸 Screenshots

### Home Page
<img width="1773" height="821" alt="Screenshot 2026-11-08 202955" src="https://github.com/user-attachments/assets/d1579903-2a89-418c-b56f-af57917f5a90" />
<img width="1777" height="810" alt="Screenshot 2026-11-08 203101" src="https://github.com/user-attachments/assets/a8cec04a-5b3c-4b25-84f1-210e1212e44e" />


### Product Collection
<img width="1881" height="840" alt="Screenshot 2026-11-08 203144" src="https://github.com/user-attachments/assets/a50c1c3c-c3ba-40d9-8e80-290ce4578b0a" />



### Product Details
<img width="1835" height="793" alt="Screenshot 2026-11-08 203212" src="https://github.com/user-attachments/assets/5eb67147-837c-468e-934b-718de27af792" />


### Shopping Cart

<img width="1892" height="877" alt="Screenshot 2026-11-08 203501" src="https://github.com/user-attachments/assets/41e04651-8407-405b-8a68-07a71b1f9e6f" />
<img width="1806" height="832" alt="Screenshot 2026-11-08 203707" src="https://github.com/user-attachments/assets/7351203d-addd-40fc-ae92-3045ae10167f" />


### Admin Panel


<img width="1122" height="710" alt="Screenshot 2026-11-08 204039" src="https://github.com/user-attachments/assets/3b131f08-ee28-446e-b0c1-768e09fba1ec" />
<img width="1877" height="797" alt="Screenshot 2026-11-08 204004" src="https://github.com/user-attachments/assets/4557c2ab-55d5-4ea7-b9b1-de7b9b095b7b" />

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Setup Backend

```bash
cd backend
npm install
npm run dev
```

### 4. Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Add your frontend environment variable in the frontend `.env` file:

```env
VITE_BACKEND_URL=Your Backend Url
```

**Note:** Replace the example values with your actual credentials. Never upload your `.env` file to GitHub.

## 🌐 Live Demo

- **Frontend:** [https://ecommarce-website.vercel.app](https://e-commerce-mauve-one-89.vercel.app/)
- **Backend:** Deployed on Render

## 📸 Screenshots

Add screenshots of your website here.

## 🎯 Project Purpose

This project was developed to improve practical knowledge of full-stack web development, REST API integration, database management, authentication, payment gateway integration, and deployment.

## 👨‍💻 Developer

**Brijesh Parmar**

- GitHub: [Brijesh1011](https://github.com/Brijesh1011)

---

⭐ If you like this project, give it a star on GitHub!
