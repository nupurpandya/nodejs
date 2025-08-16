require("dotenv").config();

const connectDb = require("./config/db");
const app = require("./app");

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
