import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/Users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register-preneur',
  templateUrl: './register-preneur.component.html',
  styleUrls: ['./register-preneur.component.css']
})
export class RegisterPreneurComponent implements OnInit {

  myForm : FormGroup;
  error: boolean;

  constructor(private fb: FormBuilder,
    private usersService:UsersService,
    private toastr: ToastrService,
    private router: Router
  ) 
  { 

    let formControls = {
      nom : new FormControl('',[
          Validators.required,
          Validators.pattern("[A-Z a-z .'-]+"),
          Validators.minLength(3)
      ]),
      Number : new FormControl('',[
          Validators.required,
          Validators.pattern("[0-9]+"),
          Validators.minLength(8)
      ]),

      email : new FormControl('', [
          Validators.required,
          Validators.pattern("^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$")
      ]),

      password : new FormControl('',[
          Validators.required,
          Validators.minLength(6)
      ]),
      
      repeatPassword : new FormControl('',[
          Validators.required,
          Validators.minLength(6)
      ])
    }
    this.myForm = this.fb.group(formControls)
  }

       
  get nom() {
    return this.myForm.get('nom');
  }
  get Number() {
      return this.myForm.get('Number');
  }
  get email() {
      return this.myForm.get('email');
  }
  get password() {
      return this.myForm.get('password');
  }
  get repeatPassword() {
      return this.myForm.get('repeatPassword')
  }

  ngOnInit(): void {
    this.error=false;
  }


  creerPreneur() {
    const username = this.myForm.get('nom').value;
    const numero = this.myForm.get('Number').value;
    const email = this.myForm.get('email').value;
    const password = this.myForm.get('password').value;

    let userPreneur = new Users(username, numero, email, password);

    this.usersService.addPreneur(userPreneur).subscribe(
      res=> {
        this.toastr.success("Vous êtes bien inscrit " + username + "!");
        this.router.navigate(['/login']);
      },
      err=> { 
        this.toastr.error("Inscription echouée");
        this.error=true;
      }
    )
  }
}
   
   