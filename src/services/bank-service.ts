import { createBank } from "../models/bank-model";
import { AppError } from "../utils/errors/app-error";

class BankService {
  async register(data: {
    name: string;
    address: string;
    pincode: string;
    branchCode: string;
  }) {
    try {
      const { name, address, pincode, branchCode } = data;
      return await createBank(name, address, pincode, branchCode);
    } catch (err: any) {
      throw new AppError(["Failed to register bank", err.message], 500);
    }
  }
}

export default BankService;
