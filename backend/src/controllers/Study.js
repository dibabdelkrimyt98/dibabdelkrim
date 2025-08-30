const { Schema, model } = require('mongoose');


const CertificationSchema = new Schema(
{
title: { type: String, required: true },
issuer: { type: String },
date: { type: Date },
filePath: { type: String }, // optional uploaded cert file
},
{ _id: false }
);


const MembershipSchema = new Schema(
{
labName: { type: String, required: true },
role: { type: String },
startDate: { type: Date },
endDate: { type: Date },
isCurrent: { type: Boolean, default: false },
},
{ _id: false }
);


const StudySchema = new Schema(
{
level: {
type: String,
enum: ['Baccalaureate', "Bachelor's", 'Master', 'Other'],
required: true,
},
program: { type: String, required: true },
institution: { type: String, required: true },
startDate: { type: Date },
endDate: { type: Date },
description: { type: String },
certifications: [CertificationSchema],
memberships: [MembershipSchema],
},
{ timestamps: true }
);


module.exports = model('Study', StudySchema);