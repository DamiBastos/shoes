exports.user = {
    username: {
      exists: {
        errorMessage: "Username cannot be null",
      },
      notEmpty: {
        errorMessage: "Username cannot be empty",
      },
    },
    email: {
      exists: {
        errorMessage: "Email cannot be null",
      },
      notEmpty: {
        errorMessage: "Email cannot be empty",
      },
    },
  };
  