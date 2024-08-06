const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { postShoe, getShoes, getShoe, deleteShoe, updateShoe } = require('../services/shoe')

module.exports = {
get: catchAsync(async (req, res, next) => {
  try {
    const response = await getShoes()
    endpointResponse({
      res,
      message: 'Shoes retrieved successfuly',
      body: response,
    })
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode,
      `[Error retrieving comments] - [shoes - GET]: ${error.message}`,
    )
    next(httpError)
  }
}),

post: catchAsync(async (req, res, next) => {
    try {
      const { body } = req
      const response = await postShoe(body)
      endpointResponse({
        res,
        message: 'Shoe created successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creating shoe] - [shoe - POST]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  put: catchAsync(async (req, res, next) => {
      try {
        const { id } = req.params
        const { body } = req
        const response = await updateShoe(id, body)
        endpointResponse({
          res,
          message: 'Shoe updated successfully',
          body: response,
        })
      } catch (error) {
        const httpError = createHttpError(
          error.statusCode,
          `[Error updating info] - [shoe - PUT]: ${error.message}`,
        )
        next(httpError)
  
      }
  }),

  findById: catchAsync(async (req, res, next) => {
    try {
      const { params } = req
      const response = await getShoe(params.id)
      endpointResponse({
        res,
        message: 'Shoe retrieving successfully',
        body: response,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving shoe] - [shoe - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params
      const shoe = await deleteShoe(id)
      endpointResponse({
        res,
        message: 'Shoe successfuly deleted',
        body: shoe,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error deleting shoe] - [shoe - DELETE]: ${error.message}`,
      )
      next(httpError)
    }
  })
}