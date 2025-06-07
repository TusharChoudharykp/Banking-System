import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { errorResponse } from "../utils/common/error-response";
import { AppError } from "../utils/errors/app-error";

const validateBankRegistration = (req: any, res: any, next: any) => {
  const { name, address, pincode, branchCode } = req.body;

  if (!name || !address || !pincode || !branchCode) {
    errorResponse.message = "Something went wrong while registering the bank";
    errorResponse.error = new AppError(
      ["Missing required fields: name, address, pincode, or branchCode"],
      StatusCodes.BAD_REQUEST
    );

    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  next();
};

export { validateBankRegistration };
