import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/app/services/annonce.service';

@Component({
  selector: 'app-annoncelocation',
  templateUrl: './annoncelocation.component.html',
  styleUrls: ['./annoncelocation.component.css']
})
export class AnnoncelocationComponent implements OnInit {

  allAnnonce:any
  OneAnnonce:any
  constructor(private annonceService:AnnonceService, private route: ActivatedRoute,private router: Router) { 

  }

  ngOnInit(): void {
    this.affiche()
  }

  affiche() {
    this.annonceService.getAnnonces().subscribe(
      response => {
        this.allAnnonce = response.filter(dar => dar.bien.categorie == "Location")
      },
      error => {
        console.log(error);
      }
    );
  }

  goOneAnnonce(item){
    this.router.navigate(['/Annonceloc1'], { queryParams: { 'id': item.id} });
  }

}
