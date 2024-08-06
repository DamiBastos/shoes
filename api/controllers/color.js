const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { getColors, postColor, updateColor, getColor, deleteColor } = require('../services/color')

module.exports = {
get: catchAsync(async (req, res, next) => {
  try {
    const response = await getColors()
    endpointResponse({
      res,
      message: 'Colors retrieved successfuly',
      body: response,
    })
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode,
      `[Error retrieving colors] - [colors - GET]: ${error.message}`,
    )
    next(httpError)
  }
}),

post: catchAsync(async (req, res, next) => {
    try {
      const { body } = req
      const response = await postColor(body)
      endpointResponse({
        res,
        message: 'Color created successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating color] - [color - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  put: catchAsync(async (req, res, next) => {
      try {
        const { id } = req.params
        const { body } = req
        const response = await updateColor(id, body)
        endpointResponse({
          res,
          message: 'Color updated successfully',
          body: response,
        })
      } catch (error) {
        const httpError = createHttpError(
          error.statusCode,
          `[Error updating color] - [color - PUT]: ${error.message}`,
        )
        next(httpError)
  
      }
  }),

  findById: catchAsync(async (req, res, next) => {
    try {
      const { params } = req
      const response = await getColor(params.id)
      endpointResponse({
        res,
        message: 'Color retrieving successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving color] - [color - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params
      const shoe = await deleteColor(id)
      endpointResponse({
        res,
        message: 'Color successfuly deleted',
        body: shoe,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting color] - [color - DELETE]: ${error.message}`,
      )
      next(httpError)
    }
  })
}