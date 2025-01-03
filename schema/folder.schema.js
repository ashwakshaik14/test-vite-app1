const mongoose = require("mongoose");

// Defining the folder schema
const folderSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  }, // Email of the user
  workspaceName: { 
    type: String, 
    required: true 
  } // Workspace name
});

// Export the model based on the schema
module.exports = mongoose.model("Folder", folderSchema);
