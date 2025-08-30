const { Schema, model } = require('mongoose');


const AcademicWorkSchema = new Schema(
{
title: { type: String, required: true },
date: { type: Date, required: true },
type: { type: String, required: true }, // e.g., Journal, Conference, Preprint
link: { type: String },
docPath: { type: String }, // uploaded PDF path
},
{ timestamps: true }
);


module.exports = model('AcademicWork', AcademicWorkSchema);


const { Schema, model } = require('mongoose');


const ProfessionalWorkSchema = new Schema(
{
title: { type: String, required: true }, // job title
company: { type: String, required: true },
startDate: { type: Date, required: true },
endDate: { type: Date },
type: { type: String, enum: ['Stage', 'CDD', 'CDI', 'Freelance', 'Other'], required: true },
description: { type: String },
},
{ timestamps: true }
);


module.exports = model('ProfessionalWork', ProfessionalWorkSchema);