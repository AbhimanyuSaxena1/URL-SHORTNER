import app from '../src/app/App.js';
import connectDB from '../src/config/db.js';

await connectDB();

export default app;