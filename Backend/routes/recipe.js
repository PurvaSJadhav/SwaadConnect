const express = require("express");
const Recipe = require("../models/recipe");

const router = express.Router();

// Create
router.post("/add", async (req, res) => {
  try {
    const { name, ingredients, instructions, imageUrl, cookingTime, userOwner } = req.body;
    const recipe = new Recipe({ name, ingredients, instructions, imageUrl, cookingTime, userOwner });
    await recipe.save();
    res.status(201).json({ message: "Recipe added successfully!", recipe });
  } catch (err) {
    res.status(500).json({ message: "Error adding recipe", error: err.message });
  }
});

// Get all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("userOwner", "username email");
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching recipes", error: err.message });
  }
});

// Get a single recipe by ID
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate("userOwner", "username email");
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ message: "Error fetching recipe", error: err.message });
  }
});

// Update
router.put("/update/:id", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json({ message: "Recipe updated successfully!", updatedRecipe });
  } catch (err) {
    res.status(500).json({ message: "Error updating recipe", error: err.message });
  }
});

// delete
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json({ message: "Recipe deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting recipe", error: err.message });
  }
});

module.exports = router;