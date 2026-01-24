import express from "express";
import { 
  createGroup, 
  addUserToGroup, 
  removeUserFromGroup 
} from "../controllers/groupController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createGroup);
router.put("/:groupId/add", protect, addUserToGroup); // (Admin only)
router.put("/:groupId/remove", protect, removeUserFromGroup); // (Admin only)

export default router;