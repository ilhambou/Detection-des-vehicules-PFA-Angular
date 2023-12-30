import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  PATH_OF_API="http://localhost:9090/personne"
  constructor(private http:HttpClient) { }
  public EnregistrerFiche(clientData: any){
    return this.http.post(this.PATH_OF_API,clientData);
  }
  public getFiche():Observable<string[]>{
    return this.http.get<string[]>(this.PATH_OF_API);
  }
  public updateFiche(student:any){
    return this.http.put(this.PATH_OF_API+"/updateClient",student);
  }
  public deleteFiche(id: number){
    return this.http.delete(this.PATH_OF_API+"?id="+id);
  }
  public getFiche2(){
    return this.http.get(this.PATH_OF_API);
  }
}
