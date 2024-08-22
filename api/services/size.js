const { where } = require('sequelize');
const { ErrorObject } = require('../helpers/error')
const db = require("../models/index");

const { Size } = db

exports.postSize = async (color) => {
    try {
      const newSize = await Size.create(color)
      return newSize
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500)
    }
  }

exports.getSizes = async () =>{
    try {
      const sizes = await Size.findAll({
        order: [
          ['number', 'ASC'],
      ],
      })
      return sizes
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

exports.getSize = async (id) =>{
  try {
    const size = await Size.findOne({ where: { id } })    
    if (!size) {
      throw new ErrorObject('Size no encontrado', 404);
    }
      return size
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateSize = async (id, body) => {
  try {
    const size = await Size.findByPk(id)
    if (!size) {
      throw new ErrorObject('SizeId updated failed', 404)
    }
    await size.update(body)
    return size
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.deleteSize = async (id) => {
  const size = await Size.findByPk(id)
  if (size) {
    Size.destroy({ where: { id: size.id } })
  } else {
    throw new ErrorObject('Size deleted failed', 404)
  }
}