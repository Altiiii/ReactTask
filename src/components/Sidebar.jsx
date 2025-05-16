import { useState, useEffect } from "react";
import useIsMobile from "../hooks/isMobile.jsx";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useIsMobile();

  
  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true); 
    } else {
      setIsCollapsed(false);
    }
  }, [isMobile]);

  return (
    <div
      className={`fixed top-0 left-0 h-full mt-16 z-50 ${
        isCollapsed ? "w-20" : "w-64"
      } bg-gray-700 text-white flex flex-col p-4 transition-all duration-300 shadow-lg`}
    >      
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white bg-gray-800 p-2 rounded mb-6 hover:bg-gray-700 transition"
        >
          {isCollapsed ? "→" : "←"}
        </button>
      

      <nav className="flex flex-col gap-4">
        <a
          href="/"
          className="hover:bg-gray-700 p-3 rounded flex items-center gap-2"
        >
          {isCollapsed ? "H" : <span>Home</span>}
        </a>
        <a
          href="/create"
          className="hover:bg-gray-700 p-3 rounded flex items-center gap-2"
        >
          {isCollapsed ? "+" : <span>Create New Transaction</span>}
        </a>
        <a
          href="/login"
          className="hover:bg-gray-700 p-3 rounded flex items-center gap-2"
        >
          {isCollapsed ? "L&S" : <span>Login & SignUp</span>}
        </a>
      </nav>
    </div>
  );
}
