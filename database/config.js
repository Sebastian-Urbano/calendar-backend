const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
    throw new Error("Error initialization of the database");
  }
};

module.exports = {
  dbConnection,
};
