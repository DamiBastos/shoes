const { ErrorObject } = require("../helpers/error");
const db = require("../models/index");
const sendMail = require("../utils/mailed");

const { Purchase, Cart, User } = db;

exports.postPurchase = async (body, user_id) => {
  try {
    let user = await User.findOne({ where: { id: user_id } });
    console.log("usuario que compra:", user);
    if (!user) {
      throw new ErrorObject("Usuario no encontrado", 400 || 500);
    }
    const newPurchase = await Purchase.create(body);
    let cart = await Cart.findOne({ where: { user_id: user_id } });
    if (cart) {
      cart.items = [];
      cart.subtotal = 0;
      cart.total = 0;
      await cart.save();
    }
    sendMail(user.username, body.email, body.items);
    // sendWP()

    return newPurchase;
  } catch (error) {
    console.error("Error al guardar el carrito:", error);
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

exports.getPurchase = async (id) => {
  try {
    let cart = await Purchase.findOne({ where: { id } });
    return cart;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

exports.getPurchaseByUser = async (userId) => {
  try {
    let cart = await Purchase.findAll({ where: { user_id: userId } });
    return cart;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

exports.listPurchases = async () => {
  try {
    let cart = await Purchase.findAll();
    return cart;
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

exports.putPurchase = async (body, user_id) => {
  try {
    console.log("body put: ", body);
    const { state_payment, state_ship } = body;
    const updatePurchase = await db.Purchase.update(
      {
        state_payment,
        state_ship,
      },
      { where: { id: user_id } }
    );
    if (updatePurchase == 1) {
      return body;    
    } else {
      throw new ErrorObject("Compra no encontrada", error.statusCode || 500);
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};
