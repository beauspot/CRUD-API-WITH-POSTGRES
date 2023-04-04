import "express-async-errors";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import logger from "morgan";
import { StatusCodes } from "http-status-codes";
import sequelize from "./config/sequelize.js";

// custom middlewares
import { errorHandlerMiddleware } from "./middleware/errorHandler.js";
import { __404_err_page } from "./middleware/notFound.js";

dotenv.config();
const app = express();

app.use(xss());
app.use(cors());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
// app.use(session());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/", (req, res, next) => {
  res.status(StatusCodes.OK).json({ message: "Hello World" });
});

app.use(errorHandlerMiddleware);
app.use("*", __404_err_page);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected to the DB!");
    const port = process.env.PORT || 4040;
    app.listen(port, () =>
      console.info(`Server listening on http:\//localhost:${port}`)
    );
  } catch (error) {
    console.error(error.message);
  }
};

startServer();
