import { combineReducers } from "redux";
import { operationsReducer } from './todoApp/reducers/operations';

export const rootReducer = combineReducers({
    operationsReducer,
})