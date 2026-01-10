import Sidebar from "../components/Sidebar";
import Navbar from "../Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex bg-lightBg min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
