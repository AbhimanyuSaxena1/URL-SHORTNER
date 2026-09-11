import config from './src/config/config.js';
import app from './src/app/App.js';
import connectDB from './src/config/db.js';

await connectDB()

app.listen(config.Port, () => {
    console.log('server is running on port', config.Port);
});