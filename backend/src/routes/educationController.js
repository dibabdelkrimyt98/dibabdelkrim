// backend/controllers/educationController.js
const Education = require("../models/Education");

// @desc    Get all education records
// @route   GET /api/education
// @access  Public
exports.getEducation = async (req, res) => {
  try {
    const education = await Education.find().sort({ startDate: -1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors du chargement du parcours académique." });
  }
};

// @desc    Add new education
// @route   POST /api/education
// @access  Public (à sécuriser si besoin)
exports.addEducation = async (req, res) => {
  try {
    const { school, degree, fieldOfStudy, startDate, endDate, description } = req.body;
    const edu = new Education({ school, degree, fieldOfStudy, startDate, endDate, description });
    const savedEdu = await edu.save();
    res.status(201).json(savedEdu);
  } catch (error) {
    res.status(400).json({ message: "Impossible d'ajouter le parcours académique." });
  }
};

// @desc    Delete education record
// @route   DELETE /api/education/:id
// @access  Public (à sécuriser si besoin)
exports.deleteEducation = async (req, res) => {
  try {
    await Education.findByIdAndDelete(req.params.id);
    res.json({ message: "Parcours académique supprimé." });
  } catch (error) {
    res.status(500).json({ message: "Impossible de supprimer ce parcours." });
  }
};
