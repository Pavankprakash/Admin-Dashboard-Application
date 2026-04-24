import React from "react";
import {
  ArrowRight,
  DollarSign,
  Users,
  ShoppingCart,
  Eye,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "8,549",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Total Orders",
    value: "2,847",
    change: "+15.3%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Page Views",
    value: "45,892",
    change: "-2.1%",
    trend: "down",
    icon: Eye,
  },
];

function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                  {stat.title}
                </p>

                <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                  {stat.value}
                </h2>

                <div className="flex items-center space-x-2 mt-2">
                  <ArrowRight className="w-4 h-4" />
                  <span
                    className={`text-sm ${
                      stat.trend === "up"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    vs last month
                  </span>
                </div>
              </div>

              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <Icon className="w-5 h-5" />
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsGrid;