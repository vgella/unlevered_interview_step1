// src/components/StockData.tsx
import React, { useEffect, useState } from 'react';
import { fetchFinancials } from '../services/financials';
import StockChart from './StockChart';

const StockData: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchFinancials();
      setData(result);
    };
    getData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.stock}</h1>
      <StockChart />
      {/* Render the financial data here */}
    </div>
  );
};

export default StockData;

