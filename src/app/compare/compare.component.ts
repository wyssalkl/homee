import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})

export class CompareComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { 
    let FormControls = {
      ville : new FormControl('', [
        Validators.pattern("[A-Z a-z .'-]+"),
        Validators.minLength(4)
      ])

    }
    this.myForm = this.fb.group(FormControls);
  }

  get ville() {
    return this.myForm.get('ville');
  }

  ngOnInit(): void {
  }

  goAgences() {
    var data = this.myForm.value;
    this.router.navigate(['/rechercheragence'], { queryParams: {'ville':data.ville}}
    );
  }

}
