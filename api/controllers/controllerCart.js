const db = require("../models/index");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const controllerCart = {
  getCart: async (req, res) => {
    try {
      const { userId } = req.params;
      const cart = await db.Cart.findOne({ where: { user_id: userId } });

      if (cart) {
        return res.status(200).json({ cart });
      } else {
        return res.status(404).send("Carrito no encontrado");
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error interno del servidor");
    }
  },
  addItem: async (req, res) => {
    try {
      const userId = req.body.user.id; // Supongo que obtienes el ID del usuario autenticado de alguna manera
      const { productId, quantity } = req.body; // Obtén los detalles del ítem del cuerpo de la solicitud

      // Encuentra el carrito del usuario
      let cart = await db.Cart.findOne({ where: { user_id: userId } });

      if (!cart) {
        // Si no existe un carrito, crea uno
        cart = await db.Cart.create({
          user_id: userId,
          items: [],
          discounts: 0,
          subtotal: 0,
          total: 0,
        });
      }

      // Supongo que tienes un modelo de Producto para obtener detalles del producto
      const product = await db.Shoe.findByPk(productId);
      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
      console.log(product);
      const existingItem = cart.items.find(
        (item) => item.productId == productId
      );

      // Crea un nuevo ítem
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const newItem = {
          productId,
          quantity,
          price: product.price,
          name: product.model,
          image: product.image,
        };
        // Agregar el ítem al carrito
        const updatedItems = [...cart.items, newItem];
        cart.items = updatedItems;
      }

      // Calcula los nuevos subtotales y totales
      cart.subtotal += product.price * quantity;
      cart.total = cart.subtotal - cart.discounts; // Ajusta según tu lógica de descuentos

      // Guarda el carrito actualizado
      await cart.save();

      return res.status(200).json({ cart });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Error al agregar ítem al carrito" });
    }
  },
  deleteItem: async (req, res) => {
    try {
      const { userId, productId } = req.body;

      let cart = await Cart.findOne({ where: { user_id: userId } });

      if (!cart) {
        return res.status(404).json({ error: "Cart not found" });
      }

      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      const existingItem = cart.items.find(
        (item) => item.productId === productId
      );

      if (!existingItem) {
        return res.status(404).json({ error: "Item not found in cart" });
      }

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        cart.subtotal -= product.price;
      } else {
        cart.items = cart.items.filter((item) => item.productId !== productId);
        cart.subtotal -= product.price;
      }

      cart.total = cart.subtotal - cart.discounts;

      await cart.save();

      return res.status(200).json({ cart });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error removing item from cart" });
    }
  },
  emptyCart: async (req, res) => {
    try {
      const userId = req.body.user.id; // Supongo que obtienes el ID del usuario autenticado de alguna manera

      // Encuentra el carrito del usuario
      let cart = await db.Cart.findOne({ where: { user_id: userId } });

      // Agregar el ítem al carrito
      const deleteItems = [];
      cart.items = deleteItems;

      // Calcula los nuevos subtotales y totales
      cart.subtotal = 0;
      cart.total = 0;

      // Guarda el carrito actualizado
      await cart.save();

      return res.status(200).json({ cart });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error al vaciar carrito" });
    }
  },
};

module.exports = controllerCart;
