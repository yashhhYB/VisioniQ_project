import React, { useState, useEffect } from 'react';
import { BarChart, Camera, AlertTriangle, Eye } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [inspectionData, setInspectionData] = useState({
    total: 0,
    passed: 0,
    failed: 0,
  });

  const [recentInspections, setRecentInspections] = useState([]);

  useEffect(() => {
    // Simulating real-time data updates
    const interval = setInterval(() => {
      setInspectionData(prev => ({
        total: prev.total + 1,
        passed: prev.passed + (Math.random() > 0.2 ? 1 : 0),
        failed: prev.failed + (Math.random() <= 0.2 ? 1 : 0),
      }));

      setRecentInspections(prev => [
        {
          id: `INS${Math.floor(Math.random() * 1000)}`,
          product: `Product ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
          status: Math.random() > 0.2 ? 'Pass' : 'Fail',
          time: 'Just now',
        },
        ...prev.slice(0, 4),
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">VisionIQ Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardCard
          icon={<Eye className="w-8 h-8 text-blue-500" />}
          title="Total Inspections"
          value={inspectionData.total.toString()}
        />
        <DashboardCard
          icon={<BarChart className="w-8 h-8 text-green-500" />}
          title="Passed Inspections"
          value={inspectionData.passed.toString()}
        />
        <DashboardCard
          icon={<AlertTriangle className="w-8 h-8 text-red-500" />}
          title="Failed Inspections"
          value={inspectionData.failed.toString()}
        />
        <DashboardCard
          icon={<Camera className="w-8 h-8 text-purple-500" />}
          title="Active Cameras"
          value="1"
        />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Inspections</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentInspections.map((inspection, index) => (
                <TableRow key={index} {...inspection} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Live Feed</h2>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Live camera feed would be displayed here</p>
        </div>
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon}
          <h2 className="text-xl font-semibold ml-2">{title}</h2>
        </div>
        <span className="text-2xl font-bold">{value}</span>
      </div>
    </div>
  );
};

const TableRow: React.FC<{ id: string; product: string; status: string; time: string }> = ({ id, product, status, time }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{id}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
          status === 'Pass' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{time}</td>
    </tr>
  );
};

export default Dashboard;