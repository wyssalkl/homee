import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})

export class NewsletterComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    let FormControls = {
      exampleInputText : new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z a-z .'-]+"),
        Validators.minLength(8)
      ]),
      exampleInputEmail : new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$")
      ])
    }
    this.myForm = this.fb.group(FormControls);
  }

  get exampleInputText() {
    return this.myForm.get('exampleInputText');
  }

  get exampleInputEmail() {
    return this.myForm.get('exampleInputEmail');
  }

  ngOnInit(): void {
  }

  myNewsletter() {
    console.log(this.myForm.value);
  }

}
