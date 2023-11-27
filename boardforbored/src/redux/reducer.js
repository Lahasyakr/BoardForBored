import { gamedetails } from "../data/gamedata";

const INITIAL_STATE = {
    cartItems: [],
    myOrders: [],
    customer: { name: "User1", lastname: "", userName: "user1", password: "password", email: 'user1@gmail.com', phNo: "" },
    admin: { name: 'Admin1', lastname: "", userName: "admin1", password: "password", email: 'admin1@gmail.com', phNo: "" },
    AdminGames: gamedetails,
    AdminOrders: []
};

const cartreducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_CART':
            return { ...state, cartItems: [...state.cartItems, action.newItem] };
        case 'REMOVE_FROM_CART':
            return { ...state, cartItems: state.cartItems.filter((item, index) => index !== action.index) }
        case 'EMPTY_CART':
            return { ...state, cartItems: [] };
        case 'SAVE_USER':
            return { ...state, customer: action.user }
        case 'ADD_ORDER':
            return { ...state, myOrders: state.myOrders.concat(action.orders) }
        default: return state;
    }

};

export default cartreducer;