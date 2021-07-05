import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Annonce } from 'src/app/models/Annonce';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-enchere-du-bien',
  templateUrl: './enchere-du-bien.component.html',
  styleUrls: ['./enchere-du-bien.component.css']
})

export class EnchereDuBienComponent implements OnInit {

  @Input() annonce : Annonce;
  myForm: FormGroup;
  adresse: any;
  code: any;
  titre: any;
  ville: any;
  categorie: any;
  typeBien: any;
  surface: any;
  nbPiece: any;
  nbSalleDeBian: any;
  etageBien: any;
  jardin: any;
  username: any;
  images:[];

  constructor(private fb: FormBuilder, private route: ActivatedRoute,private router: Router, private annonceService:AnnonceService,private toastr: ToastrService) { 

    let FormControls = {
      prix : new FormControl('',[
        Validators.pattern("[0-9]")
      ]),
      dateDebut : new FormControl('',[
        Validators.pattern("xx-yy-zz")
      ]),
      dateFin : new FormControl('',[
        Validators.pattern("xx-yy-zz")
      ])
    }
    this.myForm = this.fb.group(FormControls);
  }

  get prix() {
    return this.myForm.get('prix');
  }

  get dateDebut() {
    return this.myForm.get('dateDebut');
  }

  get dateFin() {
    return this.myForm.get('dateFin');
  }

  ngOnInit(): void {
    var username = JSON.parse(localStorage.getItem('currentUser')).user.username;
    this.route.queryParams.subscribe((queryParam) => {
      if (queryParam) {
        this.adresse= queryParam['adresse'];
        this.code= queryParam['code'];
        this.titre= queryParam['titre'];
        this.ville= queryParam['ville'];
        this.categorie= queryParam['categorie'];
        this.typeBien= queryParam['typeBien'];
        this.surface= queryParam['surface'];
        this.nbPiece= queryParam['nbPiece'];
        this.nbSalleDeBian= queryParam['nbSalleDeBian'];
        this.etageBien= queryParam['etageBien'];
        this.images = queryParam['image']
        this.jardin= queryParam['jardin'];
      }   
    });
  }

  addAnnonce() {
    /*
    var dateNow=new Date()
    let data = this.myForm.value;
    
    let annonce = 
    
    new Annonce(this.username, this.titre, dateNow,this.adresse, this.code, this.ville, this.categorie,
      this.typeBien, this.surface, this.nbPiece, this.nbSalleDeBian, this.etageBien, this.jardin,
      data.prix, data.dateDebut, data.dateFin);

    this.annonceService.ajouterAnnonce(annonce).subscribe(
      res=>{  
        this.toastr.success("Annonce ajouté avec succès");
        this.router.navigate(['/home']); 
      },
      err=>{
        console.log(err);
      }
    )*/
  }

}


