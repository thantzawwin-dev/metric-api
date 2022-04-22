import axios from 'axios'
import { MockText } from '../../assets'

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

// export function fetchMetrics(amount = 1) {
//   wait();
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(MockText), 500)
//   );
// }

