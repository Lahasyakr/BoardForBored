 export const addToCart = (item) => {
    return {
        type: 'ADD_CART',
        newItem: item
    };
};

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        id: id
    };
};

