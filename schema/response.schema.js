const mongoose = require("mongoose");

const FieldSubmissionSchema = new mongoose.Schema({
  fieldName: { type: String, required: true },
  fieldValue: { type: String, required: true },
});

const UserSubmissionSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Dynamic User ID
  fieldSubmissions: [FieldSubmissionSchema], // Array of field submissions
  lastSubmissionAt: { type: Date, default: Date.now }, // Timestamp for the last submission
});

const ResponseSchema = new mongoose.Schema({
  formId: { type: String, required: true },
  visitCount: { type: Number, default: 0 }, // Track the number of visits for the form
  users: [UserSubmissionSchema], // Array of user submissions
  fullFormSubmissions: { type: Number, default: 0 }, // Number of full form submissions
  createdAt: { type: Date, default: Date.now }, // Timestamp for when the form was created
});

module.exports = mongoose.model("Response", ResponseSchema);