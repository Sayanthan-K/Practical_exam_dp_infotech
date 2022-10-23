const Router = require("express").Router;
const EmployeeFamliyrouter = Router();
const FamilyDetails = require("../Controller/FamliyController");

EmployeeFamliyrouter.post("/", FamilyDetails.AddEmployeeFmaily)
  .put("/:_id", FamilyDetails.UpdateEmployeeFmaily)
  .get("/employee/:EmpID", FamilyDetails.getAllFmaily)
  .get("/:_id", FamilyDetails.getFmaily);

module.exports = EmployeeFamliyrouter;
