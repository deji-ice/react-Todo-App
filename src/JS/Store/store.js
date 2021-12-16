import { configureStore } from "@reduxjs/toolkit"
import {reducer} from '../Reducers/reducer'

const store = configureStore({
    reducer:reducer
});
export default store;