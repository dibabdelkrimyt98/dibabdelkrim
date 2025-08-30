const { Schema, model } = require('mongoose');


const ReferenceSchema = new Schema(
{
fullName: { type: String, required: true },
position: { type: String },
email: { type: String },
recommendationPath: { type: String }, // uploaded file (pdf/doc)
},
{ timestamps: true }
);


module.exports = model('Reference', ReferenceSchema);