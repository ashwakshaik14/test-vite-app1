// // const express = require("express");
// // const Folder = require("../schema/folder.schema");

// // const router = express.Router();

// // // Create a folder
// // router.post("/", async (req, res) => {
// //   const { name, email, workspaceName } = req.body;

// //   // Validation: Check if all required fields are provided
// //   if (!name || !email || !workspaceName) {
// //     console.error("Missing required fields:", { name, email, workspaceName });
// //     return res.status(400).json({ message: "Name, email, and workspace name are required" });
// //   }

// //   try {
// //     console.log("Received Body:", req.body); // Logs the incoming body for debugging
// //     const newFolder = new Folder({ name, email, workspaceName });
// //     const savedFolder = await newFolder.save();
// //     res.status(201).json(savedFolder); // Respond with the saved folder
// //   } catch (error) {
// //     console.error("Error saving folder:", error);
// //     res.status(500).json({ message: "Error saving folder" });
// //   }
// // });

// // // Retrieve all folders
// // router.get("/", async (req, res) => {
// //   try {
// //     const folders = await Folder.find(); // Retrieves all folders
// //     res.status(200).json(folders); // Respond with all folders
// //   } catch (error) {
// //     console.error("Error retrieving folders:", error);
// //     res.status(500).json({ message: "Error retrieving folders" });
// //   }
// // });

// // // Retrieve a folder by ID
// // router.get("/:id", async (req, res) => {
// //   const { id } = req.params;

// //   try {
// //     const folder = await Folder.findById(id); // Find folder by ID
// //     if (!folder) {
// //       return res.status(404).json({ message: "Folder not found" }); // Folder not found
// //     }
// //     res.status(200).json(folder); // Respond with the folder details
// //   } catch (error) {
// //     console.error("Error retrieving folder by ID:", error);
// //     res.status(500).json({ message: "Error retrieving folder by ID" });
// //   }
// // });

// // // Delete a folder by ID
// // router.delete("/:id", async (req, res) => {
// //   const { id } = req.params;

// //   try {
// //     const folder = await Folder.findByIdAndDelete(id); // Find and delete folder by ID
// //     if (!folder) {
// //       return res.status(404).json({ message: "Folder not found" }); // Folder not found
// //     }
// //     res.status(200).json({ message: "Folder deleted successfully" }); // Successful deletion
// //   } catch (error) {
// //     console.error("Error deleting folder:", error);
// //     res.status(500).json({ message: "Error deleting folder" });
// //   }
// // });

// // module.exports = router;









// // const express = require("express");
// // const cors = require("cors");
// // const Folder = require("../schema/folder.schema");

// // const router = express.Router();

// // // Enable CORS for all requests
// // router.use(cors());

// // // Create a folder
// // router.post("/", async (req, res) => {
// //   const { name, email, workspaceName } = req.body;

// //   // Validation: Check if all required fields are provided
// //   if (!name || !email || !workspaceName) {
// //     console.error("Missing required fields:", { name, email, workspaceName });
// //     return res.status(400).json({ message: "Name, email, and workspace name are required" });
// //   }

// //   try {
// //     console.log("Received Body:", req.body); // Logs the incoming body for debugging
// //     const newFolder = new Folder({ name, email, workspaceName });
// //     const savedFolder = await newFolder.save();
// //     res.status(201).json(savedFolder); // Respond with the saved folder
// //   } catch (error) {
// //     console.error("Error saving folder:", error);
// //     res.status(500).json({ message: "Error saving folder" });
// //   }
// // });

// // // Retrieve all folders
// // router.get("/", async (req, res) => {
// //   try {
// //     const folders = await Folder.find(); // Retrieves all folders
// //     res.status(200).json(folders); // Respond with all folders
// //   } catch (error) {
// //     console.error("Error retrieving folders:", error);
// //     res.status(500).json({ message: "Error retrieving folders" });
// //   }
// // });

// // // Retrieve a folder by ID
// // router.get("/:id", async (req, res) => {
// //   const { id } = req.params;

// //   try {
// //     const folder = await Folder.findById(id); // Find folder by ID
// //     if (!folder) {
// //       return res.status(404).json({ message: "Folder not found" }); // Folder not found
// //     }
// //     res.status(200).json(folder); // Respond with the folder details
// //   } catch (error) {
// //     console.error("Error retrieving folder by ID:", error);
// //     res.status(500).json({ message: "Error retrieving folder by ID" });
// //   }
// // });

// // // Delete a folder by ID
// // router.delete("/:id", async (req, res) => {
// //   const { id } = req.params;

// //   try {
// //     const folder = await Folder.findByIdAndDelete(id); // Find and delete folder by ID
// //     if (!folder) {
// //       return res.status(404).json({ message: "Folder not found" }); // Folder not found
// //     }
// //     res.status(200).json({ message: "Folder deleted successfully" }); // Successful deletion
// //   } catch (error) {
// //     console.error("Error deleting folder:", error);
// //     res.status(500).json({ message: "Error deleting folder" });
// //   }
// // });

// // module.exports = router;



// // const express = require("express");
// // const cors = require("cors");
// // const Folder = require("../schema/folder.schema");

// // const router = express.Router();

// // // Enable CORS with specific methods allowed
// // router.use(cors({
// //   origin: 'http://localhost:5173', // Frontend URL
// //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow DELETE method
// //   allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
// // }));

// // // Middleware to parse JSON bodies
// // router.use(express.json());

// // // Create a folder
// // router.post("/", async (req, res) => {
// //   const { name, email, workspaceName } = req.body;

// //   // Validate required fields
// //   if (!name || !email || !workspaceName) {
// //     console.error("Missing required fields:", { name, email, workspaceName });
// //     return res.status(400).json({ message: "Name, email, and workspace name are required" });
// //   }

// //   try {
// //     console.log("Received Body:", req.body); // Logs the incoming request body
// //     const newFolder = new Folder({ name, email, workspaceName });
// //     const savedFolder = await newFolder.save();
// //     res.status(201).json(savedFolder); // Respond with the saved folder
// //   } catch (error) {
// //     console.error("Error saving folder:", error);
// //     res.status(500).json({ message: "Error saving folder" });
// //   }
// // });

// // // Retrieve all folders
// // router.get("/", async (req, res) => {
// //   try {
// //     const folders = await Folder.find(); // Retrieves all folders from the database
// //     res.status(200).json(folders); // Send back all folders
// //   } catch (error) {
// //     console.error("Error retrieving folders:", error);
// //     res.status(500).json({ message: "Error retrieving folders" });
// //   }
// // });

// // // Delete a folder by ID
// // router.delete("/:id", async (req, res) => {
// //   const { id } = req.params;

// //   try {
// //     // Attempt to delete folder by its ID
// //     const folder = await Folder.findByIdAndDelete(id);
// //     if (!folder) {
// //       return res.status(404).json({ message: "Folder not found" }); // Folder not found
// //     }
// //     res.status(200).json({ message: "Folder deleted successfully" }); // Success response
// //   } catch (error) {
// //     console.error("Error deleting folder:", error);
// //     res.status(500).json({ message: "Error deleting folder" });
// //   }
// // });

// // module.exports = router;







// const express = require("express");
// const cors = require("cors");
// const Folder = require("../schema/folder.schema");

// const router = express.Router();

// // Enable CORS with specific methods allowed globally
// router.use(cors({
//   origin: 'http://localhost:5173', // Frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow DELETE method
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
// }));

// // Handle preflight (OPTIONS) requests
// router.options("*", cors());  // Handles preflight request for all routes

// // Middleware to parse JSON bodies
// router.use(express.json());

// // Create a folder
// router.post("/", async (req, res) => {
//   const { name, email, workspaceName } = req.body;

//   if (!name || !email || !workspaceName) {
//     return res.status(400).json({ message: "Name, email, and workspace name are required" });
//   }

//   try {
//     const newFolder = new Folder({ name, email, workspaceName });
//     const savedFolder = await newFolder.save();
//     res.status(201).json(savedFolder);
//   } catch (error) {
//     console.error("Error saving folder:", error);
//     res.status(500).json({ message: "Error saving folder" });
//   }
// });

// // Retrieve all folders
// router.get("/", async (req, res) => {
//   try {
//     const folders = await Folder.find();
//     res.status(200).json(folders);
//   } catch (error) {
//     console.error("Error retrieving folders:", error);
//     res.status(500).json({ message: "Error retrieving folders" });
//   }
// });

// // Delete a folder by ID
// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const folder = await Folder.findByIdAndDelete(id);
//     if (!folder) {
//       return res.status(404).json({ message: "Folder not found" });
//     }

//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow frontend URL
//     res.status(200).json({ message: "Folder deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting folder:", error);
//     res.status(500).json({ message: "Error deleting folder" });
//   }
// });

// module.exports = router;













// const express = require("express");
// const cors = require("cors");
// const Folder = require("../schema/folder.schema");

// const router = express.Router();

// // Enable CORS with specific methods allowed
// router.use(cors({
//   origin: 'http://localhost:5173', // Frontend URL
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow DELETE method
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
// }));

// // Handle preflight (OPTIONS) requests for all routes explicitly
// router.options("*", cors());  // Handles preflight request for all routes

// // Middleware to parse JSON bodies
// router.use(express.json());

// // Create a folder
// router.post("/", async (req, res) => {
//   const { name, email, workspaceName } = req.body;

//   if (!name || !email || !workspaceName) {
//     return res.status(400).json({ message: "Name, email, and workspace name are required" });
//   }

//   try {
//     const newFolder = new Folder({ name, email, workspaceName });
//     const savedFolder = await newFolder.save();
//     res.status(201).json(savedFolder);
//   } catch (error) {
//     console.error("Error saving folder:", error);
//     res.status(500).json({ message: "Error saving folder" });
//   }
// });

// // Retrieve all folders
// router.get("/", async (req, res) => {
//   try {
//     const folders = await Folder.find();
//     res.status(200).json(folders);
//   } catch (error) {
//     console.error("Error retrieving folders:", error);
//     res.status(500).json({ message: "Error retrieving folders" });
//   }
// });

// // Delete a folder by ID
// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const folder = await Folder.findByIdAndDelete(id);
//     if (!folder) {
//       return res.status(404).json({ message: "Folder not found" });
//     }

//     // Set CORS headers for the response
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow frontend URL
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Explicitly allow DELETE method
//     res.status(200).json({ message: "Folder deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting folder:", error);
//     res.status(500).json({ message: "Error deleting folder" });
//   }
// });

// module.exports = router;











// const express = require("express");
// const cors = require("cors");
// const Folder = require("../schema/folder.schema");

// const router = express.Router();

// // Enable CORS with specific methods allowed
// router.use(cors({
//   origin: 'http://localhost:5173', // Frontend URL
//   methods: ['GET', 'POST', 'DELETE'], // Allow only necessary methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
// }));

// // Handle preflight (OPTIONS) requests for all routes explicitly
// router.options("*", cors());

// // Middleware to parse JSON bodies
// router.use(express.json());

// // Create a folder
// router.post("/", async (req, res) => {
//   const { name, email, workspaceName } = req.body;

//   if (!name || !email || !workspaceName) {
//     return res.status(400).json({ message: "Name, email, and workspace name are required" });
//   }

//   try {
//     const newFolder = new Folder({ name, email, workspaceName });
//     const savedFolder = await newFolder.save();
//     res.status(201).json(savedFolder); // Respond with the saved folder
//   } 
//   catch (error) {
//     console.error("Error saving folder:", error);
//     res.status(500).json({ message: "Error saving folder" });
//   }
// });

// // Retrieve all folders
// router.get("/", async (req, res) => {
//   try {
//     const folders = await Folder.find();
//     res.status(200).json(folders);
//   } catch (error) {
//     console.error("Error retrieving folders:", error);
//     res.status(500).json({ message: "Error retrieving folders" });
//   }
// });

// // Delete a folder
// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   console.log("Folder ID:", id);  // Log to check if ID is being captured

//   try {
//     const deletedFolder = await Folder.findByIdAndDelete(id);
//     if (!deletedFolder) {
//       return res.status(404).json({ message: "Folder not found" });
//     }
//     res.status(200).json({ message: "Folder deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting folder:", error);
//     res.status(500).json({ message: "Error deleting folder" });
//   }
// });


// module.exports = router;







const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Folder = require("../schema/folder.schema");
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Enable CORS with specific methods allowed
router.use(cors({
  origin: ['http://localhost:5173', "https://test-vite-app2.onrender.com"],// Frontend URL
  methods: ['GET', 'POST', 'DELETE'], // Allow only necessary methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
}));

// Handle preflight (OPTIONS) requests for all routes explicitly
router.options("*", cors());

// Middleware to parse JSON bodies
router.use(express.json());

// Create a folder
router.post("/", [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email must be valid'),
  body('workspaceName').notEmpty().withMessage('Workspace name is required')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, workspaceName } = req.body;

  try {
    const newFolder = new Folder({ name, email, workspaceName });
    const savedFolder = await newFolder.save();
    res.status(201).json(savedFolder); // Respond with the saved folder
  } catch (error) {
    console.error("Error saving folder:", error);
    res.status(500).json({ message: "Error saving folder", error: error.message });
  }
});

//Retrieve all folders 
router.get("/",async(req,res) => {
  const userEmail = req.query.email;
    try {
      console.log("Fetching folder details with email:", userEmail);
      const folders = await Folder.find({ email: userEmail });
    if (!folders) {
      return res.status(404).json({ message: "Folder not found" });
    }
    res.status(200).json(folders);
  } catch (error) {
    console.error("Error retrieving folder:", error);
    res.status(500).json({ message: "Error retrieving folder", error: error.message });
  }
});




// Retrieve folder by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const folder = await Folder.findById(id);
    if (!folder) {
      return res.status(404).json({ message: "Folder not found" });
    }
    res.status(200).json(folder);
  } catch (error) {
    console.error("Error retrieving folder:", error);
    res.status(500).json({ message: "Error retrieving folder", error: error.message });
  }
});


// Delete a folder
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  // Validate if the ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid folder ID format" });
  }

  try {
    const deletedFolder = await Folder.findByIdAndDelete(id);
    if (!deletedFolder) {
      return res.status(404).json({ message: "Folder not found" });
    }
    res.status(200).json({ message: "Folder deleted successfully" });
  } catch (error) {
    console.error("Error deleting folder:", error);
    res.status(500).json({ message: "Error deleting folder", error: error.message });
  }
});

module.exports = router;
