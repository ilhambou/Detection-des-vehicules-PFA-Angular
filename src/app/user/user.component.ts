import {Component, OnInit} from '@angular/core';
import {UserService} from "../_services/user.service";
import {response} from "express";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
 // @ts-ignore
  message;
  constructor(private userService:UserService) {
 }
  ngOnInit(): void {
   this.forUser();
  }
forUser()
{
  this.userService.forUer().subscribe(
    (response)=>{
      console.log(response);
      this.message=response;
    },
    (error)=>{
      console.log(error);
    }
  );
}}
