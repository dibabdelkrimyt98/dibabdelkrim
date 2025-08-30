const http = require('http');
const app = require('./app');
const { connectDB } = require('./config/db');
require('dotenv').config();


const PORT = process.env.PORT || 5000;


(async () => {
try {
await connectDB();
const server = http.createServer(app);
server.listen(PORT, () => {
console.log(`✅ Server running on http://localhost:${PORT}`);
});
} catch (err) {
console.error('❌ Failed to start server:', err);
process.exit(1);
}
})();