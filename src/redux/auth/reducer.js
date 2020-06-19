import types from './types';

const initialState={
  error:null
}

const reducer=(state=initialState,action)=>{
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        error:null
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        error:action.err
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        error:null
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        error:null
      };
    case types.REGISTER_ERROR:
      return{
        ...state,
        error:action.err
      }
    default:
      return state;
  }
}

export default reducer;