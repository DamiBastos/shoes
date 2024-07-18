const db = require("../models/index");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const controllerUser = {
  list: async (req, res) => {
    const users = await db.User.findAll();
    console.log(users);
    return res.status(200).json({ users });
  },
  login: async (req, res) => {
    try {
      const { password, email } = req.body;
      const user = await db.User.findOne({
        where: { email, password },
        include: [
          {
            model: db.Cart,
            as: "cart", // Especifica el alias que has definido en el modelo User
          },
        ],
      });

      if (user) {
        return res.status(200).json({ user });
      } else {
        return res.status(404).send("Usuario no encontrado");
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error interno del servidor");
    }
  },
  register: async (req, res) => {
    const transaction = await db.sequelize.transaction();
    try {
      const { name, phone, password, email, rol, isAdmin } = req.body;

      // Crear el usuario dentro de una transacción
      const user = await db.User.create(
        {
          name,
          email,
          phone,
          password,
          rol,
          isAdmin,
        },
        { transaction }
      );

      // Crear el carrito asociado al usuario solo si no es admin
      if (!isAdmin) {
        await db.Cart.create(
          {
            user_id: user.id,
            items: [], // Inicialmente vacío, pero puede ser un array de objetos JSON
            discounts: 0,
            subtotal: 0,
            total: 0,
          },
          { transaction }
        );
      }

      // Confirmar la transacción
      await transaction.commit();

      return res.status(200).json({ user });
    } catch (error) {
      // Revertir la transacción en caso de error
      await transaction.rollback();
      return res.status(400).json({ error: error.message });
    }
  },

  //   edit: null,
  //   delete: null,
};

module.exports = controllerUser;
