const db = require("../models/index");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const controllerPurchase = {
  list: async (req, res) => {
    try {
      const purchases = await db.Purchase.findAll();
      if (purchases.length > 0) {
        return res.status(200).json({ purchases });
      } else {
        return res.status(404).send("No hay compras que mostrar");
      }
    } catch (error) {
      console.error(error);
    }
  },
  findByPk: async (req, res) => {
    const { id } = req.params;
    const purchase = await db.Purchase.findByPk(id);
    if (purchase) {
      return res.status(200).json({ purchase });
    } else {
      return res.status(404).send("No se encuentra la compra");
    }
  },
  findByUser: async (req, res) => {
    const { id } = req.params;
    const purchase = await db.Purchase.findAll({ where: { user_id: id } });
    if (purchase && purchase.length > 0) {
      return res.status(200).json({ purchase });
    } else {
      return res.status(404).send("No se encuentran compras");
    }
  },
  create: async (req, res) => {
    const {
      email,
      postal_code,
      type_ship,
      name,
      lastname,
      phone,
      street,
      number_street,
      department,
      neighborhood,
      city,
      type_payment,
      state_purchase,
      items,
      total,
      subtotal,
      user_id,
    } = req.body;
    const newPurchase = await db.Purchase.create({
      email,
      postal_code,
      type_ship,
      name,
      lastname,
      phone,
      street,
      number_street,
      department,
      neighborhood,
      city,
      type_payment,
      state_purchase,
      items,
      total,
      subtotal,
      user_id,
    });
    newPurchase.save();
    return res.status(200).json({ newPurchase });
  },
  edit: async (req, res) => {
    const { state_purchase, type_ship, type_payment } = req.body;
    const { id } = req.params;
    const updatePurchase = await db.Purchase.update(
      {
        state_purchase,
        type_ship,
        type_payment,
      },
      { where: { id } }
    );
    if (updatePurchase == 1) {
      return res.status(200).json("compra editada con exito");
    } else {
      return res.status(400).json("compra no encontrado");
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const deleteShoe = db.Purchase.destroy({
      where: { id },
    });
    if (deletePurchase) {
      return res.status(200).json("compra eliminada con exito");
    } else {
      return res.status(400).json("compra no encontrado");
    }
  },
};

module.exports = controllerPurchase;
