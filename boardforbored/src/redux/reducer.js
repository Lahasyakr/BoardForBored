import { gamedetails } from "../data/gamedata";

const INITIAL_STATE = {
    cartItems: [],
    myOrders: [],
    customer: { name: "User1", lastname: "", userName: "user1", password: "password", email: 'user1@gmail.com', phNo: "" },
    admin: { name: 'Admin1', lastname: "", userName: "admin1", password: "password", email: 'admin1@gmail.com', phNo: "" },
    AdminGames: gamedetails,
    AdminOrders: [{ name: 'Aiden Rem', details: 'Jaipur', action: 0 },
    { name: 'John Doe', details: 'Phase 10', action: 1 },
    { name: 'Will Smith', details: 'Catan', action: 1 }]
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
        case 'UPDATE_ADMIN_ORDER':
            return {
                ...state, AdminOrders: state.AdminOrders.map((item, index) => {
                    if (action.index === index) { return { ...item, action: 1 } }
                    else return item
                })
            }
        case 'REMOVE_ADMIN_ORDER':
            return { ...state, AdminOrders: state.AdminOrders.filter((item, index) => index !== action.index) }

        case 'UPDATE_ADMIN_GAME':
            return {
                ...state, AdminGames: state.AdminGames.map((item, index) => {
                    if (item.id == action.obj.id) {
                        return { ...item, ...action.obj }
                    } else {
                        return item;
                    }
                })
            }
        case 'ADD_ADMIN_GAME':
            return { ...state, AdminGames: [...state.AdminGames, action.obj] }
        
        case 'DELETE_ADMIN_GAME':
            return {...state, AdminGames:state.AdminGames.filter((item, index) => index !== action.index)}
        default: return state;
    }

};

export default cartreducer;