

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter(c => c.id !== action.payload.id) };
        case "CHANGE_CART_QTY":
            return {...state,cart:state.cart.filter(c=>c.id===action.payload.id?c.qty=action.payload.qty:c.qty)}
        default:
            return state
    }
}



export const sideReducer = (state, action) => {
    switch (action.type) {
        case "a":
            return { ...state, byascending:action.payload };
        case "fd":
            return { ...state, byfastdelivery: !state.byfastdelivery  };
        case "is":
            return { ...state, bystock:!state.bystock  }
        default:
            return state
    }
}