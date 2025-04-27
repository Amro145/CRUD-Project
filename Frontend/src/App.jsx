import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Files/Navbar";
import HomePage from "./components/Files/HomePage";
import { Box } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import UpdatePage from "./components/Files/UpdatePage";
import CreatePage from "./components/Files/CreatPage";

function App() {
  return (
    <div className="App min-h-screen">
      <Box>
        <Toaster />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/update/:id" element={<UpdatePage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;
