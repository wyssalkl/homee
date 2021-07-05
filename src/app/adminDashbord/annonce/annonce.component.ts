import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  allAnnonce:any
  public popoverTitle:string='Confirmation';
  public popoverMessage:string='voulez-vous vraiment supprimer cet annonce ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  constructor(private annonceService:AnnonceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.affiche()
  }

  affiche() {
    this.annonceService.getAnnonces().subscribe(
      response => {
        this.allAnnonce = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteAnnonce(annonce) {  
    this.annonceService.supprimerAnnonce(annonce).subscribe(
      res=>{
        this.toastr.success("Annonce supprimé avec succès");
        this.affiche();
      },
      err =>{
        console.log(err);
      }
    )
  }

}
