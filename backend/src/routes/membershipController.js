import Study from "../models/Study.js";

// ✅ Create new membership
export const createMembership = async (req, res) => {
  try {
    const membership = new Study({ ...req.body, type: "membership" });
    await membership.save();
    res.status(201).json(membership);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ Get all memberships
export const getMemberships = async (req, res) => {
  try {
    const memberships = await Study.find({ type: "membership" });
    res.status(200).json(memberships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
