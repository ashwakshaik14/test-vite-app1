// const mongoose = require("mongoose");

// const componentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   label: { type: String, required: true },
//   value: { type: String, required: true },
// });

// const flowSchema = new mongoose.Schema({
//   formId: { type: String, required: true },  // Store formId as String
//   components: { type: [componentSchema], required: true },
// });

// module.exports = mongoose.model("Flow", flowSchema);


const mongoose = require("mongoose");

// // Schema for formId and data
// const flowDataSchema = new mongoose.Schema({
//   formId: { type: String, required: true, unique: true }, // Unique form identifier
//   data: { 
//     type: [mongoose.Schema.Types.Mixed], // Array of inputs for the form
//     required: true,
//   },
// });

const flowDataSchema = new mongoose.Schema({
  formId: { type: String, required: true, unique: true },
  data: [
    {
      label: { type: String, required: true },
      value: { type: mongoose.Schema.Types.Mixed, required: true },
    },
  ],
});


// // Create and export the FlowData model
const FlowData = mongoose.model("FlowData", flowDataSchema);

module.exports = FlowData;
