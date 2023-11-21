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

