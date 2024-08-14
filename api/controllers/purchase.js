const createHttpError = require("http-errors");
const { catchAsync } = require("../helpers/catchAsync");
const { endpointResponse } = require("../helpers/success");
const {
  postPurchase,
  getPurchase,
  listPurchases,
  getPurchaseByUser,
  putPurchase,
} = require("../services/purchase");

const post = catchAsync(async (req, res, next) => {
  try {
    const { user_id } = req.body;
    const purchase = await postPurchase(req.body, user_id);

    endpointResponse({
      res,
      message: "Purchase added in successfully",
      body: { purchase },
    });
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode || 500,
      `[Error adding purchase] - [purchase - POST]: ${error.message}`
    );
    next(httpError);
  }
});

const get = catchAsync(async (req, res, next) => {
  try {
    const { id } = req.params;
    const purchase = await getPurchase(id);
    endpointResponse({
      res,
      message: "Purchase retrieving in successfully",
      body: { purchase },
    });
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode || 500,
      `[Error retrieving purchase] - [purchase - GET]: ${error.message}`
    );
    next(httpError);
  }
});

const getByUser = catchAsync(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const purchase = await getPurchaseByUser(userId);
    endpointResponse({
      res,
      message: "Purchase retrieving in successfully",
      body: { purchase },
    });
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode || 500,
      `[Error retrieving purchase] - [purchase - GET]: ${error.message}`
    );
    next(httpError);
  }
});

const list = catchAsync(async (req, res, next) => {
  try {
    const purchase = await listPurchases();
    endpointResponse({
      res,
      message: "Purchases retrieving in successfully",
      body: { purchase },
    });
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode || 500,
      `[Error retrieving in purchases] - [purchase - GET]: ${error.message}`
    );
    next(httpError);
  }
});

const put = catchAsync(async (req, res, next) => {
  try {
    const { id } = req.params;
    const purchase = await putPurchase(req.body, id);

    endpointResponse({
      res,
      message: "Purchase edited in successfully",
      body: { purchase },
    });
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode || 500,
      `[Error editing purchase] - [purchase - PUT]: ${error.message}`
    );
    next(httpError);
  }
});

module.exports = { post, get, list, getByUser, put };
