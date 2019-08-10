import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import {getDummyText} from 'lib/api/exampleAPI';

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

const API_EXAMPLE = "counter/API_EXAMPLE";
export const getExample = createAction(API_EXAMPLE, getDummyText);

/*
  HANDLE ACTIONS
*/
export default handleActions({
  /*
   * Normal type action
   */
  [SET_SOMETHING]:setSomethingAction,

  /**
   * Async type action
   * Use the pender library
   */
  ...pender({
    type: API_EXAMPLE,
    onSuccess: (state, action) => {
      console.log('onSuccess action :', action);
      return {
        ...state,
        data: action.payload
      }
    },
    onFailure: (state, action) => {
      console.log('onFailure action :', action);
      return {
        ...state,
        data: {
          title: 'the error is occured!'
        }
      }
    }
  })
}, initialState);