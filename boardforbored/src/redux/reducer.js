const INITIAL_STATE = {
    cartItems: [],
    customer: { name: "user1", userName: "user1", password: "password" }
};

const cartreducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_CART':
            return { ...state, cartItems: [...state.cartItems, action.newItem] };
        case 'REMOVE_FROM_CART':
            return { ...state, cartItems: state.cartItems.filter((item, index) => index !== action.index) }
        default: return state;
    }

};

export default cartreducer;