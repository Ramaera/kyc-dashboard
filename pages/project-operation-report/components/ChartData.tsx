import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; // For parsing CSV
import Chart from 'chart.js/auto'; // Chart.js library
import csvData from './Purchase_Order_Trends.csv';

const ChartData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch and parse the CSV data
    const parsedData = Papa.parse(csvData, { header: true }).data;
    // setData(parsedData);
  }, []);

  useEffect(() => {
    if (data.length) {
      // Extracting months from the header
      const months = Object.keys(data[0])
        .filter((key) => key.includes('(Qty)'))
        .map((key) => key.split(' ')[0]);

      // Prepare datasets for Chart.js
      const datasets = data.map((item) => ({
        label: item['Item Name'],
        data: months.map((month) => item[`${month} (Qty)`] || 0),
        borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
        fill: false
      }));

      // Render chart
      renderChart(months, datasets);
    }
  }, [data]);

  const renderChart = (labels, datasets) => {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Data'
          }
        }
      }
    });
  };

  return (
    <>
      <h1 color="red"> Operation Report </h1>

      <canvas id="myChart" />
    </>
  );
};

export default ChartData;
