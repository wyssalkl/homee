import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  allRDV:any
  public popoverTitle:string='Confirmation';
  public popoverMessage:string='voulez-vous vraiment supprimer cet acteur ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  constructor(private rendezVousService:RendezVousService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.affiche()
  }
  
  affiche(){
    this.rendezVousService.getRDVs().subscribe(
      response => {
        this.allRDV= response;
      },
      error => {
        console.log(error);
      }
    );
  }

  delete(rdv) {
    this.rendezVousService.supprimerRDV(rdv).subscribe(
      res=>{
        this.toastr.success("Rendez vous supprimé avec succès");
        this.affiche();
      },
      err =>{
        console.log(err);
      }
    )
  }


}
