const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
  },
  folderId: {
    type: String, // Change from ObjectId to String
    required: false, // Make it optional if not in a folder
  },
  workspaceName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Form", formSchema);
