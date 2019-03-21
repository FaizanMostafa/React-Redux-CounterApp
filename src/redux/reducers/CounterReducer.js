import { INC_COUNTER, DEC_COUNTER, RESET_COUNTER } from "./../actions/index";

var initialState = {
  name: "Klaina",
  counter: 0
};

export default function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case INC_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1
      };
    }
    case DEC_COUNTER: {
      return {
        ...state,
        counter: state.counter - 1
      };
    }
    case RESET_COUNTER: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
