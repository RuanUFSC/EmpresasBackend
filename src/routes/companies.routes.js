const company = require("../controllers/companies_controller.js");

var router = require("express").Router();

// Create a new company
router.post("/company", company.create);

// Retrieve all companys
router.get("/companies", company.findAll);

// Update a company with id
router.put("/company/:id", company.update);

// Delete a company with id
router.delete("/company/:id", company.delete);

module.exports = router;