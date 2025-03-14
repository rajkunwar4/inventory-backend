import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dahsboardController";

const router = Router();


router.get("/", getDashboardMetrics);

export default router