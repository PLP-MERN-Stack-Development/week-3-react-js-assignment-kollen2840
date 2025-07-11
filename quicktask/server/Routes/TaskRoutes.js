const express = require('express');
const {getTasks,addTask, updateTask, deleteTask} = require("../controls/controls");

const router = express.Router();

router.get("/api/tasks", getTasks);
router.post("/api/tasks", addTask);
router.put("/api/tasks/:id", updateTask);
router.delete("/api/tasks/:id", deleteTask);

module.exports = router;