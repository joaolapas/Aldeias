import { configureStore } from '@reduxjs/toolkit'
import resourcesSlice from '../resourcesSlice/resourcesSlice'

export const store = configureStore({
  reducer: {
    resources: resourcesSlice,
  },
})