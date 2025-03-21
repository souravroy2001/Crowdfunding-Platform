import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const CampaignChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Impressions', 'Conversions']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Impressions',
          type: 'bar',
          data: [2300, 3200, 2800, 4100, 2900, 3600, 3000],
          itemStyle: {
            color: '#00bfa5' // Primary theme color
          }
        },
        {
          name: 'Conversions',
          type: 'bar',
          data: [320, 450, 380, 560, 400, 480, 420],
          itemStyle: {
            color: '#9CA3AF'
          }
        }
      ]
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
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900">Campaign Performance</h2>
        <div ref={chartRef} className="mt-4" style={{ height: '300px' }} />
      </div>
    </div>
  );
};

export default CampaignChart;
