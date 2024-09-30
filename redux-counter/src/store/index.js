// const redux = require('redux');
import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './Counter-Slice'
import AuthSlice from './auth-slice'

const store = configureStore({
    reducer: { counter: CounterSlice, auth: AuthSlice }
})


export default store;