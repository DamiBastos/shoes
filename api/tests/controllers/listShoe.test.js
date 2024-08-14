const request = require('supertest');
const express = require('express');
const {get} = require('../../controllers/shoe'); 
const db = require("../../models/index");
const createHttpError = require('http-errors');

const { Shoe, Color, Size, color_shoe, size_shoe } = db;

const app = express();
app.use(express.json());
app.get('/shoe', get);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

jest.mock('../../models', () => ({
  Shoe: {
    findAll: jest.fn(),
  },
  Color: {},
  Size: {},
}));

describe('GET /shoe', () => {
  it('Debería retornar todos los zapatos con código 200', async () => {
    const shoes = [
      {
        id: 1,
        model: 'Model X',
        brand: 'Brand X',
        colors: [
          { id: 1, name: 'Red', color_shoe: { image: 'red.jpg' } },
          { id: 2, name: 'Blue', color_shoe: { image: 'blue.jpg' } },
        ],
        sizes: [
          { id: 1, size: 42 },
          { id: 2, size: 43 },
        ],
      },
    ];

    Shoe.findAll.mockResolvedValue(shoes);

    const res = await request(app).get('/shoe');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      code:200,
      status:true,
      message: 'Shoes retrieved successfully',
      body: shoes
    });
  });

  it("Debería manejar errores y llamar a next con un error HTTP", async () => {
    const errorMessage = "Error al obtener zapatos";
    Shoe.findAll.mockRejectedValue(new Error(errorMessage));

    const res = await request(app).get("/shoe");

    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty("message", `[Error retrieving shoes] - [shoes - GET]: ${errorMessage}`);
  });
});
