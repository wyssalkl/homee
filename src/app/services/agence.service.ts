import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agence } from '../models/Agence';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  agence:any

  private addOneAgence = 'http://localhost:8080/addAgence';
  private getAllAgences = 'http://localhost:8080/getAllAgence';
  private getOneAgence = 'http://localhost:8080/getAgence/';
  private updateOneAgence = 'http://localhost:8080/updateAgence/';
  private deleteAgence = 'http://localhost:8080/deleteAgence/';

  constructor(private httpClient: HttpClient) { }

  ajouterAgence(agence: Agence) {
    return this.httpClient.post<any>(this.addOneAgence, agence);
  }

  getAgences() {
    return this.httpClient.get<any>(this.getAllAgences);
  }
  
  getUneAgence(id: String) {
    return this.httpClient.get<any>(this.getOneAgence+ id);
  }

  modifierAgence(id: String, agence: Agence) {
    return this.httpClient.put<any>(this.updateOneAgence+ id, agence);
  }

  supprimerAgence(id: String) {
    return this.httpClient.delete<any>(this.deleteAgence+ id);
  }
}
