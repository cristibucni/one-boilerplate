import { push } from 'connected-react-router';
import { SET_EXAMPLE } from './types';

export const setExample = (payload) => ({ type: SET_EXAMPLE, payload });

export const fetchExample = () => async (dispatch) => {
  try {
    dispatch(push('/example'));
    // API CALLS
    // const res = axios.get
  } catch (e) {
    // dispatch error handler
  }
};
