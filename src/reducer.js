export const initialState = {
    cart: [],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex >= 0) {
          const updatedCart = [...state.cart];
          updatedCart[existingItemIndex].quantity += 1;
          return { ...state, cart: updatedCart };
        }
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
  
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
  
      case 'REMOVE_ITEM':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id),
        };
  
      default:
        return state;
    }
  };
