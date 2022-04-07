import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMetrics } from './metricAPI';
import { kongMetricsResponseConverter } from '../../helper';

const initialState = {
  value: [],
  status: 'idle',
  raw: "",
  error: null,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getMetricsAsync = createAsyncThunk(
  'metric',
  async () => {
    try {
      // make an async call in the thunk
      const response = await fetchMetrics();
      // The value we return becomes the `fulfilled` action payload
      return response;
    } catch (err) {
      console.error(err);
      throw err;
      // If something went wrong, handle it here
    }
  }
);

export const metricSlice = createSlice({
  name: 'metric',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
    // getMetrics: (state, action) => {
    //   state.value = action.payload;
    // }
    removeError: (state, action) => {
      state.error = null;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getMetricsAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getMetricsAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      .addCase(getMetricsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = kongMetricsResponseConverter(action.payload);
        state.raw = action.payload;
        state.error = null;
      });
  },
});

export const {  } = metricSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMetrics = (state) => state.metric.value;

export const selectMetricsRaw = (state) => state.metric.raw;

export const selectMetricsStatus = (state) => state.metric.status;

export const selectMetricsError = (state) => state.metric.error;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectMetrics(getState());
  if (currentValue) {
    dispatch(incrementByAmount(amount));
  }
};

export default metricSlice.reducer;