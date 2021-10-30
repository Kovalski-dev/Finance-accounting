const express = require("express");
const router = express.Router();

const {
  getAllCases,
  addNewCase,
  changeCase,
  deleteCase,
} = require("../controllers/task.controller");

//Routes for tasks operations
router.get("/allTasks", getAllCases);
router.post("/createTask", addNewCase);
router.patch("/updateTask", changeCase);
router.delete("/deleteTask", deleteCase);

module.exports = router;
