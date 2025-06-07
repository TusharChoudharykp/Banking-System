import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { successResponse } from "../utils/common/success-response";
import { errorResponse } from "../utils/common/error-response";
import BankService from "../services/bank-service";

const bankService = new BankService();

const registerBank = async (req: any, res: any) => {
  try {
    const bank = await bankService.register(req.body);

    successResponse.message = "Successfully registered the bank";
    successResponse.data = bank;

    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error: any) {
    errorResponse.error = error;

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
};

export { registerBank };
