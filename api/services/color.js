const { ErrorObject } = require('../helpers/error')
const db = require("../models/index");

const { Color } = db

exports.postColor = async (color) => {
    try {
      const newColor = await Color.create(color)
      return newColor
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500)
    }
  }

exports.getColors = async () =>{
    try {
      const colors = await Color.findAll()
      return colors
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

exports.getColor = async (id) =>{
  try {
    const color = await Color.findOne({ where: { id } })    
    if (!color) {
      throw new ErrorObject('Color no encontrado', 404);
    }
      return color
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateColor = async (id, body) => {
  try {
    const color = await Color.findByPk(id)
    if (!color) {
      throw new ErrorObject('ColorId updated failed', 404)
    }
    await color.update(body)
    return color
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.deleteColor = async (id) => {
  const color = await Color.findByPk(id)
  if (color) {
    Color.destroy({ where: { id: color.id } })
  } else {
    throw new ErrorObject('Color deleted failed', 404)
  }
}