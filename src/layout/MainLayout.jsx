import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Navbar />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-2">
        <Outlet />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}
