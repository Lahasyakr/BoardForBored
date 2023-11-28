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

export const updateAdminOrders = (index) => {
    return {
        type: 'UPDATE_ADMIN_ORDER',
        index: index
    }
}

export const removeAdminOrder = (index) => {
    return {
        type: 'REMOVE_ADMIN_ORDER',
        index: index
    }
}

export const updateAdminGame = (obj) => {
    return {
        type: 'UPDATE_ADMIN_GAME',
        obj: obj
    }
}

export const addAdminGame = (obj) => {
    return {
        type: 'ADD_ADMIN_GAME',
        obj: obj
    }
}

export const deleteAdminGame = (index) => {
    return {
        type: 'DELETE_ADMIN_GAME',
        index: index
    }
}


