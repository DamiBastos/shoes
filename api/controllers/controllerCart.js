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
      const userId = req.body.user.id;
      const { productId } = req.body;
  
      let cart = await db.Cart.findOne({ where: { user_id: userId } });
  
      if (!cart) {
        cart = await db.Cart.create({
          user_id: userId,
          items: [],
          discount: 0,
          subtotal: 0,
          total: 0,
        });
      }
  
      const product = await db.Shoe.findByPk(productId, {
        include: [
          {
            model: db.Color,
            through: {
              attributes: ['image']
            }
          },
        ]        
      });
  
      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }
  
      // Buscar si el producto ya existe en el carrito
      let existingItemIndex = cart.items.findIndex(item => item.productId === productId);
  
      let updatedItems = [...cart.items]; // Crear una copia del array de items
  
      if (existingItemIndex !== -1) {
        // Si el producto ya existe, incrementar la cantidad
        let updatedItem = { ...updatedItems[existingItemIndex] }; // Crear una copia del objeto item
        updatedItem.quantity += 1;
        updatedItem.price = updatedItem.price * updatedItem.quantity;

        updatedItems[existingItemIndex] = updatedItem; // Reemplazar el item en la copia del array
      } else {
        // Si el producto no existe, agregar un nuevo ítem
        const newItem = {
          productId,
          quantity: 1,
          image: product.Colors[0].color_shoe.image,
          unit_price: product.price,
          price: product.price,
          name: product.model,
        };
        updatedItems = [...updatedItems, newItem]; // Agregar el nuevo ítem a la copia del array
      }
  
      // Recalcular subtotal y total
      const calculatedSubtotal = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
  
      cart.subtotal = calculatedSubtotal;
      cart.total = calculatedSubtotal - cart.discount;
  
      // Actualizar los items del carrito con la nueva copia modificada
      cart.items = updatedItems;
  
      // Guardar el carrito actualizado
      await cart.save();
  
      console.log("Carrito guardado:", cart); // Verificar el carrito guardado
      return res.status(200).json({ cart });
    } catch (error) {
      console.error("Error al guardar el carrito:", error);
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
