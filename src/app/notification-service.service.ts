import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

    apiUrl = "http://localhost:9090";  // Assuming your Spring Boot API is running on this address
  constructor(private http:HttpClient) { }

    // Send notification to the backend
    sendNotification(notificationData: any): Observable<any> {
        const endpoint = `${this.apiUrl}/sendNotification`;
        return this.http.post(endpoint, notificationData);
    }


}
