import React from "react";
import { useSelector } from "react-redux";
import ReactECharts from "echarts-for-react";

const defaultData = {
    categories: ["Page Views", "Shares", "Comments", "Likes"],
    values: [2345, 1256, 867, 1432],
    timeRanges: ["Last 7 days", "Last 30 days", "Last 90 days"],
    overviewStats: [
        { label: "Total Engagement", value: "5,900" },
        { label: "Engagement Rate", value: "8.2%" },
        { label: "Average Time", value: "4m 32s" }
    ]
};

const EngagementMetrics = ({ data = defaultData }) => {
    const theme = useSelector((state) => state.theme);

    const option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            formatter: function(params) {
                const data = params[0];
                return `${data.name}<br/>${data.marker}${data.value.toLocaleString()} interactions`;
            }
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            top: "10%",
            containLabel: true
        },
        xAxis: {
            type: "category",
            data: data.categories,
            axisLine: {
                lineStyle: {
                    color: theme ? "#E5E7EB" : "#4B5563"
                }
            },
            axisLabel: {
                color: theme ? "#6B7280" : "#9CA3AF",
                fontSize: 12
            }
        },
        yAxis: {
            type: "value",
            splitLine: {
                lineStyle: {
                    color: theme ? "#F3F4F6" : "#374151"
                }
            },
            axisLabel: {
                color: theme ? "#6B7280" : "#9CA3AF",
                fontSize: 12,
                formatter: (value) => value.toLocaleString()
            }
        },
        series: [
            {
                name: "Interactions",
                type: "bar",
                data: data.values,
                itemStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: theme ? "#1F2937" : "#6B7280"
                            },
                            {
                                offset: 1,
                                color: theme ? "#374151" : "#9CA3AF"
                            }
                        ]
                    },
                    borderRadius: [4, 4, 0, 0]
                },
                emphasis: {
                    itemStyle: {
                        color: {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: theme ? "#374151" : "#9CA3AF"
                                },
                                {
                                    offset: 1,
                                    color: theme ? "#1F2937" : "#6B7280"
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className={`text-lg font-semibold ${theme ? "text-gray-900" : "text-white"}`}>
                        Engagement Metrics
                    </h2>
                    <p className={`text-sm ${theme ? "text-gray-500" : "text-gray-300"} mt-1`}>
                        Track community engagement
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <select
                        className={`text-sm ${
                            theme ? "text-gray-500 border-gray-200" : "text-gray-300 border-gray-600"
                        } border rounded-lg px-3 py-1.5 ${
                            theme ? "bg-white" : "bg-gray-700"
                        } hover:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-colors duration-200`}
                    >
                        {data.timeRanges.map((range, index) => (
                            <option key={index} value={range.toLowerCase().replace(/\s+/g, '')}>
                                {range}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {data.overviewStats.map((stat, index) => (
                    <div key={index} className={`p-4 rounded-lg ${theme ? "bg-gray-50" : "bg-gray-700"}`}>
                        <dt className={`text-sm font-medium ${theme ? "text-gray-500" : "text-gray-300"}`}>
                            {stat.label}
                        </dt>
                        <dd className={`mt-1 text-lg font-semibold ${theme ? "text-gray-900" : "text-white"}`}>
                            {stat.value}
                        </dd>
                    </div>
                ))}
            </div>

            {/* Chart */}
            <div className="w-full overflow-x-auto">
                <div className="min-w-[600px] h-[300px]">
                    <ReactECharts 
                        option={option} 
                        style={{ height: "100%", width: "100%" }}
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default EngagementMetrics;
