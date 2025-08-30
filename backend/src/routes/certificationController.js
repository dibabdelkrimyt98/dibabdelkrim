import Study from "../models/Study.js";

// ✅ Create new certification
export const createCertification = async (req, res) => {
  try {
    const certification = new Study({ ...req.body, type: "certification" });
    await certification.save();
    res.status(201).json(certification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ Get all certifications
export const getCertifications = async (req, res) => {
  try {
    const certifications = await Study.find({ type: "certification" });
    res.status(200).json(certifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
