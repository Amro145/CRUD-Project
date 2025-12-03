# Frontend - React Client

This directory contains the client-side application for the Product CRUD project, built with React and Vite.

## 🛠️ Tech Stack

*   **React:** UI Library
*   **Vite:** Build tool and development server
*   **Chakra UI:** Component library for accessible and composable UI
*   **Tailwind CSS:** Utility-first CSS framework
*   **Axios:** Promise-based HTTP client
*   **React Router DOM:** Client-side routing
*   **React Hot Toast & SweetAlert2:** User notifications and alerts

## 🚀 Getting Started

### Prerequisites

*   Node.js (v14 or higher)
*   npm or yarn

### Installation

1.  Navigate to the `Frontend` directory:
    ```bash
    cd Frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Configuration

Create a `.env` file in the `Frontend` root (optional for local dev, required for production):

```env
VITE_API_URL=http://localhost:3001 # Or your deployed backend URL
```

### Running Development Server

Start the Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Build the application for production deployment:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 📂 Key Files & Directories

*   `src/api.js`: Centralized Axios instance with base URL configuration.
*   `src/components/Files/`: Contains main page components:
    *   `HomePage.jsx`: Displays the grid of products.
    *   `Product.jsx`: Individual product card component.
    *   `CreatePage.jsx`: Form to add a new product (supports image upload).
    *   `UpdatePage.jsx`: Form to edit an existing product.
    *   `Navbar.jsx`: Application navigation bar.
*   `src/components/ui/`: Reusable UI components (Chakra UI wrappers).

## 🎨 Features

*   **Dynamic Product Grid:** Fetches and displays products from the backend.
*   **Image Handling:** Displays product images and handles file inputs for uploads.
*   **Form Validation:** Client-side validation for required fields and data types.
*   **Responsive Design:** Adapts to different screen sizes using Tailwind and Chakra UI responsive props.
