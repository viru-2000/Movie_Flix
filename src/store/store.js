import { configureStore } from "@reduxjs/toolkit";
import serarchreduce from './slices/searchSlice'

export default configureStore({
    reducer: {
      search: serarchreduce,
  },
});
