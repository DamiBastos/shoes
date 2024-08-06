exports.cart = {

user_id: {
    exists: {
        errorMessage: "Email cannot be null",
      },
      notEmpty: {
        errorMessage: "Email cannot be empty",
      },
  },
  items: {
    exists: {
        errorMessage: "Email cannot be null",
      },
      notEmpty: {
        errorMessage: "Email cannot be empty",
      },
  },
  discount: {
    exists: {
        errorMessage: "Email cannot be null",
      },
      notEmpty: {
        errorMessage: "Email cannot be empty",
      },
  },
  subtotal: {
    exists: {
        errorMessage: "Email cannot be null",
      },
      notEmpty: {
        errorMessage: "Email cannot be empty",
      },
  },
  total: {
    exists: {
        errorMessage: "Email cannot be null",
      },
      notEmpty: {
        errorMessage: "Email cannot be empty",
      },
  },
}