const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { getSizes, deleteSize, getSize, postSize, updateSize } = require('../services/size')

module.exports = {
get: catchAsync(async (req, res, next) => {
  try {
    const response = await getSizes()
    endpointResponse({
      res,
      message: 'Sizes retrieved successfuly',
      body: response,
    })
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode,
      `[Error retrieving sizes] - [sizes - GET]: ${error.message}`,
    )
    next(httpError)
  }
}),

post: catchAsync(async (req, res, next) => {
    try {
      const { body } = req
      const response = await postSize(body)
      endpointResponse({
        res,
        message: 'size created successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating size] - [size - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  put: catchAsync(async (req, res, next) => {
      try {
        const { id } = req.params
        const { body } = req
        const response = await updateSize(id, body)
        endpointResponse({
          res,
          message: 'size updated successfully',
          body: response,
        })
      } catch (error) {
        const httpError = createHttpError(
          error.statusCode,
          `[Error updating size] - [size - PUT]: ${error.message}`,
        )
        next(httpError)
  
      }
  }),

  findById: catchAsync(async (req, res, next) => {
    try {
      const { params } = req
      const response = await getSize(params.id)
      endpointResponse({
        res,
        message: 'Size retrieving successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving size] - [size - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params
      const shoe = await deleteSize(id)
      endpointResponse({
        res,
        message: 'size successfuly deleted',
        body: shoe,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting size] - [size - DELETE]: ${error.message}`,
      )
      next(httpError)
    }
  })
}