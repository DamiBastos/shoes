const db = require("../models/index");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const controllerShoe = {
  list: async (req, res) => {
    try {
      const shoes = await db.Shoe.findAll(
        {
          include: [
            {
              model: db.Color,
              through: {
                attributes: ['image']
              }
            },
            {
              model: db.Size,
              through: {
                attributes: [] 
              }
            }
          ]
        }
      );
      if (shoes) {
        return res.status(200).json({ shoes });
      } else {
        return res.status(404).send("No hay productos que mostrar");
      }
    } catch (error) {
      console.error(error);
    }
  },
  findByPk: async (req, res) => {
    const { id } = req.params;
    const shoe = await db.Shoe.findByPk(id,
      {
        include: [
          {
            model: db.Color,
            through: {
              attributes: ['image'] 
            }
          },
          {
            model: db.Size,
          }
        ]
      }
    );
    if (shoe) {
      return res.status(200).json({ shoe });
    } else {
      return res.status(404).send("No se encuentra el producto");
    }
  },
  create: async (req, res) => {
    const {
      model,
      brand,
      color,
      size,
      genre,
      description,
      stock,
      image,
      price,
      discount,
      provider
    } = req.body;
    const newShoe = await db.Shoe.create({
      model,
      brand,
      color,
      size,
      genre,
      description,
      stock,
      image,
      price,
      discount,
      provider
    });
    newShoe.save();
    return res.status(200).json({ newShoe });
  },
  edit: async (req, res) => {
    const {
      model,
      brand,
      color,
      size,
      genre,
      description,
      stock,
      image,
      price,
      discount,
      provider
    } = req.body;
    const { id } = req.params;
    const updateShoe = await db.Shoe.update(
      {
        model,
        brand,
        color,
        size,
        genre,
        description,
        stock,
        image,
        price,
        discount,
        provider
      },
      { where: { id } }
    );
    if (updateShoe == 1) {
      return res.status(200).json("Producto editado con exito");
    } else {
      return res.status(400).json("Producto no encontrado");
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const deleteShoe = db.Shoe.destroy({
      where: { id },
    });
    if (deleteShoe) {
      return res.status(200).json("Producto eliminado con exito");
    } else {
      return res.status(400).json("Producto no encontrado");
    }
  },
};

module.exports = controllerShoe;
