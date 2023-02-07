require("dotenv").config();
const config = {
  db: {
    uri() {
      if (!process.env.MONGO_URI) {
        throw new Error("Please input MONGO_URI in .env file");
      }
      return process.env.MONGO_URI;
    },
  },
  // MONGO_URI:
  //   "mongodb+srv://Botirjon:m8gCJT0oThDPs5ht@cluster0.edxewqr.mongodb.net/sammigram",
  server: {
    port() {
      if (!process.env.PORT) {
        throw new Error("Please input PORT in .env file");
      }
      return process.env.PORT;
    },
    jwtSecret() {
      if (!process.env.JWT_SECRET_KEY) {
        throw new Error("Please input JWT_SECRET_KEY in .env file");
      }
      return process.env.JWT_SECRET_KEY;
    },
  },
};

module.exports = { config };
