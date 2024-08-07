const { ErrorObject } = require("../helpers/error");
const db = require("../models/index");

const { Shoe, Color, Size, color_shoe, size_shoe } = db;

exports.postShoe = async (shoe) => {
  const transaction = await Shoe.sequelize.transaction();

  try {
    const { colorIds, sizeIds, ...shoeDetails } = shoe;
    const newShoe = await Shoe.create(shoeDetails, { transaction });
    // Asociar colores
    if (colorIds && colorIds.length > 0) {
      const colorAssociations = colorIds.map((colorId) => ({
        shoe_id: newShoe.id,
        color_id: colorId,
        image: "default.jpg",
      }));
      await color_shoe.bulkCreate(colorAssociations, { transaction });
    }

    if (sizeIds && sizeIds.length > 0) {
      const sizeAssociations = sizeIds.map((sizeId) => ({
        shoe_id: newShoe.id,
        size_id: sizeId,
      }));
      await size_shoe.bulkCreate(sizeAssociations, { transaction });
    }

    // // Confirmar la transacción
    await transaction.commit();
    
    return newShoe;

  } catch (error) {
    await transaction.rollback();
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

exports.getShoes = async () => {
  try {
    const shoes = await Shoe.findAll({
      include: [
        {
          model: Color,
          through: {
            attributes: ["image"],
          },
        },
        {
          model: Size,
          through: {
            attributes: [],
          },
        },
      ],
    });
    return shoes;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

exports.getShoe = async (id) => {
  try {
    const shoe = await Shoe.findOne({
      where: { id },
      include: [
        {
          model: Color,
        },
        {
          model: Size,
        },
      ],
    });
    if (!shoe) {
      throw new ErrorObject("Zapato no encontrado", 404);
    }
    return shoe;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

exports.updateShoe = async (id, body) => {
  try {
    const shoe = await Shoe.findByPk(id);
    if (!shoe) {
      throw new ErrorObject("ShoeId updated failed", 404);
    }
    await shoe.update(body);
    return shoe;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

exports.deleteShoe = async (id) => {
  const shoe = await Shoe.findByPk(id);
  if (shoe) {
    Shoe.destroy({ where: { id: shoe.id } });
  } else {
    throw new ErrorObject("Shoe deleted failed", 404);
  }
};
