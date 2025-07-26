import app from "./app.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 3000;

// Connect to database
await connectDB();

// Start server only if not in production (Vercel handles this)
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;