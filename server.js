// server.js

const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const rateLimit = require('express-rate-limit'); // Import express-rate-limit

dotenv.config();  // Load environment variables from .env file

const app = express();
app.use(express.json());  // Middleware to parse incoming JSON data

// Set up rate limiter for login and registration routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 5,                    // Limit each IP to 5 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes"
});

// Apply rate limiter to login and register routes
app.use("/api/auth/login", authLimiter);
app.use("/api/auth/register", authLimiter);

// Routes
app.use("/api/auth", authRoutes);  // Authentication routes (register, login)
app.use("/api/user", userRoutes);  // User profile routes (get, update)
app.use("/api", protectedRoutes);  // Protected routes requiring roles (admin, moderator)

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
