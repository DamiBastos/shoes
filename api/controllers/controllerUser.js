const db = require("../models/index");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var  generateToken  = require("../middlewares/generateToken")


const controllerUser = {
  list: async (req, res) => {
    const users = await db.User.findAll();
    return res.status(200).json({ users });
  },
  login: async (req, res) => {
    try {
      const { password, email } = req.body;
      const user = await db.User.findOne({
        where: { email },
        include: [
          {
            model: db.Cart,
            as: "cart",
          },
        ],
      });
      if (!user) {
        return res.status(404).send("Usuario no encontrado");
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(400).send("Contraseña incorrecta");
      }
      const token = generateToken(user);

      // Envía la respuesta con el token y el usuario
      return res.header('auth-token', token).json({
        error: null,
        data: { 
          user
         },
        
      });

    } catch (error) {
      console.log(error);
      return res.status(500).send("Error interno del servidor");
    }
  },
  register: async (req, res) => {
    const transaction = await db.sequelize.transaction();
    try {
      const { name, phone, email, rol, isAdmin } = req.body;

      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);

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
