import { Injectable } from '@angular/core';
import {Socket} from "ngx-socket-io";

@Injectable({
  providedIn: 'root'
})
export class WebSocketServiceService {

  constructor(private socket: Socket) {}

  connect() {
    // Connect to the WebSocket server
    this.socket.connect();
  }

  disconnect() {
    // Disconnect from the WebSocket server
    this.socket.disconnect();
  }

  listenForNotifications() {
    // Listen for notifications from the WebSocket server
    return this.socket.fromEvent('notification');
  }
}