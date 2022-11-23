import { combineReducers,createStore } from "redux";
import authReducer from './reducers/authReducer'
import RefsherReducer from './reducers/refresherReducer'

const reducers = combineReducers({authReducer,RefsherReducer});


function store(){
	return createStore(reducers);

}

export default store();
