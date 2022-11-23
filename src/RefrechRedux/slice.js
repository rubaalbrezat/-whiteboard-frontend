import { createSlice } from "@reduxjs/toolkit";

const initState = {
	refreshMain: 0,

}

export const RefsherRedux = createSlice({

	name: 'redux',
	initState,
	reducers: {
		SetRefreshMain: (state, action) => {
			state.refreshMain = state + 1

		}
		
	
	}

})

export const{
	SetRefreshMain

}=RefsherRedux.actions

export default RefsherRedux.reducer