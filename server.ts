import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

// Enable JSON parse middle-ware
app.use(express.json());

// Serve static assets from the root directory
app.use(express.static(path.join(process.cwd())));

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Serve index.html for any remaining route paths (client-side routing fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "index.html"));
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`[Static Server] Running statically on http://localhost:${PORT}`);
});
