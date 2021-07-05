import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce, Image } from 'src/app/models/Annonce';

@Component({
  selector: 'app-information-du-bien',
  templateUrl: './information-du-bien.component.html',
  styleUrls: ['./information-du-bien.component.css']
})

export class InformationDuBienComponent implements OnInit {

  myForm: FormGroup;
  adresse: any;
  code: any;
  titre: any;
  ville: any;
  categorie: any;
  typeBien: any;
  selectedFile: File[]
  x: any
  imgs: Image[];

  submited=false;
  form:Annonce;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {

    let FormControls = {
      surface: new FormControl('', [
        Validators.required
      ]),
      nbPiece: new FormControl('', [

      ]),
      nbSalleDeBian: new FormControl('', [

      ]),
      etageBien: new FormControl('', [

      ]),
      jardin: new FormControl('', [

      ])
    }
    this.myForm = this.fb.group(FormControls);
  }

  get surface() {
    return this.myForm.get('surface');
  }

  get nbPiece() {
    return this.myForm.get('nbPiece');
  }

  get nbSalleDeBian() {
    return this.myForm.get('nbSalleDeBian');
  }

  get etageBien() {
    return this.myForm.get('etageBien');
  }

  get jardin() {
    return this.myForm.get('jardin');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam) => {
      if (queryParam) {
        this.adresse = queryParam['adresse'];
        this.code = queryParam['code'];
        this.titre = queryParam['titre'];
        this.ville = queryParam['ville'];
        this.categorie = queryParam['categorie'];
        this.typeBien = queryParam['typeBien'];
      }
    });
  }
  
  extractFileContent(f: File): String {
    let retVal = "";
    let b: Blob = f.slice();
    b.text().then(r => {
      retVal = r;
    })
    return retVal;
  }

  stringToBytes(str: String): Byte[] {
    var bytes = []; 
		for (var i = 0; i < str.length; ++i) {
			var code = str.charCodeAt(i);
			bytes = bytes.concat([code]);
		}
    return bytes;
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files;
    this.imgs = []
    let f = this.selectedFile[0];
    let imageContent: Byte[] = this.stringToBytes(this.extractFileContent(f));
    let imageFileName: String = f.name;
    this.imgs.push({content:imageContent, fileName:imageFileName});
    console.log(this.selectedFile)
  }

  goEnchirirBien() {
    var data = this.myForm.value;
    /*
    this.form = new Annonce(this.adresse, this.code, this.ville, this.categorie,
    this.typeBien, this.surface, this.nbPiece, this.nbSalleDeBian, this.etageBien, 
    this.imgs, this.jardin) ;*/
    
    this.submited = true;

    /*this.router.navigate(['/enchéreDuBien'],
      {
        queryParams: {
          'adresse': this.adresse, 'code': this.code, 'titre': this.titre,
          'ville': this.ville, 'categorie': this.categorie, 'type': this.typeBien,
          'surface': data.surface, 'nbPiece': data.nbPiece, 'salleDeBain': data.nbSalleDeBian,
          'etage': data.etageBien, 'image': this.imgs, 'jardin': data.jardin
        }
      }
    );*/
  }

}

