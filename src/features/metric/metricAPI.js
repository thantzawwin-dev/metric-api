import axios from 'axios'

// delay
function wait(ms, value) {     
  return new Promise((resolve) => setTimeout(resolve, ms, value));   
}

export const fetchMetrics = async () => {
  try {
    const response = await axios.get(`/metrics`)//.then(value => wait(1000, value));
    return response.data;
  } catch (ex) {
    throw ex;
  }
};
