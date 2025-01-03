// const express = require("express");
// const router = express.Router();
// const User = require("../schema/user.schema");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// dotenv.config();

// router.post("/register", async (req, res) => {
//     console.log("Incoming Request Body:", req.body);
  
//     const { name, email, password } = req.body;
  
//     // Validate input
//     if (!name || !email || !password) {
//       console.log("Validation Failed: Missing fields");
//       return res.status(400).json({ message: "All fields are required" });
//     }
  
//     try {
//       const isUserExist = await User.findOne({ email });
//       if (isUserExist) {
//         console.log("Validation Failed: User exists");
//         return res.status(400).json({ message: "User already exists" });
//       }
  
//       const hashedPassword = await bcrypt.hash(password, 10);
//       await User.create({ name, email, password: hashedPassword });
  
//       res.status(201).json({ message: "User created successfully" });
//     } catch (err) {
//       console.error("Error in /register route:", err);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   });
  


//   router.post("/login", async (req, res) => {
//     try {
//       const { email, password } = req.body;
  
//       // Check if the user exists
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ message: "Wrong username or password" });
//       }
  
//       // Verify the password
//       const isPasswordCorrect = await bcrypt.compare(password, user.password);
//       if (!isPasswordCorrect) {
//         return res.status(400).json({ message: "Wrong username or password" });
//       }
  
//       // Generate a token with id and email
//       const token = jwt.sign(
//         { id: user._id, email: user.email },
//         process.env.JWT_SECRET,
//         { expiresIn: "1h" }
//       );
  
//       // Respond with the token
//       res.status(200).json({ token });
//     } catch (error) {
//       console.error("Error during login:", error);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   });
  


// router.get("/details", async (req, res) => {
//   const userEmail = req.query.email;
//   try {
//     console.log("Fetching user details for email:", userEmail);
//     const user = await User.findOne({ email: userEmail });
//     if (!user) {
//       console.log("User not found");
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json({ name: user.name, email: user.email });
//   } catch (err) {
//     console.error("Error fetching user details:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });


// module.exports = router;






























// const express = require("express");
// const router = express.Router();
// const User = require("../schema/user.schema");
// const Folder = require("../schema/folder.schema"); // Import Folder schema
// const Form = require("../schema/form.schema"); // Import Form schema
// const Flow = require("../schema/flow.schema"); // Import Flow schema
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
// const Joi = require("joi");
// const verifyToken = require("../middleware/authenticateToken"); // Import the middleware


// dotenv.config();

// // Validation schema for registration
// const registerSchema = Joi.object({
//   name: Joi.string().min(3).max(50).required(),
//   email: Joi.string().email().required(),
//   password: Joi.string().min(5).max(30).required(),
// });

// // Registration route
// router.post("/register", async (req, res) => {
//   const { error } = registerSchema.validate(req.body);
//   if (error) return res.status(400).json({ message: error.details[0].message });

//   const { name, email, password } = req.body;
//   try {
//     if (await User.findOne({ email })) {
//       return res.status(400).json({ message: "User already exists" });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await User.create({ name, email, password: hashedPassword });
//     res.status(201).json({ message: "User created successfully" });
//   } catch (err) {
//     console.error("Error in /register route:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// // Login route
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(400).json({ message: "Wrong username or password" });
//     }

//     const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
//     res.status(200).json({ token });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// router.get("/details", async (req, res) => {
//   const userEmail = req.query.email;
//   try {
//     console.log("Fetching user details for email:", userEmail);
//     const user = await User.findOne({ email: userEmail });
//     if (!user) {
//       console.log("User not found");
//       return res.status(404).json({ message: "User not found" });
//     }
//     res.status(200).json({ name: user.name, email: user.email });
//   } catch (err) {
//     console.error("Error fetching user details:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });


// router.put("/update", verifyToken, async (req, res) => {
//   const { name, email, oldPassword, newPassword } = req.body;
//   const userId = req.user.id; // Get user ID from the decoded token

//   try {
//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // If old password and new password are provided, update password
//     if (oldPassword && newPassword) {
//       const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
//       if (!isPasswordCorrect) {
//         return res.status(400).json({ message: "Incorrect old password" });
//       }
//       user.password = await bcrypt.hash(newPassword, 10); // Hash the new password
//     }

//     // Update name and email if provided
//     if (name) user.name = name;
//     if (email) user.email = email;

//     await user.save(); // Save the updated user to the database
//     res.status(200).json({ message: "User updated successfully" });
    
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });


// router.put("/update", verifyToken, async (req, res) => {
//   const { name, email, oldPassword, newPassword } = req.body;
//   const userId = req.user.id; // Get user ID from the decoded token

//   try {
//     // Find the user
//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // If old password and new password are provided, update the password
//     if (oldPassword && newPassword) {
//       const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
//       if (!isPasswordCorrect) {
//         return res.status(400).json({ message: "Incorrect old password" });
//       }
//       user.password = await bcrypt.hash(newPassword, 10); // Hash the new password
//     }

//     // Update name and email if provided
//     const updates = {};
//     if (name) updates.name = name;
//     if (email) updates.email = email;

//     if (Object.keys(updates).length > 0) {
//       // Update the user
//       Object.assign(user, updates);
//       await user.save();

//       // Update related schemas (Folder, Form, Flow)
//       const updateConditions = { email: user.email }; // Match by email
//       const updatePayload = { email };

//       if (name) {
//         updatePayload.name = name;
//       }

//       await Promise.all([
//         Folder.updateMany(updateConditions, updatePayload),
//         Form.updateMany(updateConditions, updatePayload),
//         Flow.updateMany({ formId: userId }, updatePayload),
//       ]);
//     }

//     res.status(200).json({ message: "User and related schemas updated successfully" });
//   } catch (err) {
//     console.error("Error updating user:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });





// router.put("/update", verifyToken, async (req, res) => {
//   const { name, email, oldPassword, newPassword } = req.body;
//   const userId = req.user.id; // Get user ID from the decoded token

//   try {
//     console.log("Received update request:", { userId, name, email, oldPassword, newPassword });

//     const user = await User.findById(userId);
//     if (!user) {
//       console.log("User not found");
//       return res.status(404).json({ message: "User not found" });
//     }

//     if (oldPassword && newPassword) {
//       const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
//       if (!isPasswordCorrect) {
//         console.log("Incorrect old password");
//         return res.status(400).json({ message: "Incorrect old password" });
//       }
//       user.password = await bcrypt.hash(newPassword, 10); // Hash the new password
//     }

//     const updates = {};
//     if (name) updates.name = name;
//     if (email) updates.email = email;

//     if (Object.keys(updates).length > 0) {
//       console.log("Updating user details:", updates);
//       Object.assign(user, updates);
//       await user.save();

//       const updateConditions = { email: user.email };
//       const updatePayload = { email };

//       if (name) {
//         updatePayload.name = name;
//       }

//       console.log("Updating related schemas...");
//       await Promise.all([
//         Folder.updateMany(updateConditions, updatePayload),
//         Form.updateMany(updateConditions, updatePayload),
//         Flow.updateMany({ formId: userId }, updatePayload),
//       ]);
//     }

//     res.status(200).json({ message: "User and related schemas updated successfully" });
//   } catch (err) {
//     console.error("Error in /update route:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// module.exports = router;


























const express = require("express");
const router = express.Router();
const User = require("../schema/user.schema"); // Keep this line only once
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Joi = require("joi");
const verifyToken = require("../middleware/authenticateToken"); // Import the middleware
const Folder = require("../schema/folder.schema");
const Form = require("../schema/form.schema");

dotenv.config();

// Validation schema for registration
const registerSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(30).required(),
});

// Registration route
router.post("/register", async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const { name, email, password } = req.body;
  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error in /register route:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Wrong username or password" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/details", async (req, res) => {
  const userEmail = req.query.email;
  try {
    console.log("Fetching user details for email:", userEmail);
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ name: user.name, email: user.email });
  } catch (err) {
    console.error("Error fetching user details:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});



router.put("/update", verifyToken, async (req, res) => {
  const { name, email, oldPassword, newPassword } = req.body;
  const userId = req.user?.id; // Get user ID from the decoded token

  if (!userId) {
    return res.status(403).json({ error: "Unauthorized access" });
  }

  try {
    // Fetch the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update password if both oldPassword and newPassword are provided
    if (oldPassword && newPassword) {
      const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Incorrect old password" });
      }
      user.password = await bcrypt.hash(newPassword, 10); // Hash the new password
    }

    // Update name in the User schema if provided
    if (name) {
      user.name = name;
    }

    // Update email across all schemas if provided
    if (email) {
      // Check if the email is already in use by another user
      const emailExists = await User.findOne({ email });
      if (emailExists && emailExists._id.toString() !== userId) {
        return res.status(400).json({ message: "Email is already in use" });
      }

      const oldEmail = user.email; // Store the old email before updating
      user.email = email;

      // Update email in related schemas
      await Promise.all([
        Folder.updateMany({ email: oldEmail }, { email }),
        Form.updateMany({ email: oldEmail }, { email }),
      ]);
    }

    await user.save(); // Save updated user details
    res.status(200).json({ message: "User and related schemas updated successfully" });
  } catch (err) {
    console.error("Error in /update route:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;



// router.put("/update", verifyToken, async (req, res) => {
//   const { name, email, oldPassword, newPassword } = req.body;
//   const userId = req.user.id; // Get user ID from the decoded token

//   try {
//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // If old password and new password are provided, update password
//     if (oldPassword && newPassword) {
//       const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
//       if (!isPasswordCorrect) {
//         return res.status(400).json({ message: "Incorrect old password" });
//       }
//       user.password = await bcrypt.hash(newPassword, 10); // Hash the new password
//     }

//     // Update name and email if provided
//     if (name) user.name = name;
//     if (email) user.email = email;

//     await user.save(); // Save the updated user to the database
//     res.status(200).json({ message: "User updated successfully" });
    
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

