export const addToCart = (req, res, next) => {
  const { productId } = req.body;
  const { userId } = req.params;
  const { cart } = req.session;

  if (!cart) {
    req.session.cart = {
      [id]: product,
    };
  } else {
    req.session.cart[id] = product;
  }

  res.status(200).json({
    status: "success",
    data: req.session.cart,
  });
};

export const removeFromCart = (req, res, next) => {
  const { id } = req.params;
  const { cart } = req.session;

  if (cart) {
    delete cart[id];
  }

  res.status(200).json({
    status: "success",
    data: req.session.cart,
  });
};
