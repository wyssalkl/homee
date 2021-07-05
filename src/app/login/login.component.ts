import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  myForm : FormGroup;
  currentUser : any;

  constructor(private fb: FormBuilder,
    private usersService:UsersService,
    private toastr: ToastrService,
    private router: Router
    ) 
    { 

    let formControls = {

      username : new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z a-z 0-9 .'-_*]+")
      ]),

      password : new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }   
    this.myForm = this.fb.group(formControls);
  }

  get username() {
    return this.myForm.get('username');
  }

  get password() {
    return this.myForm.get('password');
  }

  ngOnInit() {
  }

  login() {
    const username = this.myForm.get('username').value;
    const password = this.myForm.get('password').value;
    this.usersService.loginUser(username,password) 
    .pipe(first())
    .subscribe(
      res=> {
        if (this.usersService.currentUserValue) {
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          let role = this.currentUser.user.authorities[0].authority;
          this.toastr.success("Vous êtes bien authentifié !");
          switch (role) {
            case "admin" : this.router.navigate(['/espaceAdmin']);
            break;
            case "preneur" : this.router.navigate(['/espacePreneur']);
            break;
            case "proprietaire" : this.router.navigate(['/espaceConnecté']);
            break;
          }
        }
      },
      err=> {
        this.toastr.error("Mauvaises informations d’authentification");
      }
    );
  }

}
