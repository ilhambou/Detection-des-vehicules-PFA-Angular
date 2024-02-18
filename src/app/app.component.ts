import {Component, OnInit} from '@angular/core';

import {UserAuthService} from "./_services/user-auth.service";
import {Router} from "@angular/router";
import {UserService} from "./_services/user.service";
import {WebSocketServiceService} from "./_services/web-socket-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'pfa2';



}
