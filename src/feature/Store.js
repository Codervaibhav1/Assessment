import { configureStore } from "@reduxjs/toolkit";
import UiReducer from '../feature/slice/uiSlice'
const store = configureStore({
  reducer:{
       Ui:UiReducer
  }
})

export default store