import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const DemographicsChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'User Demographics',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 435, name: '18-24' },
            { value: 679, name: '25-34' },
            { value: 548, name: '35-44' },
            { value: 321, name: '45-54' },
            { value: 264, name: '55+' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          itemStyle: {
            color: function(params) {
              const colors = ['#00bfa5', '#009688', '#26a69a', '#4db6ac', '#80cbc4'];
              return colors[params.dataIndex];
            }
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
        <h2 className="text-lg font-medium text-gray-900">User Demographics</h2>
        <div ref={chartRef} className="mt-4" style={{ height: '300px' }} />
      </div>
    </div>
  );
};

export default DemographicsChart;
