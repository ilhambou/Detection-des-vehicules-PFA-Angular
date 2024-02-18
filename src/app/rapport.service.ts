import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RapportService {

  private apiUrl = 'http://localhost:9090/api/rapports'; // Changez l'URL selon votre backend

  constructor(private http: HttpClient) { }

  // Méthode pour créer un rapport
  createRapport(rapport: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, rapport);
  }
}
