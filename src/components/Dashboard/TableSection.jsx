import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const recentOrders = [
  {
    id: "#3847",
    customer: "John Smith",
    product: "MacBook Pro 16",
    amount: "$2,399",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "#3848",
    customer: "Sarah",
    product: "iPhone 15 Pro",
    amount: "$1,199",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: "#3849",
    customer: "Mike",
    product: "AirPods Pro",
    amount: "$249",
    status: "completed",
    date: "2024-01-14",
  },
  {
    id: "#3850",
    customer: "Emily Davis",
    product: "iPad Air",
    amount: "$599",
    status: "cancelled",
    date: "2024-01-14",
  },
];

const topProducts = [
  {
    name: "MacBook Pro 16",
    sales: 1247,
    revenue: "$2,987,530",
    trend: "up",
    change: "+12%",
  },
  {
    name: "iPhone 15 Pro",
    sales: 2156,
    revenue: "$2,578,044",
    trend: "up",
    change: "+8%",
  },
  {
    name: "AirPods Pro",
    sales: 3421,
    revenue: "$852,229",
    trend: "down",
    change: "-3%",
  },
  {
    name: "iPad Air",
    sales: 987,
    revenue: "$591,213",
    trend: "up",
    change: "+15%",
  },
];

const TableSection = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
    }
  };

  return (
    <div className="space-y-6">

      {/* Recent Orders */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Recent Orders
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Latest customer orders
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-4 text-left text-sm">Order ID</th>
                <th className="p-4 text-left text-sm">Customer</th>
                <th className="p-4 text-left text-sm">Product</th>
                <th className="p-4 text-left text-sm">Amount</th>
                <th className="p-4 text-left text-sm">Status</th>
                <th className="p-4 text-left text-sm">Date</th>
                <th className="p-4"></th>
              </tr>
            </thead>

            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-b hover:bg-slate-50 dark:hover:bg-slate-800/50">

                  <td className="p-4">{order.id}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4">{order.product}</td>
                  <td className="p-4">{order.amount}</td>

                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>

                  <td className="p-4">{order.date}</td>

                  <td className="p-4">
                    <MoreHorizontal className="w-4 h-4" />
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
        
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Top Products
          </h3>
          <button className="text-blue-600 text-sm">View All</button>
        </div>

        {topProducts.map((product, index) => (
          <div key={index} className="flex justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50">

            <div>
              <h4 className="text-sm font-semibold">{product.name}</h4>
              <p className="text-xs text-slate-500">{product.sales} sales</p>
            </div>

            <div className="text-right">
              <p className="font-semibold">{product.revenue}</p>

              <div className="flex items-center gap-1">
                {product.trend === "up" ? (
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-500" />
                )}

                <span
                  className={`text-xs ${
                    product.trend === "up"
                      ? "text-emerald-500"
                      : "text-red-500"
                  }`}
                >
                  {product.change}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default TableSection;