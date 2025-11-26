import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const data = [
  { name: 'Jan', revenue: 4000, users: 2400, amt: 2400 },
  { name: 'Feb', revenue: 3000, users: 1398, amt: 2210 },
  { name: 'Mar', revenue: 2000, users: 9800, amt: 2290 },
  { name: 'Apr', revenue: 2780, users: 3908, amt: 2000 },
  { name: 'May', revenue: 1890, users: 4800, amt: 2181 },
  { name: 'Jun', revenue: 2390, users: 3800, amt: 2500 },
  { name: 'Jul', revenue: 3490, users: 4300, amt: 2100 },
];

const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full bg-white border-2 border-black p-4 rounded-lg shadow-inner">
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <span className="font-pixel text-xs text-gray-500">R SHINY DASHBOARD PREVIEW</span>
        <div className="flex gap-2">
           <div className="w-3 h-3 rounded-full bg-red-400"></div>
           <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
           <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-64">
        <div className="bg-blue-50 p-2 rounded border border-blue-100">
           <h4 className="font-bold text-xs text-blue-800 mb-2">User Acquisition Growth</h4>
           <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="name" tick={{fontSize: 10}} />
              <YAxis tick={{fontSize: 10}} />
              <Tooltip 
                contentStyle={{ fontFamily: 'Poppins', fontSize: '12px', borderRadius: '4px', border: '2px solid black' }}
              />
              <Area type="monotone" dataKey="users" stroke="#a7e0ff" fill="#cdeeff" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-pink-50 p-2 rounded border border-pink-100">
           <h4 className="font-bold text-xs text-pink-800 mb-2">Campaign Performance</h4>
           <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ccc" />
              <XAxis dataKey="name" tick={{fontSize: 10}} />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{ fontFamily: 'Poppins', fontSize: '12px', borderRadius: '4px', border: '2px solid black' }}
              />
              <Legend wrapperStyle={{fontSize: '10px'}} />
              <Bar dataKey="revenue" fill="#ffc1e3" radius={[4, 4, 0, 0]} />
              <Bar dataKey="amt" fill="#ff4da6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;