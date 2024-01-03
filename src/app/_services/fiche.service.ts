import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FicheDeRecherche } from '../model/fiche';

@Injectable({
  providedIn: 'root'
})
export class FicheService {
  private apiUrl = 'http://localhost:9090/api/fiches';

  constructor(private http: HttpClient) {}

  addFiche(fiche: FicheDeRecherche): Observable<FicheDeRecherche> {
    return this.http.post<FicheDeRecherche>(`${this.apiUrl}/ajouter`, fiche);
  }

  getFiches(): Observable<FicheDeRecherche[]> {
    return this.http.get<FicheDeRecherche[]>(`${this.apiUrl}/list`);
  }
}

