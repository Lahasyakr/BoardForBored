export const addToCart = (item) => {
    return {
        type: 'ADD_CART',
        newItem: item
    };
};

export const removeFromCart = (index) => {
    return {
        type: 'REMOVE_FROM_CART',
        index: index
    };
};

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART'
    };
};

export const saveUser = (user) => {
    return {
        type: 'SAVE_USER',
        user: user
    }
}

export const addMyOrder = (orders) => {
    return {
        type: 'ADD_ORDER',
        orders: orders
    }
}

