//This code handles the websocket server logic
import type { Server as HTTPServer } from 'http';
import type { Http2SecureServer } from 'http2';
import { Server } from 'socket.io';

//Handles server initialsation
export function initializeSocket(httpServer: HTTPServer | Http2SecureServer | any) {
	const io = new Server(httpServer, {
		cors: { origin: '*' }
	});

	io.on('connection', (socket) => {
		console.log(`User connected: ${socket.id}`);

		//handle disconnects
		socket.on('disconnect', () => {
			console.log(`User disconnected: ${socket.id}`);
		});
	});

	return io;
}
