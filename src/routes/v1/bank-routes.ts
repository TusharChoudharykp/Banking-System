import express from "express";
import { registerBank } from "../../controllers/bank-controller";
import { validateBankRegistration } from "../../middlewares/bank-middleware";

const router = express.Router();

router.post("/register", validateBankRegistration, registerBank);

export default router;
