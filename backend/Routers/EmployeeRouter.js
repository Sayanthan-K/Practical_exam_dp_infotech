const Router = require("express").Router;
const Employeerouter = Router();
const Emplyee = require("../Controller/EmployeeController");

Employeerouter.post("/", Emplyee.AddEmployee)
  .put("/:_id", Emplyee.UpdateEmployee)
  .get("/", Emplyee.getAllEmployee)
  .get("/:_id", Emplyee.getEmployee);

module.exports = Employeerouter;
