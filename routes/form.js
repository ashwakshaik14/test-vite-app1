// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// const Form = require("../schema/form.schema"); // Correctly referencing your schema location

// // Authentication middleware
// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(403).json({ error: "Authorization token is required" });
//   }

//   const token = authHeader.split(" ")[1]; // Extract the token
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
//     req.user = decoded; // Attach decoded data to the request
//     next(); // Proceed to the next middleware
//   } catch (err) {
//     console.error("Token verification error:", err.message);
//     return res.status(403).json({ error: "Invalid token" });
//   }
// };

// // Route to create a form
// router.post("/", authenticateToken, async (req, res) => {
//   const { name, email, folderId, workspaceName } = req.body;

//   try {
//     const newForm = new Form({
//       name,
//       email,
//       folderId,
//       workspaceName,
//     });

//     const savedForm = await newForm.save();
//     res.status(201).json({ message: "Form created successfully", form: savedForm });
//   } catch (error) {
//     console.error("Error creating form:", error.message);
//     res.status(500).json({ error: "Failed to create form" });
//   }
// });

// module.exports = router;












const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Form = require("../schema/form.schema");
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Enable CORS with specific methods allowed
router.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  methods: ['GET', 'POST', 'DELETE'], // Allow only necessary methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
}));

// Handle preflight (OPTIONS) requests for all routes explicitly
router.options("*", cors());

// Middleware to parse JSON bodies
router.use(express.json());

// Create a folder

// router.post("/", [
//   body('name').notEmpty().withMessage('Name is required'),
//   body('email').isEmail().withMessage('Email must be valid'),
//   body('workspaceName').notEmpty().withMessage('Workspace name is required'),
// ], async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { name, email, workspaceName } = req.body;

//   try {
//     const newForm = new Form({ name, email, workspaceName}); // Save folderId
//     const savedForm = await newForm.save();
//     res.status(201).json(savedForm); // Respond with the saved form
//   } catch (error) {
//     console.error("Error saving form:", error);
//     res.status(500).json({ message: "Error saving form", error: error.message });
//   }
// });


router.post("/with-folder", [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email must be valid'),
  body('workspaceName').notEmpty().withMessage('Workspace name is required'),
  body('folderId').isString().withMessage('Folder ID must be a string')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, workspaceName, folderId } = req.body;
  try {
    const newForm = new Form({ name, email, workspaceName, folderId });
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({ message: "Error saving form", error: error.message });
  }
});

// Retrieve forms based on folderId and email
router.get("/with-folder", async (req, res) => {
  const { folderId, email } = req.query;
  
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const filter = { email: email }; // Default filter by email

    if (folderId) {
      filter.folderId = folderId; // If folderId is present, add it to the filter
    }

    const forms = await Form.find(filter);

    // if (forms.length === 0) {
    //   return res.status(404).json({ message: "No forms found for this folder" });
    // }

    res.status(200).json(forms);
  } catch (error) {
    console.error("Error fetching forms:", error);
    res.status(500).json({ message: "Error fetching forms" });
  }
});



router.post("/", [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Email must be valid'),
  body('workspaceName').notEmpty().withMessage('Workspace name is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, workspaceName } = req.body;

  try {
    const newForm = new Form({ name, email, workspaceName}); // Save folderId
    const savedForm = await newForm.save();
    res.status(201).json(savedForm); // Respond with the saved form
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({ message: "Error saving form", error: error.message });
  }
});



// router.post("/", [
//   body('name').notEmpty().withMessage('Name is required'),
//   body('email').isEmail().withMessage('Email must be valid'),
//   body('workspaceName').notEmpty().withMessage('Workspace name is required'),
// // Add validation for folderId
// ], async (req, res) => {
//   const { id } = req.params;
//   const folderId = await Form.findById(id);

//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { name, email, workspaceName } = req.body;

//   try {
//     const newForm = new Form({ name, email, workspaceName, folderId }); // Save folderId
//     const savedForm = await newForm.save();
//     res.status(201).json(savedForm); // Respond with the saved form
//   } catch (error) {
//     console.error("Error saving form:", error);
//     res.status(500).json({ message: "Error saving form", error: error.message });
//   }
// });


// //Retrieve all folders 
// router.get("/", async (req, res) => {
//   const userEmail = req.query.email;
//   console.log("Received query params:", req.query);  // Log the entire query params
//   try {
//     console.log("Fetching form details with email:", userEmail);
//     const forms = await Form.find({ email: userEmail });
//     if (!forms) {
//       return res.status(404).json({ message: "Forms not found" });
//     }
//     res.status(200).json(forms);
//   } catch (error) {
//     console.error("Error retrieving form:", error);
//     res.status(500).json({ message: "Error retrieving form", error: error.message });
//   }
// });



// Retrieve all forms based on email
// router.get("/", async (req, res) => {
//   const userEmail = req.query.email; // Get email from query parameter

//   if (!userEmail) {
//     return res.status(400).json({ message: "Email is required" });
//   }

//   try {
//     // console.log("Fetching form details with email:", userEmail);
//     const forms = await Form.find({ email: userEmail }); // Search forms by email
    
//     if (!forms || forms.length === 0) {
//       return res.status(404).json({ message: "No forms found for this email" });
//     }

//     res.status(200).json(forms); // Return the forms as response
//   } catch (error) {
//     console.error("Error retrieving form:", error);
//     res.status(500).json({ message: "Error retrieving form", error: error.message });
//   }
// });

router.get("/", async (req, res) => {
  const { folderId, email,workspaceName } = req.query;
  // console.log(folderId,email);
  if (!email){
    return res.status(400).json({ message: "folderId and email are required" });
  }
  if (folderId && email) {
  try {
    // Validate input
   
       // Fetch forms that match folderId and email
    const forms = await Form.find({ email : email, folderId : folderId });
    
      console.log(forms)

    // if (!forms || forms.length === 0) {
    //   return res.status(404).json({ message: "No forms found for this folder" });
    // }

    return res.status(200).json(forms); // Send the forms as response
  } catch (error) {
    console.error("Error fetching forms:", error);
    res.status(500).json({ message: "Error fetching forms" });
  }
     
    }

  if (workspaceName && email){
    try {
      const forms = await Form.find({ email : email, folderId : null, workspaceName : workspaceName });
      return res.status(200).json(forms); // Send the forms as response
    } catch (error) {
      console.error("Error fetching forms:", error);
      res.status(500).json({ message: "Error fetching forms" });
    }

    }
  }

   
);





// Retrieve folder by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const form = await Form.findById(id);
    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }
    res.status(200).json(form);
  } catch (error) {
    console.error("Error retrieving form:", error);
    res.status(500).json({ message: "Error retrieving form", error: error.message });
  }
});


// Delete a folder
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  // Validate if the ID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid form ID format" });
  }

  try {
    const deletedForm = await Form.findByIdAndDelete(id);
    if (!deletedForm) {
      return res.status(404).json({ message: "Form not found" });
    }
    res.status(200).json({ message: "Form deleted successfully" });
  } catch (error) {
    console.error("Error deleting form:", error);
    res.status(500).json({ message: "Error deleting form", error: error.message });
  }
});

module.exports = router;
