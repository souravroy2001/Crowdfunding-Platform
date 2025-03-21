import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as echarts from 'echarts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileAlt,
  faClock,
  faCheckCircle,
  faCheck,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const AdminReports = () => {
  const toggleTheme = useSelector((state) => state.theme.toggleTheme);
  const reportCategoriesChartRef = useRef(null);
  const reportTimelineChartRef = useRef(null);

  const stats = [
    {
      icon: faFileAlt,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Total Reports',
      value: '1,847',
      change: '+5.2% from last month',
      trend: 'up',
    },
    {
      icon: faClock,
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      title: 'Pending Reports',
      value: '23',
      change: '+12% from last month',
      trend: 'down',
    },
    {
      icon: faCheckCircle,
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Completed Reports',
      value: '1,824',
      change: '+8.3% from last month',
      trend: 'up',
    },
  ];

  const recentReports = [
    {
      name: 'Q2 Financial Summary',
      status: 'Completed',
      created: '2 days ago',
    },
    {
      name: 'User Growth Analysis',
      status: 'Pending',
      created: '1 day ago',
    },
    {
      name: 'Marketing Campaign Results',
      status: 'Completed',
      created: '3 days ago',
    },
  ];

  const pendingApprovals = [
    {
      campaign: 'Save the Forest Initiative',
      creator: 'Green Earth Foundation',
      status: 'Pending',
      submitted: '2 hours ago',
    },
    {
      campaign: 'Community Food Bank',
      creator: 'Local Help Network',
      status: 'Pending',
      submitted: '3 hours ago',
    },
  ];

  useEffect(() => {
    // Initialize charts
    const initCharts = () => {
      const chartColor = toggleTheme ? '#bb86fc' : '#00bfa5';
      const textColor = toggleTheme ? '#e5e7eb' : '#1f2937';

      // Report Categories Chart
      const reportCategoriesChart = echarts.init(reportCategoriesChartRef.current);
      reportCategoriesChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: { color: textColor },
        },
        series: [{
          name: 'Categories',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
              color: textColor,
            },
          },
          labelLine: { show: false },
          data: [
            { value: 435, name: 'Financial', itemStyle: { color: chartColor } },
            { value: 310, name: 'Marketing', itemStyle: { color: toggleTheme ? '#9c64fb' : '#009688' } },
            { value: 234, name: 'Operations', itemStyle: { color: toggleTheme ? '#7c4dff' : '#00796b' } },
            { value: 155, name: 'User Analytics', itemStyle: { color: toggleTheme ? '#6200ea' : '#004d40' } },
            { value: 147, name: 'Performance', itemStyle: { color: toggleTheme ? '#5600e8' : '#00695c' } },
          ],
        }],
      });

      // Report Timeline Chart
      const reportTimelineChart = echarts.init(reportTimelineChartRef.current);
      reportTimelineChart.setOption({
        tooltip: { trigger: 'axis' },
        legend: {
          data: ['Generated Reports', 'Completed Reports'],
          textStyle: { color: textColor },
        },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          axisLabel: { color: textColor },
        },
        yAxis: {
          type: 'value',
          axisLabel: { color: textColor },
        },
        series: [
          {
            name: 'Generated Reports',
            type: 'line',
            smooth: true,
            data: [150, 182, 191, 234, 290, 330, 310],
            lineStyle: { color: chartColor },
            itemStyle: { color: chartColor },
          },
          {
            name: 'Completed Reports',
            type: 'line',
            smooth: true,
            data: [140, 175, 180, 220, 280, 315, 300],
            lineStyle: { color: toggleTheme ? '#9c64fb' : '#009688' },
            itemStyle: { color: toggleTheme ? '#9c64fb' : '#009688' },
          },
        ],
      });

      // Handle window resize
      const handleResize = () => {
        reportCategoriesChart.resize();
        reportTimelineChart.resize();
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    };

    initCharts();
  }, [toggleTheme]);

  return (
    <div className="p-6 animate-fadeIn">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slideUp">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${
                toggleTheme ? 'bg-gray-800' : 'bg-white'
              } rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]`}
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.bgColor} bg-opacity-20`}>
                  <FontAwesomeIcon icon={stat.icon} className={`text-xl ${stat.iconColor}`} />
                </div>
                <div className="ml-4">
                  <p className={`text-sm font-medium ${toggleTheme ? 'text-gray-300' : 'text-gray-500'}`}>
                    {stat.title}
                  </p>
                  <p className={`text-2xl font-bold ${toggleTheme ? 'text-gray-100' : 'text-gray-900'}`}>
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 animate-slideUp animation-delay-200">
          {/* Recent Reports */}
          <div className={`${
            toggleTheme ? 'bg-gray-800' : 'bg-white'
          } rounded-xl shadow-lg p-6`}>
            <h3 className={`text-lg font-bold ${toggleTheme ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
              Recent Reports
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className={`px-6 py-3 text-left text-xs font-semibold ${
                      toggleTheme ? 'text-gray-300' : 'text-gray-500'
                    } uppercase tracking-wider`}>Report Name</th>
                    <th className={`px-6 py-3 text-left text-xs font-semibold ${
                      toggleTheme ? 'text-gray-300' : 'text-gray-500'
                    } uppercase tracking-wider`}>Status</th>
                    <th className={`px-6 py-3 text-left text-xs font-semibold ${
                      toggleTheme ? 'text-gray-300' : 'text-gray-500'
                    } uppercase tracking-wider`}>Created</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${toggleTheme ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  {recentReports.map((report, index) => (
                    <tr key={index} className="hover:bg-opacity-50 hover:bg-gray-100 transition-colors duration-200">
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                        toggleTheme ? 'text-gray-200' : 'text-gray-900'
                      }`}>{report.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          report.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {report.status}
                        </span>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                        toggleTheme ? 'text-gray-300' : 'text-gray-500'
                      }`}>{report.created}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Report Categories Chart */}
          <div className={`${
            toggleTheme ? 'bg-gray-800' : 'bg-white'
          } rounded-xl shadow-lg p-6`}>
            <h3 className={`text-lg font-bold ${toggleTheme ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
              Report Categories
            </h3>
            <div ref={reportCategoriesChartRef} style={{ width: '100%', height: '300px' }} />
          </div>
        </div>

        {/* Report Timeline */}
        <div className={`${
          toggleTheme ? 'bg-gray-800' : 'bg-white'
        } rounded-xl shadow-lg mt-6 animate-slideUp animation-delay-400`}>
          <div className="p-6">
            <h3 className={`text-lg font-bold ${toggleTheme ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
              Report Timeline
            </h3>
            <div ref={reportTimelineChartRef} style={{ width: '100%', height: '400px' }} />
          </div>
        </div>

        {/* Pending Approvals */}
        <div className={`${
          toggleTheme ? 'bg-gray-800' : 'bg-white'
        } rounded-xl shadow-lg mt-6 animate-slideUp animation-delay-400`}>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className={`text-lg font-bold ${toggleTheme ? 'text-gray-100' : 'text-gray-900'}`}>
                Pending Approvals
              </h2>
              <button
                className={`rounded-lg px-4 py-2 text-white font-medium transform hover:scale-105 transition-all duration-300 ${
                  toggleTheme ? 'bg-[#bb86fc] hover:bg-[#9c64fb]' : 'bg-[#00bfa5] hover:bg-[#009688]'
                }`}
              >
                View All
              </button>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className={toggleTheme ? 'bg-gray-700' : 'bg-gray-50'}>
                  <tr>
                    {['Campaign', 'Creator', 'Status', 'Submitted', 'Action'].map((header) => (
                      <th
                        key={header}
                        className={`px-6 py-3 text-left text-xs font-semibold ${
                          toggleTheme ? 'text-gray-300' : 'text-gray-600'
                        } uppercase tracking-wider`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className={`divide-y ${toggleTheme ? 'divide-gray-700' : 'divide-gray-200'}`}>
                  {pendingApprovals.map((approval, index) => (
                    <tr key={index} className="hover:bg-opacity-50 hover:bg-gray-100 transition-colors duration-200">
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                        toggleTheme ? 'text-gray-200' : 'text-gray-900'
                      }`}>
                        {approval.campaign}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                        toggleTheme ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {approval.creator}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          {approval.status}
                        </span>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                        toggleTheme ? 'text-gray-300' : 'text-gray-600'
                      }`}>
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

export default AdminReports;
