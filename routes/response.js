// // routes/response.js
// const express = require("express");
// const router = express.Router();
// const Response = require("../schema/response.schema");

// // Route for tracking form visits
// router.post("/track/view/:formId", async (req, res) => {
//   const { formId } = req.params;
  
//   try {
//     let response = await Response.findOne({ formId });

//     if (!response) {
//       // If no record exists for the form, create a new one
//       response = new Response({ formId, visitCount: 1 });
//     } else {
//       // Increment the visit count
//       response.visitCount += 1;
//     }

//     await response.save();
//     res.status(200).json({ message: "Visit count tracked successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error tracking visit count" });
//   }
// });

// // Route for tracking field submissions
// // router.post("/track/field-submit/:formId", async (req, res) => {
// //   const { formId } = req.params;
// //   const { fieldName, fieldValue } = req.body;
  
// //   try {
// //     let response = await Response.findOne({ formId });

// //     if (!response) {
// //       response = new Response({ formId, fieldSubmissions: [] });
// //     }

// //     // Add the field submission to the array
// //     response.fieldSubmissions.push({ fieldName, fieldValue });
// //     await response.save();
    
// //     res.status(200).json({ message: "Field submission tracked successfully" });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: "Error tracking field submission" });
// //   }
// // });

// // Route for tracking full form submissions
// router.post("/track/full-form-submit/:formId", async (req, res) => {
//   const { formId } = req.params;
  
//   try {
//     let response = await Response.findOne({ formId });

//     if (!response) {
//       response = new Response({ formId, fullFormSubmissions: 1 });
//     } else {
//       // Increment the full form submission count
//       response.fullFormSubmissions += 1;
//     }

//     await response.save();
//     res.status(200).json({ message: "Full form submission tracked successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error tracking full form submission" });
//   }
// });



// router.get("/track/data/:formId", async (req, res) => {
//   const { formId } = req.params;

//   try {
//     const response = await Response.findOne({ formId });
//     if (response) {
//       res.status(200).json(response);
//     } else {
//       res.status(404).json({ message: "No response available." });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error fetching data." });
//   }
// });




// // router.post("/track/field-submit/:formId", async (req, res) => {
// //   const { formId } = req.params;
// //   // const { fieldName, fieldValue } = req.body;
// //   const submissions = Array.isArray(req.body) ? req.body : [req.body];
  
// //   try {
// //     let response = await Response.findOne({ formId });

// //     if (!response) {
// //       // If the response does not exist, create a new one
// //       response = new Response({
// //         fieldSubmissions: submissions,
// //         firstSubmissionAt: new Date(), // Set the first submission timestamp
// //       });
// //     } else {
// //       // console.log(response);
// //       // console.log(fieldName,fieldValue);
// //       // Add the field submission to the array
// //       response.users.push( {fieldSubmissions: submissions,
// //         firstSubmissionAt: new Date()});

// //       // Update the firstSubmissionAt if not already set
// //       // if (!response.users.firstSubmissionAt) {
// //       //   response.users.firstSubmissionAt = new Date();
// //       // }
// //     }

// //     await response.save();
// //     res.status(200).json({ message: "Field submission tracked successfully" });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: "Error tracking field submission" });
// //   }
// // });

// router.post("/track/field-submit/:formId", async (req, res) => {
//   const { formId } = req.params;
//   // const { fieldName, fieldValue } = req.body;
//   const submissions = Array.isArray(req.body) ? req.body : [req.body];
  
//   try {
//     let response = await Response.findOne({ formId });

//     if (!response) {
//       // If the response does not exist, create a new one
//       response = new Response({
//         fieldSubmissions: submissions,
//         firstSubmissionAt: new Date(), // Set the first submission timestamp
//       });
//     } else {
//       // console.log(response);
//       // console.log(fieldName,fieldValue);
//       // Add the field submission to the array
//       response.users.push( {fieldSubmissions: submissions,
//         firstSubmissionAt: new Date()});

//       // Update the firstSubmissionAt if not already set
//       // if (!response.users.firstSubmissionAt) {
//       //   response.users.firstSubmissionAt = new Date();
//       // }
//     }

//     await response.save();
//     res.status(200).json({ message: "Field submission tracked successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error tracking field submission" });
//   }
// });


// module.exports = router;




// Route for tracking field submissions
// router.post("/track/field-submit/:formId", async (req, res) => {
//   const { formId } = req.params;
//   const { fieldName, fieldValue } = req.body;
  
//   try {
//     let response = await Response.findOne({ formId });

//     if (!response) {
//       response = new Response({ formId, fieldSubmissions: [] });
//     }

//     // Add the field submission to the array
//     response.fieldSubmissions.push({ fieldName, fieldValue });
//     await response.save();
    
//     res.status(200).json({ message: "Field submission tracked successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error tracking field submission" });
//   }
// });




























// routes/response.js
const express = require("express");
const router = express.Router();
const Response = require("../schema/response.schema");

// Route for tracking form visits
router.post("/track/view/:formId", async (req, res) => {
  const { formId } = req.params;
  
  try {
    let response = await Response.findOne({ formId });

    if (!response) {
      // If no record exists for the form, create a new one
      response = new Response({ formId, visitCount: 1 });
    } else {
      // Increment the visit count
      response.visitCount += 1;
    }

    await response.save();
    res.status(200).json({ message: "Visit count tracked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error tracking visit count" });
  }
});



// Route for tracking full form submissions
router.post("/track/full-form-submit/:formId", async (req, res) => {
  const { formId } = req.params;
  
  try {
    let response = await Response.findOne({ formId });

    if (!response) {
      response = new Response({ formId, fullFormSubmissions: 1 });
    } else {
      // Increment the full form submission count
      response.fullFormSubmissions += 1;
    }

    await response.save();
    res.status(200).json({ message: "Full form submission tracked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error tracking full form submission" });
  }
});






router.post("/track/field-submit/:formId", async (req, res) => {
  const { formId } = req.params;
  const { userId, fieldName, fieldValue } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  try {
    // Find form response or create a new one
    let response = await Response.findOne({ formId });
    if (!response) {
      response = new Response({ formId, users: [] });
    }

    // Find user submission or create a new one
    let user = response.users.find((u) => u.userId === userId);
    if (!user) {
      // user = { userId, fieldSubmissions: [], lastSubmissionAt: Date.now() };
      // response.users.push(user);
      user = { userId, fieldSubmissions: [{ fieldName, fieldValue }], lastSubmissionAt: Date.now() };
      response.users.push(user);
      // Append field submission
    // user.fieldSubmissions.push({ fieldName, fieldValue });

    // Update last submission time
    // user.lastSubmissionAt = Date.now();

    }
    else{
    // Append field submission
    user.fieldSubmissions.push({ fieldName, fieldValue });

    // Update last submission time
    user.lastSubmissionAt = Date.now();

    }
    
    await response.save();

    console.log(user);
    res.status(200).json({ message: "Field submission tracked successfully" });
  } catch (error) {
    console.error("Error tracking field submission:", error);
    res.status(500).json({ message: "Error tracking field submission" });
  }
});



// router.get("/fetch/:formId", async (req, res) => {
//   const { formId } = req.params;
//   console.log("Received formId:", formId, "Type:", typeof formId); // Log the formId and its type

//   try {
//     const response = await Response.findOne({ formId: formId.trim() });
//     console.log("Database response:", response); // Log the query result

//     if (!response) {
//       return res.status(404).json({ message: "No data found for the provided formId" });
//     }
//     res.status(200).json(response);
//   } catch (error) {
//     console.error("Error fetching data by formId:", error);
//     res.status(500).json({ message: "Error fetching data" });
//   }
// });

router.get("/fetch/:formId", async (req, res) => {
  const { formId } = req.params;
  console.log("Received formId:", formId, "Type:", typeof formId); // Log the formId and its type

  try {
    const response = await Response.findOne({ formId: formId.trim() });
    console.log("Database response:", response); // Log the query result

    if (!response) {
      return res.status(404).json({ message: "No data found for the provided formId" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching data by formId:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});





// Route to fetch all data
// Route to fetch all form tracking data
// router.get("/fetch/all-data/:formId", async (req, res) => {
//   const { formId } = req.params;
//   try {
//       const response = await Response.findOne({ formId });
//       if (!response) {
//           return res.status(404).json({ message: "No data found for the given formId" });
//       }

//       const usersWithSubmissions = response.users.map((user) => ({
//           userId: user.userId,
//           lastSubmissionDate: user.lastSubmissionAt,
//           fieldsSubmitted: user.fieldSubmissions.map((field) => ({
//               fieldName: field.fieldName,
//               fieldValue: field.fieldValue,
//           })),
//       }));

//       const formattedData = {
//           formId: response.formId,
//           visitCount: response.visitCount,
//           fullFormSubmissions: response.fullFormSubmissions,
//           initialFormSubmissionCount: response.users.length,
//           users: usersWithSubmissions,
//       };

//       res.status(200).json(formattedData);
//   } catch (error) {
//       console.error("Error fetching data:", error);
//       res.status(500).json({ message: "Error fetching data" });
//   }
// });


module.exports = router;
