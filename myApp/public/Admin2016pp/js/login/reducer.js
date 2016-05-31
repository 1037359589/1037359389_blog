/**
 * Created by bll on 16/4/15.
 */
import {TO_REGISTER,TO_FORGET} from "./actions";
import { combineReducers } from 'redux';
const initState={
    register:false,
    forget:false
};
export default function changeForm(state=initState,action){
    switch(action.type){
        case TO_REGISTER:
            return {
                register:!state.register,
                forget:state.forget
            };
        case TO_FORGET:
            return {
                forget:!state.forget,
                register:state.register
            };
        default:
            return {
                register:state.register,
                forget:state.forget
            }
    }
}