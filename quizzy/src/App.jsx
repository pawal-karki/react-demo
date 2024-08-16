import Register from "./pages/Register";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import VerificationEmailSent from "./pages/VerificationEmailSent";
import VerifyEmail from "./pages/VerifyEmail";
function App() {
  return (
    <>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verification-sent" element={<VerificationEmailSent />} />
      <Route path="/verify-email/:token" element={<VerifyEmail />} />
    </Routes>
    </>
  );
}
export default App
