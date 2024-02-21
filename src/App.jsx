import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ScreenHome from "./screen/ScreenHome";
import ScreenLogin from "./screen/ScreenLogin";
import ScreenRegister from "./screen/ScreenRegister";
import ScreenError from "./screen/ScreenError";
import ScreenProducts from "./screen/ScreenProducts";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ScreenHome />} />
            <Route path="/login" element={<ScreenLogin />} />
            <Route path="/register" element={<ScreenRegister />} />
            <Route path="/error" element={<ScreenError />} />
            <Route path="/products" element={<ScreenProducts />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
