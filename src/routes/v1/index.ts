import express from "express";
import infoController from "../../controllers/info-controller";

const router = express.Router();

router.get("/info", infoController.info);

export default router;
