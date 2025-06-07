import express from "express";
import infoController from "../../controllers/info-controller";
import bankRoutes from "./bank-routes";

const router = express.Router();

router.get("/info", infoController.info);
router.use("/banks", bankRoutes);

export default router;
