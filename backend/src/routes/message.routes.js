import express from "express";
import { protectRoute } from "../middlewares/auth.middlewares.js";
import { getUsersForSidebar,getMessages } from "../controllers/message.controllers.js";
const router = express.Router();


//router.get("/user")

router.get("/users",protectRoute,getUsersForSidebar);
router.get("/:id",protectRoute,getMessages)

export default router;
