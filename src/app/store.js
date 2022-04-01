import { configureStore } from '@reduxjs/toolkit';
import metricReducer from '../features/metric/metricSlice';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    metric: metricReducer,
    counter: counterReducer,
  }
})