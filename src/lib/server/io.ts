//This code handles the websocket server logic
import type { Server as HTTPServer } from 'http';
import type { Http2SecureServer } from 'http2';
import { Server, type DisconnectReason } from 'socket.io';

//Handles server initialsation
export function initializeSocket(httpServer: HTTPServer | Http2SecureServer | any) {
	const io = new Server(httpServer, {
		cors: { origin: '*' }
	});

	io.on('connection', (socket) => {
		console.log(`User connected: ${socket.id}`);

		//handle disconnects
		socket.on('disconnect', (reason: DisconnectReason) => {
			console.log(`User disconnected: ${socket.id}, ${reason}`);
		});
	});

	return io;
}
