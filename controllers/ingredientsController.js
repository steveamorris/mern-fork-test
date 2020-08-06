const express = require("express");
const router = express.Router();
const db = require("../models");

// Read All
router.get("/api/ingredients", (req, res) => {
  db.Ingredient.find({})
    .then((foundIngredients) => {
      res.json({
        error: false,
        data: foundIngredients,
        mesasge: "Successfully found all ingredients.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all ingredients.",
      });
    });
});

// Read One

// Create

// Edit

// Delete

module.exports = router;
