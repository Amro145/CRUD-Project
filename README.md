# CRUD Using MERN

This project is a simple CRUD (Create, Read, Update, Delete) application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to manage a list of products with features like adding, updating, deleting, and viewing products.

## Features

- Add new products with title, price, and image URL.
- View all products in a grid layout.
- Update existing product details.
- Delete products with confirmation.
- Responsive design with Chakra UI and Tailwind CSS.
- Light/Dark mode toggle.

## Tech Stack

- **Frontend**: React, Chakra UI, Tailwind CSS, React Router, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Other Tools**: Vite, SweetAlert2, React Hot Toast

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or a MongoDB Atlas connection string.

### Clone the Repository

```bash
git clone https://github.com/Amro145/CRUD-Project
cd CRUD-Using-MERN-1
```

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `Backend` directory and add the following:
   ```
   PORT=3001
   URL_DB=<your_mongodb_connection_string>
   ```

4. Start the backend server:
   ```bash
   node App.js
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd ../Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. **Home Page**: Displays all products in a grid layout.
2. **Add Product**: Click the "Add New" button in the navbar to create a new product.
3. **Update Product**: Click the "Update" button on a product card to edit its details.
4. **Delete Product**: Click the "Delete" button on a product card to remove it.

## Folder Structure

```
CRUD-Using-MERN-1/
├── Backend/
│   ├── Controller/
│   ├── Model/
│   ├── Routes/
│   ├── App.js
│   ├── package.json
│   └── .env (not included in the repository)
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   ├── package.json
│   └── .gitignore
└── README.md
```

## License

This project is licensed under the MIT License.
