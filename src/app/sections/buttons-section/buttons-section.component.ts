import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons-section',
  templateUrl: './buttons-section.component.html',
  styleUrls: ['./buttons-section.component.css']
})
export class ButtonsSectionComponent implements OnInit {


  myForm: FormGroup;
  adresse:any

  constructor(private fb: FormBuilder, private router: Router) { 

    let FormControls = {
      adresseDuBien : new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z a-z 0-9 .'-]+")
      ])
    }
    this.myForm = this.fb.group(FormControls);
  }

  get adresseDuBien() {
    return this.myForm.get('adresseDuBien');
  }

  ngOnInit() {
  }

  goAdresseDuBien() {
    var data = this.myForm.value;
    console.log(data); 
    this.router.navigate(['/adresseDuBien'], { queryParams:  {'adresse': data.adresseDuBien}}
    );
  }

}
