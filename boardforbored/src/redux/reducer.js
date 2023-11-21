const INITIAL_STATE = {
    cartItems: [],
    customer: { name: "User1", userName: "user1", password: "password", email: 'user1@gmail.com' },
    admin: { name: 'Admin1', userName: "admin1", password: "password", email: 'admin1@gmail.com' }
};

const cartreducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_CART':
            return { ...state, cartItems: [...state.cartItems, action.newItem] };
        case 'REMOVE_FROM_CART':
            return { ...state, cartItems: state.cartItems.filter((item, index) => index !== action.index) }
        case 'SAVE_USER':
            return { ...state, customer: action.user }
        default: return state;
    }

};

export default cartreducer;