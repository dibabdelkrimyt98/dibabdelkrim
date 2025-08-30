import AcademicWork from "../models/AcademicWork.js";

// ➤ Créer un nouveau travail académique
export const createAcademicWork = async (req, res) => {
  try {
    const academic = new AcademicWork(req.body);
    await academic.save();
    res.status(201).json(academic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ➤ Récupérer tous les travaux académiques
export const getAcademicWorks = async (req, res) => {
  try {
    const academics = await AcademicWork.find();
    res.status(200).json(academics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ➤ Récupérer un travail académique par ID
export const getAcademicWorkById = async (req, res) => {
  try {
    const academic = await AcademicWork.findById(req.params.id);
    if (!academic) return res.status(404).json({ message: "Travail académique introuvable" });
    res.status(200).json(academic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ➤ Mettre à jour un travail académique
export const updateAcademicWork = async (req, res) => {
  try {
    const academic = await AcademicWork.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!academic) return res.status(404).json({ message: "Travail académique introuvable" });
    res.status(200).json(academic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ➤ Supprimer un travail académique
export const deleteAcademicWork = async (req, res) => {
  try {
    const academic = await AcademicWork.findByIdAndDelete(req.params.id);
    if (!academic) return res.status(404).json({ message: "Travail académique introuvable" });
    res.status(200).json({ message: "Travail académique supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
