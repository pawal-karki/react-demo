import Register from "./pages/Register";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import VerificationEmailSent from "./pages/VerificationEmailSent";
import VerifyEmail from "./pages/VerifyEmail";
import Home from "./pages/Home";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verification-sent" element={<VerificationEmailSent />} />
      <Route path="/verify-email/:token" element={<VerifyEmail />} />
    </Routes>
    </>
  );
}
export default App
