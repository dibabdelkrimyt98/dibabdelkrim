// backend/controllers/workController.js
const Work = require("../models/Work");

// @desc    Get all work experiences
// @route   GET /api/work
// @access  Public
exports.getWorks = async (req, res) => {
  try {
    const works = await Work.find().sort({ startDate: -1 });
    res.json(works);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors du chargement des expériences professionnelles." });
  }
};

// @desc    Add new work experience
// @route   POST /api/work
// @access  Public (à sécuriser si besoin)
exports.addWork = async (req, res) => {
  try {
    const { title, company, startDate, endDate, description } = req.body;
    const work = new Work({ title, company, startDate, endDate, description });
    const savedWork = await work.save();
    res.status(201).json(savedWork);
  } catch (error) {
    res.status(400).json({ message: "Impossible d'ajouter l'expérience professionnelle." });
  }
};

// @desc    Delete a work experience
// @route   DELETE /api/work/:id
// @access  Public (à sécuriser si besoin)
exports.deleteWork = async (req, res) => {
  try {
    await Work.findByIdAndDelete(req.params.id);
    res.json({ message: "Expérience professionnelle supprimée." });
  } catch (error) {
    res.status(500).json({ message: "Impossible de supprimer l'expérience professionnelle." });
  }
};
