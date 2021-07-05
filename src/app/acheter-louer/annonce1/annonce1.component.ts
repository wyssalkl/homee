import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RendezVous } from 'src/app/models/RendezVous';
import { AnnonceService } from 'src/app/services/annonce.service';
import { RendezVousService } from 'src/app/services/rendez-vous.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-annonce1',
  templateUrl: './annonce1.component.html',
  styleUrls: ['./annonce1.component.css']
})
export class Annonce1Component implements OnInit {
  myForm: FormGroup;
 
  AllAnnonce: any
  nameUser:any
  infoUser:any
  a:any
  idAnnonce:any
  idPreneur:any
  annonce:any
  addToFavoris: boolean = false;

  constructor(private fb: FormBuilder, private rendezVousService:RendezVousService,private annonceService:AnnonceService,private usersService:UsersService, private router: Router,private route: ActivatedRoute, private toastr: ToastrService) { 
    let FormControls = {
      objectRdv : new FormControl('',[
    
      ]),
      date : new FormControl('',[
       
      ]),
      heure : new FormControl('',[
       
      ])
    }
    this.myForm = this.fb.group(FormControls);
  }

  get objectRdv() {
    return this.myForm.get('objectRdv');
  }

  get date() {
    return this.myForm.get('date');
  }
  
  get heure() {
    return this.myForm.get('heure');
  }

  ngOnInit(): void {
    this.nameUser= JSON.parse(localStorage.getItem('currentUser')).user.username; 
    this.route.queryParams.subscribe((queryParam) => {
      if (queryParam) {
        this.idAnnonce= queryParam['id'];      
      }
      this.affiche() 
      this.afficheUser()
    });
  }

  affiche() {
    this.annonceService.getOneAnnonce(this.idAnnonce).subscribe(
      response => {
        this.AllAnnonce = response;
        this.AllAnnonce = Array.of(this.AllAnnonce); 
      },
      error => {
        console.log(error);
      }
    );
  }

  afficheUser() {
    this.usersService.getUser(this.nameUser).subscribe(
      response => {
        this.infoUser = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  mailRdv() {
    var data = this.myForm.value; 
    this.idPreneur= JSON.parse(localStorage.getItem('currentUser')).user.id; 
    var rdv = new RendezVous(this.idAnnonce, data.objectRdv, data.date, data.heure, this.idPreneur); 
    this.rendezVousService.sendMail(rdv).subscribe(
      err =>{
        console.log(err); 
      },
      res=>{
        this.toastr.success("Mail envoyé avec succès");
      }
    )
  }

  /*
  ajouterAnnonceFavoris(item){
    this.annonceService.ajouterAnnonce(this.annonce).subscribe(
      res=> {
        this.addToFavoris = true;
        this.router.navigate(['/espacePreneur'], { queryParams: { 'id': item.id} });
      },
      error => {
        console.log(error);
      }
    );
  }

  supprimerAnnonceFavoris() {
    this.annonceService.supprimerAnnonce(this.annonce).subscribe(
    res=> {
      this.addToFavoris = false;
    },
    error => {
      console.log(error);
    }
  );
  }*/

}
