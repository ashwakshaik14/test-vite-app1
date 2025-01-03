// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const userRoute = require("./routes/user");
// const folderRoute = require("./routes/folder");
// const formRoute = require("./routes/form");
// const flowRoute = require("./routes/flow");





// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 4444;

// // Middleware
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Frontend URL
//     methods: ["GET", "POST", "DELETE"], // Include PUT if needed
//     credentials: true,
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// // Routes
// app.use("/api/user", userRoute);
// app.use("/api/folders", folderRoute);
// app.use("/api/forms", formRoute);
// app.use("/api/flow", flowRoute);


// // Start the Server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



























const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/user");
const folderRoute = require("./routes/folder");
const formRoute = require("./routes/form");
const flowRoute = require("./routes/flow");
const responseRoutes =require("./routes/response");





dotenv.config();
const app = express();
const PORT = process.env.PORT || 4444;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Include PUT if needed
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api/user", userRoute);
app.use("/api/folders", folderRoute);
app.use("/api/forms", formRoute);
app.use("/api/flow", flowRoute);
app.use("/api", responseRoutes);




// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});