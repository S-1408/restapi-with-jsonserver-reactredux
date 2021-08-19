import {combineReducers} from 'redux';
import userReducers from './reducer';
const rootReducer = combineReducers({
   dataReducer: userReducers
})
export default rootReducer;