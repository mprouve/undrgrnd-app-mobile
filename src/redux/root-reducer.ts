import { combineReducers } from '@reduxjs/toolkit'
import isAuthenticated from './slices/is-authenticated'

const rootReducer = combineReducers({
  isAuthenticated
})

export default rootReducer
