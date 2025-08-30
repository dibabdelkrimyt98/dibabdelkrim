const { validationResult } = require('express-validator');
const Study = require('../models/Study');


exports.list = async (req, res, next) => {
try {
const items = await Study.find().sort({ createdAt: -1 });
res.json(items);
} catch (e) { next(e); }
};


exports.get = async (req, res, next) => {
try {
const item = await Study.findById(req.params.id);
if (!item) return res.status(404).json({ message: 'Study not found' });
res.json(item);
} catch (e) { next(e); }
};


exports.create = async (req, res, next) => {
try {
const errors = validationResult(req);
if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });


const item = await Study.create(req.body);
res.status(201).json(item);
} catch (e) { next(e); }
};


exports.update = async (req, res, next) => {
try {
const item = await Study.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!item) return res.status(404).json({ message: 'Study not found' });
res.json(item);
} catch (e) { next(e); }
};


exports.remove = async (req, res, next) => {
try {
const item = await Study.findByIdAndDelete(req.params.id);
if (!item) return res.status(404).json({ message: 'Study not found' });
res.json({ message: 'Deleted' });
} catch (e) { next(e); }
};