import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useSelector } from 'react-redux';

const RevenueChart = () => {
  const chartRef = useRef(null);
  const theme = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      animation: false,
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'Revenue',
        type: 'line',
        data: [5200, 6320, 7850, 6420, 8450, 9208, 8294],
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(0, 191, 165, 0.2)'
            }, {
              offset: 1,
              color: 'rgba(0, 191, 165, 0)'
            }]
          }
        },
        lineStyle: {
          color: '#00bfa5'
        },
        itemStyle: {
          color: '#00bfa5'
        },
        smooth: true
      }]
    };

    chart.setOption(option);

    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, []);

  return (
    <div
      className={`${
        theme ? "bg-white text-gray-900" : "bg-gray-800 text-white"
      } rounded-lg shadow`}
    >
      <div className="p-6">
        <h2 className="text-lg font-medium">Revenue Overview</h2>
        <div ref={chartRef} className="mt-4" style={{ height: "300px" }} />
      </div>
    </div>
  );
};

export default RevenueChart;
