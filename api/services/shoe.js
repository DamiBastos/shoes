const { ErrorObject } = require("../helpers/error");
const db = require("../models/index");
const sendMail = require("../utils/mailed");

const { Shoe, Color, Size, color_shoe, size_shoe } = db;

exports.postShoe = async (shoe) => {
  const transaction = await Shoe.sequelize.transaction();
  try {
    const { Colors, Sizes,image, ...shoeDetails } = shoe;
    const newShoe = await Shoe.create(shoeDetails, { transaction });
    if (Colors && Colors.length > 0) {
      const colorAssociations = Colors.map((colorId, index) => ({
        shoe_id: newShoe.id,
        color_id: colorId,
        image: index === 0 && image ? image : "notImage.jpg", // La imagen se asigna solo al primer color
      }));
      await color_shoe.bulkCreate(colorAssociations, { transaction });
    } else {
      const colorAssociations = [{
        shoe_id: newShoe.id,
        color_id: 1,
        image: image ? image : "notImage.jpg",
      }];
      await color_shoe.bulkCreate(colorAssociations, { transaction });
    }
    if (Sizes && Sizes.length > 0) {
      const sizeAssociations = Sizes.map((sizeId) => ({
        shoe_id: newShoe.id,
        size_id: sizeId,
      }));
      await size_shoe.bulkCreate(sizeAssociations, { transaction });
    }

      // Manejo de asociaciones de tallas
      const defaultSizeIds = Array.from({ length: 10 }, (_, i) => i + 6); // IDs del 5 al 14
      const sizeAssociations = (Sizes || []).map((sizeId) => ({
        shoe_id: newShoe.id,
        size_id: sizeId,
      }));
      // Añadir asociaciones para las tallas del 5 al 14
      const defaultSizeAssociations = defaultSizeIds.map((sizeId) => ({
        shoe_id: newShoe.id,
        size_id: sizeId,
      }));
      // Combina las asociaciones personalizadas con las predeterminadas
      const allSizeAssociations = [...sizeAssociations, ...defaultSizeAssociations];
      await size_shoe.bulkCreate(allSizeAssociations, { transaction });

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
          model: Color,through: color_shoe 
        },
        {
          model: Size, through: size_shoe 
        },
      ],
    });
    if (!shoe) {
      return null;
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
