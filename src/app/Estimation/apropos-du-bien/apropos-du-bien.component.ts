import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apropos-du-bien',
  templateUrl: './apropos-du-bien.component.html',
  styleUrls: ['./apropos-du-bien.component.css']
})

export class AproposDuBienComponent implements OnInit {

  myForm: FormGroup;
  adresse: any;
  code: any;
  titre: any;
  ville: any;
  categorie: any;
  
  constructor(private fb: FormBuilder, private route: ActivatedRoute,private router: Router) { 
    let FormControls = {
      typeBien : new FormControl('', [
        Validators.required
      ])
    }
    this.myForm = this.fb.group(FormControls);
  }

  get typeBien() {
    return this.myForm.get('typeBien');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam) => {
      if (queryParam) {
        this.adresse= queryParam['adresse'];
        this.code= queryParam['code'];
        this.titre= queryParam['titre'];
        this.ville= queryParam['ville'];
        this.categorie= queryParam['categorie'];
      }   
    });
  }

  goInformationDuBien(){
    var data = this.myForm.value;
    this.router.navigate(['/informationDuBien'], { queryParams:  {'adresse': this.adresse,'code': this.code,'titre': this.titre,'ville': this.ville,
    'categorie': this.categorie, 'type': data.typeBien}}
    );
  }
}
