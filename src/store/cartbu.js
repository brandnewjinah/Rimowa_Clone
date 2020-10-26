// Action types
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
export const GET_TOTAL = "GET_TOTAL";
const ADD_TAG = "ADD_TAG";

// Action creators
export const addItem = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_ITEM,
      payload: {
        data,
      },
    });
  };
};

export const removeItem = (data) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: {
        data,
      },
    });
  };
};

export const increase = (id) => {
  return (dispatch) => {
    dispatch({
      type: INCREASE,
      payload: {
        id,
      },
    });
  };
};

export const decrease = (id) => {
  return (dispatch) => {
    dispatch({
      type: DECREASE,
      payload: {
        id,
      },
    });
  };
};

export const getTotal = () => {
  return (dispatch) => {
    dispatch({
      type: GET_TOTAL,
    });
  };
};

export const addTag = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TAG,
      payload: {
        data,
      },
    });
  };
};

// Reducer
const reducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    let { qty } = state;
    const item = { ...action.payload.data, qty: 1 };
    return { ...state, items: [item], qty: qty + 1 };
  }
  if (action.type === REMOVE_ITEM) {
    const { qty } = state;
    return {
      ...state,
      items: state.items.filter((item) => item.id !== action.payload.data.id),
      qty: qty - action.payload.data.qty,
    };
  }
  if (action.type === INCREASE) {
    let newItems = state.items.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    const { qty } = state;
    return { ...state, items: newItems, qty: qty + 1 };
  }
  if (action.type === DECREASE) {
    let newItems = state.items.map((item) => {
      if (item.id === action.payload.id) {
        item = { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    const { qty } = state;
    return { ...state, items: newItems, qty: qty - 1 };
  }
  if (action.type === GET_TOTAL) {
    // console.log("getting total");
    let { total } = state.items.reduce(
      (cartTotal, item) => {
        // console.log(item);
        const { price, qty } = item;
        const itemTotal = price * qty;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        total: 0,
      }
    );
    return { ...state, total };
  }
  if (action.type === ADD_TAG) {
    let { qty } = state;
    const item = { ...action.payload.data, qty: 1 };
    return { ...state, items: [item], qty: qty + 1 };
  }
  return state;
};

export default reducer;
