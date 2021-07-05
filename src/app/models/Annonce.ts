import { Byte } from "@angular/compiler/src/util";

export class Annonce {
	id: String;
	nomProprietaire: String;
	titre: String;
	datePublierAnnonce: Date;
	bien: Bien
	
	constructor(nomProprietaire: any, titre: String, datePublierAnnonce: Date,
		adresse: String, codePostal: Number, ville: String,
		categorie: String, typeBien: String, surface: Number,
		nbPieces: Number, nbSalleDeBain: Number,
		nbEtage: Number, jardin: String, imageContent : Byte[], imageFileName : String,
		prix: any,dateDepart: Date, dateFin: Date) {

			this.nomProprietaire = nomProprietaire;
			this.titre = titre;
			this.datePublierAnnonce = datePublierAnnonce;
			this.bien.adresse = adresse;
			this.bien.codePostal = codePostal;
			this.bien.ville = ville;
			this.bien.categorie = categorie;
			this.bien.typeBien = typeBien;
			this.bien.surface = surface;
			this.bien.nbPieces = nbPieces;
			this.bien.nbSalleDeBain = nbSalleDeBain;
			this.bien.nbEtage = nbEtage;
			this.bien.images.push({ content: imageContent, fileName: imageFileName })
			this.bien.jardin = jardin;
			this.bien.prix = prix;
			this.bien.dateDepart = dateDepart;
			this.bien.dateFin = dateFin;
	}
}

export interface Bien {
	adresse: String;
	codePostal: Number;
	ville: String;
	categorie: String;
	typeBien: String;
	surface: Number;
	nbPieces: Number;
	nbSalleDeBain: Number;
	nbEtage: Number;
	images: [Image]
	jardin: String;
	prix: any;
	dateDepart: Date;
	dateFin: Date;
}
export interface Image {
	content: Byte[];
	fileName: String;
}