import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enligne',
  templateUrl: './enligne.component.html',
  styleUrls: ['./enligne.component.css']
})

export class EnligneComponent implements OnInit {

  adresse:any
  myForm: FormGroup;
  
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

  ngOnInit(): void {

  }

  goAdresseDuBien() {
    var data = this.myForm.value;
    this.router.navigate(['/adresseDuBien'], { queryParams:  {'adresse': data.adresseDuBien}}
    );
  }

}
