import React from 'react';
import { BarChart3, Camera, AlertTriangle, Settings, Eye } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  const menuItems = [
    { icon: <BarChart3 />, label: 'Dashboard' },
    { icon: <Eye />, label: 'Inspections' },
    { icon: <Camera />, label: 'Cameras' },
    { icon: <AlertTriangle />, label: 'Alerts' },
    { icon: <Settings />, label: 'Settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar menuItems={menuItems} />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;