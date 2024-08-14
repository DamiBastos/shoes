const { getShoe } = require("../../services/shoe.js");
const db = require("../../models/index");

const { Shoe, Color, Size, color_shoe, size_shoe } = db;

// Mock de la base de datos
jest.mock("../../models", () => ({
  Shoe: {
    findOne: jest.fn(),
  },
  Color: {},
  Size: {},
  color_shoe: {},
  size_shoe: {},
}));

describe("getShoe", () => {
  const shoeId = 1;
  const shoeData = {
    id: shoeId,
    model: "Model X",
    brand: "Prueba marca",
    genre: "genre",
    description: "Una descripcion de prueba",
    stock: 0,
    price: 1000,
    discount: 10,
    provider: "prueba proveedor",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Debería retornar el zapato cuando se encuentra por ID", async () => {
    Shoe.findOne.mockResolvedValue(shoeData);

    const result = await getShoe(shoeId);

    expect(Shoe.findOne).toHaveBeenCalledWith({
      where: { id: shoeId },
      include: [
        { model: Color, through: color_shoe },
        { model: Size, through: size_shoe },
      ],
    });
    expect(result).toEqual(shoeData);
  });

  it("Debería retornar null cuando no se encuentra el zapato por ID", async () => {
    Shoe.findOne.mockResolvedValue(null);

    const result = await getShoe(shoeId);

    expect(Shoe.findOne).toHaveBeenCalledWith({
      where: { id: shoeId },
      include: [
        { model: Color, through: color_shoe },
        { model: Size, through: size_shoe },
      ],
    });
    expect(result).toBeNull();
  });
});
