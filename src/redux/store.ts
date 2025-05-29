import { configureStore } from '@reduxjs/toolkit'
import customeSlice from './slices/customerSlice'

export default configureStore({
  reducer: {
    customer: customeSlice
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
})