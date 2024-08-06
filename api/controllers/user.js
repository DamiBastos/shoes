const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success');

const { registerUser, loginUser } = require('../services/user');

const list = catchAsync(async (req, res, next) => {
})

const register = catchAsync(async (req, res, next) => {
  try {
    const { body } = req;
    const user = await registerUser(body);
    endpointResponse({
      res,
      message: 'User created successfully',
      body: user,
    });
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode || 500,
      `[Error creating user] - [user - POST]: ${error.message}`
    );
    next(httpError);
  }
});

const login = catchAsync(async (req, res, next) => {
  try {
    const { body } = req;
    const { user, token } = await loginUser(body);

    endpointResponse({
      res,
      message: 'User logged in successfully',
      body: { user },
      token,
    });

    res.header('auth-token', token); 
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode || 500,
      `[Error logging in] - [user - POST]: ${error.message}`
    );
    next(httpError);
  }
});


  const put = catchAsync(async (req, res, next) => {
  })

  const findById = catchAsync(async (req, res, next) => {
  })

  const destroy = catchAsync(async (req, res, next) => {
  })


  module.exports = { register,login, put, findById, destroy, list}