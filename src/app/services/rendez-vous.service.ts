import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from '../models/RendezVous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  rendezVous:any

  private sendRDV = 'http://localhost:8080/sendRendezVousEmail';
  private getAllRDVs = 'http://localhost:8080/getAllRDV';
  private getRDV = 'http://localhost:8080/getRDV/';
  private deleteOneRDV = 'http://localhost:8080/deleteRDV/';

  constructor(private httpClient: HttpClient) { }

  sendMail(rendezVous: RendezVous):Observable<any> {
    return this.httpClient.post<any>(this.sendRDV, rendezVous);
  }

  getRDVs() {
    return this.httpClient.get<any>(this.getAllRDVs);
  }

  getOneRDV(id: String) {
    return this.httpClient.get<any>(this.getRDV+ id);
  }

  supprimerRDV(id: String) {
    return this.httpClient.delete<any>(this.deleteOneRDV+ id);
  }
}
