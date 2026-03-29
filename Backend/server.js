const dotenv = require("dotenv");
dotenv.config();

const app = require("./src/app");
const db = require("./src/configure/db");

const PORT = process.env.PORT || 5000;


// DB Connection Check
const startServer = async () => {
  try {

    const connection = await db.getConnection();
    console.log("MySQL Database Connected Successfully");

    connection.release();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.log("Database Connection Failed");
    console.log(error);
  }
};

startServer();