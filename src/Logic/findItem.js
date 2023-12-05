const findItem = (cartItems, productName) => {
  return cartItems.find((item) => item.product === productName);
};

export default findItem;
