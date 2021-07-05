import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-annoncevente',
  templateUrl: './annoncevente.component.html',
  styleUrls: ['./annoncevente.component.css']
})
export class AnnonceventeComponent implements OnInit {

  allAnnonce: any

  constructor(private annonceService:AnnonceService, private route: ActivatedRoute,private router: Router) { 
    
  }

  ngOnInit(): void {
    this.affiche()
  }

  affiche() {
    this.annonceService.getAnnonces().subscribe(
      response => {
        this.allAnnonce=response.filter(dar => dar.bien.categorie=="Vente")
      },
      error => {
        console.log(error);
      }
    );
  }

  goOneAnnonce(item){
    this.router.navigate(['/annonce1'], { queryParams: { 'id': item.id} });
  }
}


