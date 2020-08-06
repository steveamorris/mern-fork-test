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
router.post("/api/ingredients", (req, res) => {
  db.Ingredient.create(req.body)
  .then((createdIngredient) => {
    res.json({
      error: false,
      data: createdIngredient,
      message: "Successfully created Ingredient."
    })
  })
  .catch((err) => {
    res.status(500).json({
      error: true,
      data: null,
      message: "Unable to create Ingredient."
    })
  })
});

// Edit

// Delete

module.exports = router;
