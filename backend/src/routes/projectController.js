// backend/controllers/projectController.js
const Project = require("../models/Project");

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors du chargement des projets." });
  }
};

// @desc    Add new project
// @route   POST /api/projects
// @access  Public (à sécuriser si besoin)
exports.addProject = async (req, res) => {
  try {
    const { title, description, technologies, link } = req.body;
    const project = new Project({ title, description, technologies, link });
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: "Impossible d'ajouter le projet." });
  }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Public (à sécuriser si besoin)
exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Projet supprimé." });
  } catch (error) {
    res.status(500).json({ message: "Impossible de supprimer le projet." });
  }
};
