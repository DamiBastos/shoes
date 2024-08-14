const { ErrorObject } = require("../helpers/error");
const db = require("../models/index");

const { Shoe, Cart } = db;

exports.addItem = async (userId, productId, size) => {
  try {
    let cart = await Cart.findOne({ where: { user_id: userId } });

    if (!cart) {
      cart = await Cart.create({
        user_id: userId,
        items: [],
        discount: 0,
        subtotal: 0,
        total: 0,
      });
    }

    const product = await Shoe.findByPk(productId, {
      include: [
        {
          model: db.Color,
          through: {
            attributes: ["image"],
          },
        },
      ],
    });

    if (!product) {
      throw new ErrorObject("Producto no encontrado", 404);
    }

    let existingItemIndex = cart.items.findIndex(
      (item) => item.productId === productId
    );

    let updatedItems = [...cart.items];

    if (existingItemIndex !== -1) {
      let updatedItem = { ...updatedItems[existingItemIndex] };
      updatedItem.quantity += 1;
      updatedItem.price = updatedItem.unit_price * updatedItem.quantity;

      updatedItems[existingItemIndex] = updatedItem;
    } else {
      const newItem = {
        productId,
        quantity: 1,
        image: product.Colors[0].color_shoe.image,
        unit_price: product.price,
        price: product.price,
        name: product.model,
        size,
        provider: product.provider
      };
      updatedItems = [...updatedItems, newItem];
    }

    const calculatedSubtotal = updatedItems.reduce(
      (sum, item) => sum + item.price,
      0
    );

    cart.subtotal = calculatedSubtotal;
    cart.total = calculatedSubtotal - cart.discount;

    cart.items = updatedItems;

    await cart.save();

    return cart;
  } catch (error) {
    console.error("Error al guardar el carrito:", error);
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

exports.getCart = async (userId) => {
  try {
    let cart = await db.Cart.findOne({ where: { user_id: userId } });
    return cart;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

exports.emptyCart = async (userId) => {
  try {
    let cart = await Cart.findOne({ where: { user_id: userId } });
    // Agregar el ítem al carrito
    const deleteItems = [];
    cart.items = deleteItems;

    // Calcula los nuevos subtotales y totales
    cart.subtotal = 0;
    cart.total = 0;

    // Guarda el carrito actualizado
    await cart.save();
    return cart;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};
