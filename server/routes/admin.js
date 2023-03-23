import express from "express";
const router = express.Router();

import { getUsersList  } from "../controllers/admin.js";

router.get('/userslist',getUsersList)

export default router;