import React, { useReducer } from 'react'
import { initState, RefsherReducer } from '../reducers/refresherReducer';

export const RefreshContext = React.createContext();


function RefreshProvider(props) {
	// const [refreshMain, setRefreshMain] = useState(0);
	const [stateRefresh, dispatchRefresh] = useReducer(RefsherReducer, initState)


	const value = { stateRefresh, dispatchRefresh };
	return (
		<RefreshContext.Provider value={value}>
			{props.children}
		</RefreshContext.Provider>
	)
}

export default RefreshProvider