import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define Interface for payload
interface PayloadInterface {
  value: boolean
}

// Define the initial state using that type
const initialState: PayloadInterface = {
  value: false
}

export const isAuthenticatedSlice = createSlice({
  name: 'isAuthenticated',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setIsAuthenticated: (state, action: PayloadAction<PayloadInterface>) => {
      state.value = action.payload.value
    },
    clearIsAuthenticated: (state) => {
      state.value = false
    }
  }
})

export const { setIsAuthenticated, clearIsAuthenticated } = isAuthenticatedSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getIsAuthenticated = (state: RootState): boolean => state.isAuthenticated.value

export default isAuthenticatedSlice.reducer
