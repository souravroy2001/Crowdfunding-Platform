import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import * as echarts from "echarts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faChartLine,
  faClock,
  faGlobe,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const AdminAnalytics = () => {
  const toggleTheme = useSelector((state) => state.theme.darkMode);
  const userActivityChartRef = useRef(null);
  const trafficSourcesChartRef = useRef(null);
  const userDemographicsChartRef = useRef(null);
  const conversionRateChartRef = useRef(null);

  const stats = [
    {
      icon: faUsers,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Total Users",
      value: "12,847",
      change: "+2.5% from last week",
      trend: "up",
    },
    {
      icon: faChartLine,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      title: "Active Users",
      value: "8,592",
      change: "+4.3% from last week",
      trend: "up",
    },
    {
      icon: faClock,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Avg. Session Time",
      value: "4m 32s",
      change: "-1.2% from last week",
      trend: "down",
    },
    {
      icon: faGlobe,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Page Views",
      value: "245,128",
      change: "+12.4% from last week",
      trend: "up",
    },
  ];

  const topPages = [
    {
      page: "/homepage",
      views: "45,216",
      avgTime: "2m 15s",
      bounceRate: "32.4%",
    },
    {
      page: "/products",
      views: "38,124",
      avgTime: "1m 45s",
      bounceRate: "28.7%",
    },
    {
      page: "/blog",
      views: "29,854",
      avgTime: "3m 20s",
      bounceRate: "25.1%",
    },
  ];

  const pendingApprovals = [
    {
      campaign: "Save the Forest Initiative",
      creator: "Green Earth Foundation",
      status: "Pending",
      submitted: "2 hours ago",
    },
    {
      campaign: "Community Food Bank",
      creator: "Local Help Network",
      status: "Pending",
      submitted: "3 hours ago",
    },
  ];

  useEffect(() => {
    // Initialize charts
    const initCharts = () => {
      const chartColor = !toggleTheme ? "#bb86fc" : "#00bfa5";
      const textColor = !toggleTheme ? "#e5e7eb" : "#1f2937";

      // User Activity Chart
      const userActivityChart = echarts.init(userActivityChartRef.current);
      userActivityChart.setOption({
        tooltip: { trigger: "axis" },
        legend: {
          data: ["Active Users", "New Users"],
          textStyle: { color: textColor },
        },
        grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: { color: textColor },
        },
        yAxis: {
          type: "value",
          axisLabel: { color: textColor },
        },
        series: [
          {
            name: "Active Users",
            type: "line",
            data: [4500, 5000, 4800, 5200, 5500, 6000, 5800],
            smooth: true,
            lineStyle: { color: chartColor },
            itemStyle: { color: chartColor },
          },
          {
            name: "New Users",
            type: "line",
            data: [1200, 1400, 1100, 1300, 1500, 1600, 1400],
            smooth: true,
            lineStyle: { color: !toggleTheme ? "#9c64fb" : "#009688" },
            itemStyle: { color: !toggleTheme ? "#9c64fb" : "#009688" },
          },
        ],
      });

      // Traffic Sources Chart
      const trafficSourcesChart = echarts.init(trafficSourcesChartRef.current);
      trafficSourcesChart.setOption({
        tooltip: { trigger: "item" },
        legend: {
          orient: "vertical",
          left: "left",
          textStyle: { color: textColor },
        },
        series: [
          {
            name: "Traffic Source",
            type: "pie",
            radius: "50%",
            data: [
              { value: 45, name: "Direct" },
              { value: 25, name: "Search" },
              { value: 20, name: "Social" },
              { value: 10, name: "Other" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });

      // Demographics Chart
      const userDemographicsChart = echarts.init(
        userDemographicsChartRef.current
      );
      userDemographicsChart.setOption({
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
        legend: {
          data: ["Male", "Female", "Other"],
          textStyle: { color: textColor },
        },
        grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
        xAxis: [
          {
            type: "category",
            data: ["18-24", "25-34", "35-44", "45-54", "55+"],
            axisLabel: { color: textColor },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: { color: textColor },
          },
        ],
        series: [
          {
            name: "Male",
            type: "bar",
            data: [320, 432, 301, 234, 190],
            stack: "total",
            itemStyle: { color: chartColor },
          },
          {
            name: "Female",
            type: "bar",
            data: [420, 532, 401, 254, 190],
            stack: "total",
            itemStyle: { color: !toggleTheme ? "#9c64fb" : "#009688" },
          },
          {
            name: "Other",
            type: "bar",
            data: [120, 132, 101, 134, 90],
            stack: "total",
            itemStyle: { color: !toggleTheme ? "#7c4dff" : "#00796b" },
          },
        ],
      });

      // Conversion Rate Chart
      const conversionRateChart = echarts.init(conversionRateChartRef.current);
      conversionRateChart.setOption({
        tooltip: { trigger: "axis" },
        legend: {
          data: ["Conversion Rate"],
          textStyle: { color: textColor },
        },
        grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
        xAxis: {
          type: "category",
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          axisLabel: { color: textColor },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}%",
            color: textColor,
          },
        },
        series: [
          {
            name: "Conversion Rate",
            type: "line",
            data: [2.8, 3.2, 3.5, 4.1, 3.8, 4.3],
            smooth: true,
            markPoint: {
              data: [
                { type: "max", name: "Maximum" },
                { type: "min", name: "Minimum" },
              ],
            },
            lineStyle: { color: chartColor },
            itemStyle: { color: chartColor },
          },
        ],
      });

      // Handle window resize
      const handleResize = () => {
        userActivityChart.resize();
        trafficSourcesChart.resize();
        userDemographicsChart.resize();
        conversionRateChart.resize();
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    };

    initCharts();
  }, [toggleTheme]);

  return (
    <div className="p-6 animate-fadeIn">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slideUp">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${
                !toggleTheme ? "bg-gray-800" : "bg-white"
              } rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]`}
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.bgColor} bg-opacity-20`}>
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className={`text-xl ${stat.iconColor}`}
                  />
                </div>
                <div className="ml-4">
                  <p
                    className={`text-sm font-medium ${
                      !toggleTheme ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {stat.title}
                  </p>
                  <p
                    className={`text-2xl font-bold ${
                      !toggleTheme ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 animate-slideUp animation-delay-200">
          {[
            { title: "User Activity", ref: userActivityChartRef },
            { title: "Traffic Sources", ref: trafficSourcesChartRef },
            { title: "User Demographics", ref: userDemographicsChartRef },
            { title: "Conversion Rates", ref: conversionRateChartRef },
          ].map((chart, index) => (
            <div
              key={index}
              className={`${
                !toggleTheme ? "bg-gray-800" : "bg-white"
              } rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl`}
            >
              <h3
                className={`text-lg font-bold ${
                  !toggleTheme ? "text-gray-100" : "text-gray-900"
                } mb-4`}
              >
                {chart.title}
              </h3>
              <div ref={chart.ref} style={{ width: "100%", height: "350px" }} />
            </div>
          ))}
        </div>

        {/* Top Pages Table */}
        <div
          className={`${
            !toggleTheme ? "bg-gray-800" : "bg-white"
          } rounded-xl shadow-lg mt-6 animate-slideUp animation-delay-400`}
        >
          <div className="p-6">
            <h3
              className={`text-lg font-bold ${
                !toggleTheme ? "text-gray-100" : "text-gray-900"
              } mb-4`}
            >
              Top Performing Pages
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={!toggleTheme ? "bg-gray-700" : "bg-gray-50"}>
                  <tr>
                    {["Page", "Views", "Avg. Time", "Bounce Rate"].map(
                      (header) => (
                        <th
                          key={header}
                          className={`px-6 py-3 text-left text-xs font-semibold ${
                            !toggleTheme ? "text-gray-300" : "text-gray-600"
                          } uppercase tracking-wider`}
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody
                  className={`divide-y ${
                    !toggleTheme ? "divide-gray-700" : "divide-gray-200"
                  }`}
                >
                  {topPages.map((page, index) => (
                    <tr
                      key={index}
                      className="hover:bg-opacity-50 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          !toggleTheme ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        {page.page}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          !toggleTheme ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {page.views}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          !toggleTheme ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {page.avgTime}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          !toggleTheme ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {page.bounceRate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pending Approvals */}
        <div
          className={`${
            !toggleTheme ? "bg-gray-800" : "bg-white"
          } rounded-xl shadow-lg mt-6 animate-slideUp animation-delay-400`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2
                className={`text-lg font-bold ${
                  !toggleTheme ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Pending Approvals
              </h2>
              <button
                className={`rounded-lg px-4 py-2 text-white font-medium transform hover:scale-105 transition-all duration-300 ${
                  !toggleTheme
                    ? "bg-[#00bfa5] hover:bg-[#009688]"
                    : "bg-[#00bfa5] hover:bg-[#009688]"
                }`}
              >
                View All
              </button>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={!toggleTheme ? "bg-gray-700" : "bg-gray-50"}>
                  <tr>
                    {[
                      "Campaign",
                      "Creator",
                      "Status",
                      "Submitted",
                      "Action",
                    ].map((header) => (
                      <th
                        key={header}
                        className={`px-6 py-3 text-left text-xs font-semibold ${
                          !toggleTheme ? "text-gray-300" : "text-gray-600"
                        } uppercase tracking-wider`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody
                  className={`divide-y ${
                    !toggleTheme ? "divide-gray-700" : "divide-gray-200"
                  }`}
                >
                  {pendingApprovals.map((approval, index) => (
                    <tr
                      key={index}
                      className="hover:bg-opacity-50 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          !toggleTheme ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        {approval.campaign}
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          !toggleTheme ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {approval.creator}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          {approval.status}
                        </span>
                      </td>
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm ${
                          !toggleTheme ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {approval.submitted}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button className="inline-flex items-center px-3 py-1 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition-colors duration-300">
                          <FontAwesomeIcon icon={faCheck} className="mr-1" />
                          Approve
                        </button>
                        <button className="inline-flex items-center px-3 py-1 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition-colors duration-300">
                          <FontAwesomeIcon icon={faTimes} className="mr-1" />
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
