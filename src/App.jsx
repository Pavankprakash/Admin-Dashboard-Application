import React, { useState, useEffect } from 'react'
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import StatsGrid from './components/Dashboard/StatsGrid';
import ChartSection from './components/Dashboard/ChartSection';
import RevenueChart from './components/Dashboard/RevenueChart';


function App() {

  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const[currentPage, setCurrentPage] = useState("dashboard");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50
     dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar 
          collapsed={sideBarCollapsed}
          onTaggle={() => setSideBarCollapsed(!sideBarCollapsed)}
          currentPage={currentPage}
          onPageChange = {setCurrentPage}
        />
        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header 
           sideBarCollapsed={sideBarCollapsed}
           onTaggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)}
           />

           <main className='flex-1 overflow-y-auto bg-transparent'>
            <div className='p-6 space-y-6'>
              {currentPage === 'dashboard' && <Dashboard />}
            </div>
           </main>
        </div>
      </div>
    </div >
  );
}

export default App
