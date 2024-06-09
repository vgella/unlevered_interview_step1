// src/services/financials.ts
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/financials';

export const fetchFinancials = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

