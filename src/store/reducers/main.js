import { SET_EXAMPLE } from 'store/actions/main/types';

const defaultState = {
  ok: false,
};

export default (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_EXAMPLE: {
      return { ...state, ok: payload };
    }
    default: {
      return state;
    }
  }
};
