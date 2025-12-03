# MERN Stack Product CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) application built with the MERN stack (MongoDB, Express, React, Node.js). This project features a responsive UI, real-time image uploads using Cloudinary, and a robust backend API.

## 🚀 Features

*   **Product Management:** Create, Read, Update, and Delete products.
*   **Image Uploads:** Seamless image uploading via Cloudinary (supports file drag-and-drop/selection).
*   **Responsive UI:** Built with React, Chakra UI, and Tailwind CSS for a modern, mobile-friendly design.
*   **Dark/Light Mode:** Toggleable theme support.
*   **Secure Backend:** Express server with Helmet for security, CORS configuration, and centralized error handling.

## 🛠️ Tech Stack

### Frontend
*   **Framework:** React (Vite)
*   **Styling:** Chakra UI, Tailwind CSS
*   **State/Routing:** React Router DOM, React Hooks
*   **HTTP Client:** Axios (with centralized instance)
*   **Notifications:** React Hot Toast, SweetAlert2

### Backend
*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB (Mongoose ODM)
*   **Image Storage:** Cloudinary
*   **Middleware:** Multer (file handling), Helmet (security), CORS, Morgan (logging)

## ⚙️ Environment Variables

You need to configure the following environment variables in a `.env` file within the `Backend` directory:

```env
PORT=3001
DB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?appName=<app_name>
CLOUDINARY_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
CLIENT_URL=http://localhost:5173  # For production CORS
NODE_ENV=development              # Set to 'production' for deployment
```

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd CRUD-Project
    ```

2.  **Install Dependencies:**
    *   **Backend:**
        ```bash
        cd Backend
        npm install
        ```
    *   **Frontend:**
        ```bash
        cd Frontend
        npm install
        ```

3.  **Run the Application:**
    *   **Backend:**
        ```bash
        cd Backend
        npm start
        ```
    *   **Frontend:**
        ```bash
        cd Frontend
        npm run dev
        ```

4.  **Access the App:**
    Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📂 Project Structure

```
CRUD-Project/
├── Backend/            # Node.js/Express Server
│   ├── config/         # DB Connection
│   ├── Controller/     # Route Logic
│   ├── middleware/     # Upload & Security Middleware
│   ├── Model/          # Mongoose Models
│   ├── Routes/         # API Routes
│   ├── uploads/        # Temp storage for uploads
│   └── App.js          # Entry Point
├── Frontend/           # React Client
│   ├── src/
│   │   ├── components/ # UI Components
│   │   ├── api.js      # Axios Instance
│   │   └── ...
│   └── ...
└── README.md           # Project Overview
```

## 📄 License

This project is licensed under the MIT License.
