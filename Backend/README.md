# Backend - Node.js/Express API

This directory contains the server-side application for the Product CRUD project, built with Node.js, Express, and MongoDB.

## 🛠️ Tech Stack

*   **Node.js:** JavaScript runtime
*   **Express:** Web framework
*   **MongoDB:** NoSQL Database
*   **Mongoose:** ODM for MongoDB
*   **Cloudinary:** Cloud storage for image management
*   **Multer:** Middleware for handling `multipart/form-data` (file uploads)
*   **Helmet:** Security middleware for HTTP headers

## 🚀 Getting Started

### Prerequisites

*   Node.js (v14 or higher)
*   MongoDB Atlas Account (or local instance)
*   Cloudinary Account

### Installation

1.  Navigate to the `Backend` directory:
    ```bash
    cd Backend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Configuration

Create a `.env` file in the `Backend` root with the following variables:

```env
PORT=3001
DB_URL=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/?appName=<app>
CLOUDINARY_NAME=<your_cloud_name>
CLOUDINARY_API_KEY=<your_api_key>
CLOUDINARY_API_SECRET=<your_api_secret>
CLIENT_URL=http://localhost:5173  # Allowed origin for CORS in production
NODE_ENV=development              # 'production' or 'development'
```

### Running the Server

Start the server with `nodemon` (auto-restart on changes):

```bash
npm start
```

The server will run on `http://localhost:3001`.

## 📡 API Endpoints

### Products

*   **GET** `/products`
    *   Fetch all products.
    *   Response: `{ success: true, data: [...] }`

*   **GET** `/products/:id`
    *   Fetch a single product by ID.
    *   Response: `{ success: true, data: { ... } }`

*   **POST** `/products/createProduct`
    *   Create a new product.
    *   Body: `multipart/form-data` (title, price, image file).
    *   Response: `{ success: true, message: "Success", newProduct: { ... } }`

*   **PUT** `/products/:id`
    *   Update an existing product.
    *   Body: `multipart/form-data` (title, price, image file [optional]).
    *   Response: `{ success: true, message: "Updated", data: { ... } }`

*   **DELETE** `/products/:id`
    *   Delete a product.
    *   Response: `{ success: true, message: "Item Deleted" }`

## 🔒 Security Features

*   **Helmet:** Sets various HTTP headers to secure the app.
*   **CORS:** Configured to allow requests only from the specified `CLIENT_URL` in production.
*   **Input Validation:** Basic validation for required fields.
*   **Error Handling:** Centralized error handling to prevent server crashes and information leakage.
