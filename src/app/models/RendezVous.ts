export class RendezVous {
    id: string;
    annonceId: String;
    objectRDV: String;
    dateRDV: Date;
    heureRDV: String;
    preneurId: String;
  
    constructor(annonceId: String, objectRDV: String, dateRDV: Date, heureRDV: String, preneurId: string) {    
      this.annonceId = annonceId;
      this.objectRDV = objectRDV;
      this.dateRDV = dateRDV;
      this.heureRDV = heureRDV;
      this.preneurId = preneurId;
    }
  }