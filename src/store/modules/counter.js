import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import {getSomething} from '../../api/counter';
const initialState = {
  something: "",
  data: {}
};

const SET_SOMETHING = 'counter/SET_SOMETHING';
export const setSomething = createAction(SET_SOMETHING, );
const setSomethingAction = (state, action) => {
  console.log('action.payload === param :', action.payload);
  return {
    ...state,
    something: action.payload
  }
}
export const setSomethingAsync = (param) => dispatch => {
  setTimeout(
    () => {
      dispatch(setSomething(param))
    }, 1000
  )
}

const AXIOS_TEST = "counter/AXIOS_TEST";
export const axiosTest = createAction(AXIOS_TEST, getSomething);



















/*
  HANDLE ACTIONS
*/
export default handleActions({
  [SET_SOMETHING]:setSomethingAction,
  ...pender({
    type: AXIOS_TEST,
    onSuccess: (state, action) => {
      console.log('action :', action);
      return {
        ...state,
        data: action.payload
      }
    },
    onFailure: (state, action) => {
      console.log('f action :', action);
      return {
        ...state,
        data: {
          title: 'the error is occured!'
        }
      }
    }
  })
}, initialState);