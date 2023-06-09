import CustomAPIError from "../errors/custom-errors.js";
export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.mesage });
  }
  return res.status(500).json({ msg: err.message });
};

