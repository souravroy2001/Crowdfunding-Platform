import React from "react";
import { useSelector } from "react-redux";
import ReactECharts from "echarts-for-react";

const performanceData = {
    dates: ["Feb 15", "Feb 22", "Mar 1", "Mar 8", "Mar 15", "Mar 20"],
    values: [15000, 28000, 45000, 68000, 89000, 124580],
    goal: 150000
};

const CampaignPerformance = () => {
    const theme = useSelector((state) => state.theme);

    const getChartOptions = () => ({
        grid: {
            top: 40,
            right: 20,
            bottom: 60,
            left: 60,
            containLabel: true
        },
        tooltip: {
            trigger: "axis",
            formatter: (params) => {
                const value = params[0].value;
                return `${params[0].axisValue}<br/>Amount: $${value.toLocaleString()}`;
            },
            backgroundColor: theme ? "rgba(255, 255, 255, 0.9)" : "rgba(17, 24, 39, 0.9)",
            borderColor: theme ? "#E5E7EB" : "#374151",
            textStyle: {
                color: theme ? "#111827" : "#F9FAFB"
            }
        },
        xAxis: {
            type: "category",
            data: performanceData.dates,
            axisLabel: {
                color: theme ? "#6B7280" : "#9CA3AF"
            },
            axisLine: {
                lineStyle: {
                    color: theme ? "#E5E7EB" : "#374151"
                }
            }
        },
        yAxis: {
            type: "value",
            name: "Amount ($)",
            nameTextStyle: {
                color: theme ? "#6B7280" : "#9CA3AF"
            },
            axisLabel: {
                formatter: (value) => `$${value.toLocaleString()}`,
                color: theme ? "#6B7280" : "#9CA3AF"
            },
            splitLine: {
                lineStyle: {
                    color: theme ? "#E5E7EB" : "#374151"
                }
            }
        },
        series: [
            {
                data: performanceData.values,
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 8,
                itemStyle: {
                    color: "#10B981"
                },
                areaStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: theme ? "rgba(16, 185, 129, 0.2)" : "rgba(16, 185, 129, 0.1)"
                        }, {
                            offset: 1,
                            color: theme ? "rgba(16, 185, 129, 0)" : "rgba(16, 185, 129, 0)"
                        }]
                    }
                },
                markLine: {
                    silent: true,
                    lineStyle: {
                        color: "#EF4444",
                        type: "dashed"
                    },
                    data: [{
                        yAxis: performanceData.goal,
                        label: {
                            formatter: "Goal: $150,000",
                            position: "insideEndTop"
                        }
                    }]
                }
            }
        ]
    });

    const stats = [
        {
            label: "Current Balance",
            value: "$124,580",
            change: "+12.5%",
            isPositive: true
        },
        {
            label: "Daily Average",
            value: "$3,750",
            change: "+8.2%",
            isPositive: true
        },
        {
            label: "Goal Progress",
            value: "83%",
            change: "17% remaining",
            isPositive: true
        },
        {
            label: "Time Remaining",
            value: "15 days",
            change: "On track",
            isPositive: true
        }
    ];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className={`text-lg font-semibold ${theme ? "text-gray-900" : "text-white"}`}>
                    Campaign Performance
                </h3>
                <select 
                    className={`text-sm rounded-lg ${
                        theme 
                            ? "bg-white border-gray-300 text-gray-700" 
                            : "bg-gray-700 border-gray-600 text-gray-200"
                    } border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                    <option value="1m">Last 30 Days</option>
                    <option value="3m">Last 3 Months</option>
                    <option value="1y">Last Year</option>
                </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={`${
                            theme ? "bg-gray-50" : "bg-gray-700"
                        } rounded-lg p-4`}
                    >
                        <dt className={`text-sm font-medium ${theme ? "text-gray-500" : "text-gray-400"}`}>
                            {stat.label}
                        </dt>
                        <dd className="mt-1">
                            <div className={`text-lg font-semibold ${theme ? "text-gray-900" : "text-white"}`}>
                                {stat.value}
                            </div>
                            <div className={`text-sm ${
                                stat.isPositive ? "text-green-600" : "text-red-600"
                            }`}>
                                {stat.change}
                            </div>
                        </dd>
                    </div>
                ))}
            </div>

            <div className={`${theme ? "bg-white" : "bg-gray-800"} rounded-lg p-4 shadow-sm`}>
                <ReactECharts
                    option={getChartOptions()}
                    style={{ height: "400px" }}
                    theme={theme ? "light" : "dark"}
                />
            </div>
        </div>
    );
};

export default CampaignPerformance;
