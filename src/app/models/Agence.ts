export class Agence {
    id: String;
    nomAgence: String;
	ville: String;
	nomDirecteur: String;
	description: String;
	nbSatisfaction: Number;
	nbVente: Number;
	contact: String;

    constructor(nomAgence: String, ville: String, nomDirecteur: String, 
        description: String, nbSatisfaction: Number, nbVente: Number, contact: String) {
        this.nomAgence = nomAgence;
        this.ville = ville;
        this.nomDirecteur = nomDirecteur;
        this.description = description;
        this.nbSatisfaction = nbSatisfaction;
        this.nbVente = nbVente;
        this.contact = contact;
    }
}