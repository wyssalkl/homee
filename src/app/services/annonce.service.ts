import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonce } from '../models/Annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  annonce:any

  private addAnnonce = 'http://localhost:8080/addAnnonce';
  private getAllAnnonces = 'http://localhost:8080/getAllAnnonces'
  private getAnnonce = 'http://localhost:8080/getAnnonce/';
  private updateAnnonce = 'http://localhost:8080/updateAnnonce/';
  private deleteAnnonce = 'http://localhost:8080/deleteAnnonces/';

  constructor(private httpClient: HttpClient) { }

  ajouterAnnonce(annonce: Annonce) {
    return this.httpClient.post<any>(this.addAnnonce, annonce);
  }

  getAnnonces() {
    return this.httpClient.get<any>(this.getAllAnnonces);
  }

  getOneAnnonce(id: String):Observable<any> {
    return this.httpClient.get<any>(this.getAnnonce+ id);
  }

  modifierAnnonce(annonce: Annonce, id: String) {
    return this.httpClient.put<any>(this.updateAnnonce+ id, annonce);
  }
  
  supprimerAnnonce(id: String) {
    return this.httpClient.delete<any>(this.deleteAnnonce+ id);  
  }

} 

