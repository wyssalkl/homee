import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AgenceService } from 'src/app/services/agence.service';

@Component({
  selector: 'app-rechercher-agence',
  templateUrl: './rechercher-agence.component.html',
  styleUrls: ['./rechercher-agence.component.css']
})
export class RechercherAgenceComponent implements OnInit {
  AllAgence: any
  ville: any
  
  constructor(private agenceService: AgenceService, private toastr: ToastrService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam) => {
      if (queryParam) {
        this.ville=queryParam['ville'];
      }   
    });
    this.affiche()
  }

  affiche() {
    this.agenceService.getAgences().subscribe(
      response => {
        if(this.ville != '') {
          this.AllAgence=response.filter(agence => agence.ville.toUpperCase()==this.ville.toUpperCase());
          this.toastr.success("Voici les agences près de chez vous !");
        } else {
          this.AllAgence=response;
          this.toastr.info("Voici toutes les agences existantes")
        } 
      },
      error => {
        console.log(error);
      }          
    );
  }
}
