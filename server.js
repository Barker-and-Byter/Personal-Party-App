import { createServer } from 'http';
import { handler } from './build/handler.js';
import { initializeSocket } from './src/lib/server/io.js';
import express from 'express';

const app = express();
const server = createServer(app);

initializeSocket(server);

app.use(handler);

const PORT = process.env.port || 3000;
server.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
