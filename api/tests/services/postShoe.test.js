const { postShoe } = require("../../services/shoe.js");
const db = require("../../models/index");
const { ErrorObject } = require("../../helpers/error.js");

const { Shoe, color_shoe, size_shoe } = db;

// Mock de la transacción
jest.mock("../../models", () => ({
  Shoe: {
    create: jest.fn(),
    sequelize: {
      transaction: jest.fn().mockReturnValue({
        commit: jest.fn(),
        rollback: jest.fn(),
      }),
    },
  },
  Color: {},
  Size: {},
  color_shoe: {
    bulkCreate: jest.fn(),
  },
  size_shoe: {
    bulkCreate: jest.fn(),
  },
}));

describe("postShoe", () => {
  const shoeData = {
    model: "Model X",
    brand: "Prueba marca",
    genre: "genre",
    description: "Una descripcion de prueba",
    stock: 0,
    price: 1000,
    discount: 10,
    provider: "prueba proveedor",
    colorIds: [1, 2],
    sizeIds: [1, 2, 3],
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Debería crear un zapato y asociar colores y tallas correctamente", async () => {
    const transaction = await Shoe.sequelize.transaction();
    Shoe.create.mockResolvedValue({ id: 1, ...shoeData });
    color_shoe.bulkCreate.mockResolvedValue([]);
    size_shoe.bulkCreate.mockResolvedValue([]);

    const newShoe = await postShoe(shoeData);

    expect(Shoe.create).toHaveBeenCalledWith(
      expect.objectContaining({
        model: shoeData.model,
        brand: shoeData.brand,
        genre: shoeData.genre,
        description: shoeData.description,
        stock: shoeData.stock,
        price: shoeData.price,
        discount: shoeData.discount,
        provider: shoeData.provider,
      }),
      { transaction }
    );

    expect(color_shoe.bulkCreate).toHaveBeenCalledWith(
      expect.arrayContaining([
        { shoe_id: 1, color_id: 1, image: 'default.jpg' },
        { shoe_id: 1, color_id: 2, image: 'default.jpg' },
      ]),
      { transaction }
    );

    expect(size_shoe.bulkCreate).toHaveBeenCalledWith(
      expect.arrayContaining([
        { shoe_id: 1, size_id: 1 },
        { shoe_id: 1, size_id: 2 },
        { shoe_id: 1, size_id: 3 },
      ]),
      { transaction }
    );

    expect(transaction.commit).toHaveBeenCalled();
    expect(newShoe).toEqual(expect.objectContaining({ id: 1, ...shoeData }));
  });

  it("debería revertir la transacción si ocurre un error", async () => {
    const transaction = await Shoe.sequelize.transaction();
    Shoe.create.mockRejectedValue(new Error("Error al crear el zapato"));

    await expect(postShoe(shoeData)).rejects.toThrow(
      "Error al crear el zapato"
    );
    expect(transaction.rollback).toHaveBeenCalled();
  });

  it("Debería dar error y revertir si faltan datos obligatorios", async () => {
    const transaction = await Shoe.sequelize.transaction();

    // Eliminamos el campo 'model' para simular la falta de datos
    const incompleteShoeData = {
      ...shoeData,
      model: undefined,
    };

    Shoe.create.mockImplementation(() => {
      throw new Error("Error de validación: Falta el modelo");
    });

    await expect(postShoe(incompleteShoeData)).rejects.toThrow(
      "Error de validación: Falta el modelo"
    );

    expect(Shoe.create).toHaveBeenCalledWith(
      expect.objectContaining({
        brand: incompleteShoeData.brand,
        genre: incompleteShoeData.genre,
        description: incompleteShoeData.description,
        stock: incompleteShoeData.stock,
        price: incompleteShoeData.price,
        discount: incompleteShoeData.discount,
        provider: incompleteShoeData.provider,
      }),
      { transaction }
    );

    expect(transaction.rollback).toHaveBeenCalled();
  });
});
