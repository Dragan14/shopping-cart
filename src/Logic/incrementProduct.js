const incrementProduct = (cartItems, product) => {
  return cartItems.map((item) => {
    if (item.product === product.product) {
      return {...item, quantity: item.quantity + 1};
    }
    return item;
  });
};

export default incrementProduct;
