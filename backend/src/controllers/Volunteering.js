const { Schema, model } = require('mongoose');


const VolunteeringSchema = new Schema(
{
category: { type: String, enum: ['Career', 'Events'], required: true },
position: { type: String, required: true },
organization: { type: String },
startDate: { type: Date, required: true },
endDate: { type: Date },
description: { type: String },
},
{ timestamps: true }
);


module.exports = model('Volunteering', VolunteeringSchema);