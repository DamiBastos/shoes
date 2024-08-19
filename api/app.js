var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors"); // Importa el módulo cors
var verifyToken = require("./middlewares/verifyToken.js")

var indexRouter = require("./routes/index");
var userRouter = require("./routes/users");
var shoeRouter = require("./routes/shoes");
var cartRouter = require("./routes/carts");
var colorRouter = require("./routes/color");
var sizeRouter = require("./routes/size");
var purchaseRouter = require("./routes/purchases");
// const { verify } = require("crypto");

var app = express();

app.use(
  cors({
    origin:[
	"http://149.50.130.212",
	"http://149.50.130.212:80", 
	"http://149.50.130.212:81",
	"http://www.shoesmarket.com.ar",
	"http://shoesmarket.com.ar",
  "http://localhost",
  "http://localhost:80"
	], // Origen permitido (puedes usar "*", pero es menos seguro)
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Cabeceras permitidas
    exposedHeaders: ['auth-token']

  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/",
  //verifyToken,
  indexRouter);
app.use("/user", userRouter);
app.use("/shoe", shoeRouter);
app.use("/cart", cartRouter);
app.use("/purchase", purchaseRouter);
app.use("/color", colorRouter);
app.use("/size", sizeRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// Middleware para manejar errores
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
});

module.exports = app;
