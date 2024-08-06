const { ErrorObject } = require('../helpers/error')
const bcrypt = require('bcrypt');
const db = require("../models/index");
const generateToken = require('../middlewares/generateToken');

const { User, Cart } = db

exports.registerUser = async (userData) => {
  const transaction = await db.sequelize.transaction();
  try {
    const { username, email,phone, password, isAdmin } = userData;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear el usuario dentro de una transacción
    const user = await User.create(
      {
        username,
        email,
        phone,
        password: hashedPassword,
        isAdmin,
      },
      { transaction }
    );
    // Crear el carrito asociado al usuario solo si no es admin
    if (!isAdmin) {
      await Cart.create(
        {
          user_id: user.id,
          items: [], // Inicialmente vacío, pero puede ser un array de objetos JSON
          discount: 0,
          subtotal: 0,
          total: 0,
        },
        { transaction }
      );
    }

    // Confirmar la transacción
    await transaction.commit();
    return user;
  } catch (error) {
    // Revertir la transacción en caso de error
    await transaction.rollback();
    throw new ErrorObject(error.message, 500);
  }
};

exports.loginUser = async ({ email, password }) => {
    try {
      const user = await User.findOne({
        where: { email },
        include: [
          {
            model: db.Cart,
            as: "cart",
          },
        ],
      });
  
      if (!user) {
        throw new ErrorObject("Usuario no encontrado", 404);
      }
  
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        throw new ErrorObject("Contraseña incorrecta", 400);
      }
  
      const token = generateToken(user);
      return { user, token };
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500);
    }
  };