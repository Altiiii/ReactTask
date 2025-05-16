import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Transactions from "./components/Transactions";
import { transactions } from "./utils/trdata";
import useIsMobile from "./hooks/isMobile";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  const livizeSidebarin = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    
      <div className="flex h-screen overflow-hidden">
{!isMobile ? (
  <Sidebar isOpen={true} /> 
) : (
<div className={`flex-1 flex flex-col transition-all duration-300 ${
  isMobile && sidebarOpen ? "ml-64" : "ml-0"
}`}>
    <div
      className={`fixed inset-0 bg-black opacity-50 ${sidebarOpen ? "block" : "hidden"}`}
      onClick={livizeSidebarin}
    />
    <Sidebar isOpen={sidebarOpen} livizeSidebarin={livizeSidebarin} />
  </div>
)}

      <div
        className={`flex flex-1 flex-col transition-all duration-300 ${
          isMobile && sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Header livizeSidebarin={livizeSidebarin} isMobile={isMobile} />

        <main   className={`overflow-y-auto p-4 sm:p-6 flex-1 mt-16 transition-all duration-300
    ${isMobile && !sidebarOpen ? "ml-0" : "ml-64"}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {transactions.map((tr, index) => (
              <Transactions
                key={index}
                title={tr.title}
                category={tr.category}
                amount={tr.amount}
                date={tr.date}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
