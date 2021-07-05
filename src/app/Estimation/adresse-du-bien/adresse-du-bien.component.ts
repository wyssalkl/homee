import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adresse-du-bien',
  templateUrl: './adresse-du-bien.component.html',
  styleUrls: ['./adresse-du-bien.component.css']
})

export class AdresseDuBienComponent implements OnInit {

  myForm: FormGroup;
  adresse:any

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private router: Router) { 
    let FormControls = {
      codePostal : new FormControl ('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
      ]),
      titre :new FormControl ('', [
        Validators.required,
        Validators.pattern("[A-Z a-z .'-]+")
      ]),
      ville: new FormControl ('', [
        Validators.required
      ]),
      categorie: new FormControl ('', [
        Validators.required
      ])
    }
    this.myForm = this.fb.group(FormControls);
  }

  get codePostal() {
    return this.myForm.get('codePostal');
  }

  get titre() {
    return this.myForm.get('titre');
  }

  get ville() {
    return this.myForm.get('ville');
  }
  get categorie() {
    return this.myForm.get('categorie');
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe((queryParam) => {
      if (queryParam) {
        this. adresse= queryParam['adresse'];
      }   
    });
    
  }

  goAproposDuBien() {
    var data = this.myForm.value;
    this.router.navigate(['/aproposDuBien'], { queryParams:  {'adresse': this.adresse,'code':data.codePostal,'titre':data.titre,'ville':data.ville,'categorie':data.categorie}}
    );
  }

}
