require("dotenv").config();

const connectDB = require("./config/db");
const app = require("./app");

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server Started");
  });
});
