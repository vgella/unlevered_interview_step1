// src/components/StockChart.tsx
import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';

const StockChart: React.FC = () => {
  const options = {
    title: { text: 'AAPL Stock Price' },
    series: [{ data: [] /* add your candlestick data here */ }]
  };

  return <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />;
};

export default StockChart;

