const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { postShoe } = require('../services/shoe');
const { addItem, getCart, emptyCart } = require('../services/cart');


const add = catchAsync(async (req, res, next) => {
  try {
    const { userId, productId, size } = req.body;
    const cart = await addItem(userId, productId, size);

    endpointResponse({
      res,
      message: 'Item added in successfully',
      body: { cart },
    });

  } catch (error) {
    const httpError = createHttpError(
      error.statusCode || 500,
      `[Error adding item] - [item - POST]: ${error.message}`
    );
    next(httpError);
  }
});


  const get = catchAsync(async (req, res, next) => {
    try{
      const{userId} = req.params
    const cart = await getCart(userId);
    endpointResponse({
      res,
      message: 'Cart retrieving in successfully',
      body: { cart },
    });

  } catch (error) {
    const httpError = createHttpError(
      error.statusCode || 500,
      `[Error retrieving cart] - [cart - GET]: ${error.message}`
    );
    next(httpError);
  }
  })

  const empty = catchAsync(async (req, res, next) => {
    try{
      const{userId} = req.body
    const cart = await emptyCart(userId);
    endpointResponse({
      res,
      message: 'Cart empty in successfully',
      body: { cart },
    });
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode || 500,
      `[Error empty cart] - [cart - UPDATE]: ${error.message}`
    );
    next(httpError);
  }
  })


  module.exports = { add, get, empty}