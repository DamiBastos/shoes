const createHttpError = require('http-errors')
const { catchAsync } = require('../helpers/catchAsync')
const { endpointResponse } = require('../helpers/success')
const { postShoe } = require('../services/shoe')

const list = catchAsync(async (req, res, next) => {
})

const post = catchAsync(async (req, res, next) => {
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
  })

  const put = catchAsync(async (req, res, next) => {
  })

  const findById = catchAsync(async (req, res, next) => {
  })

  const destroy = catchAsync(async (req, res, next) => {
  })


  module.exports = { post, put, findById, destroy, list}