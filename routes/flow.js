const express = require("express");
const FlowData = require("../schema/flow.schema"); // Import the schema
const router = express.Router();

// POST route to save form data
// router.post("/save-flow", async (req, res) => {
//   try {
//     const { formId, components } = req.body;

//     if (!formId || !components || !Array.isArray(components)) {
//       return res.status(400).json({ message: "Invalid input data" });
//     }

//     const flowData = new Flow({
//       formId,
//       components,
//     });

//     await flowData.save();
//     res.status(201).json({ message: "Flow saved successfully", flowData });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error", error });
//   }
// });






router.post("/save-flow", async (req, res) => {
  try {
    const { formId, components } = req.body;

    if (!formId || !Array.isArray(components)) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    // Check if a document with the same formId already exists
    const existingFlow = await FlowData.findOne({ formId });
    if (existingFlow) {
      return res.status(400).json({ message: "Form ID already exists" });
    }

    // Create a new FlowData document
    const flowData = new FlowData({ formId, data: components });
    await flowData.save();

    res.status(201).json({ message: "Flow saved successfully", flowData });
  } catch (error) {
    console.error("Backend Error:", error); // Log full error details
    res.status(500).json({ message: "Internal server error", error });
  }
});

// GET endpoint to retrieve form data by formId
// GET endpoint to retrieve form data by formId
router.get("/get-form/:formId", async (req, res) => {
  const { formId } = req.params; // Extract formId from URL parameters

  try {
    console.log("Received formId:", formId); // Log the received formId

    // Fetch the flow data from the database by formId
    const flowData = await FlowData.findOne({ formId });

    if (!flowData) {
      console.log("Form not found for formId:", formId);
      return res.status(404).json({ message: "Form not found" });
    }

    console.log("Queried flowData:", flowData); // Log the fetched flowData
    res.status(200).json(flowData); // Send the form data as the response
  } catch (error) {
    console.error("Backend Error Details:", error); // Log detailed error
    res.status(500).json({ message: "Internal server error", error });
  }
});


module.exports = router;