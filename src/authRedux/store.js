import { configureStore } from "@reduxjs/toolkit";
import redux from './slice'

export const store = configureStore({
	redux:{
       auth: redux
	}
})