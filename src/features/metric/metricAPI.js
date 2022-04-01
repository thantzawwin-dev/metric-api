import axios from 'axios'

export const fetchMetrics = async () => {
  try {
    const response = await axios.get(`/metrics`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};