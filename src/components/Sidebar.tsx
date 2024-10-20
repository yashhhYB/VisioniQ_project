import React from 'react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <div className="bg-indigo-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h1 className="text-2xl font-semibold text-center">VisionIQ</h1>
      <nav>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700 hover:text-white"
          >
            <div className="flex items-center space-x-2">
              {item.icon}
              <span>{item.label}</span>
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;