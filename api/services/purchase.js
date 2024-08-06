const { ErrorObject } = require('../helpers/error')
const db = require("../models/index");

const { Shoe } = db

exports.postShoe = async (shoe) => {
    try {
      const newShoe = await Shoe.create(shoe)
      return newShoe
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500)
    }
  }

exports.getShoes = async () =>{
    try {
      const shoes = await Shoe.findAll()
      return shoes
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500)
    }
}

exports.getShoe = async (id) =>{
  try {
    const shoe = await Shoe.findOne({ where: { id } })    
    if (!shoe) {
      throw new ErrorObject('Zapato no encontrado', 404);
    }
      return shoe
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateShoe = async (id, body) => {
  try {
    const shoe = await Shoe.findByPk(id)
    if (!shoe) {
      throw new ErrorObject('ShoeId updated failed', 404)
    }
    await shoe.update(body)
    return shoe
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.deleteShoe = async (id) => {
  const shoe = await Shoe.findByPk(id)
  if (shoe) {
    Shoe.destroy({ where: { id: shoe.id } })
  } else {
    throw new ErrorObject('Shoe deleted failed', 404)
  }
}