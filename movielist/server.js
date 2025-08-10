require("dotenv").config();

const db = require("./config/db");
const app = require("./app");
const PORT = process.env.PORT || 5000;
db().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
});
