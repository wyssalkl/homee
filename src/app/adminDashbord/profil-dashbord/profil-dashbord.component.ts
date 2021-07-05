import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/Users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profil-dashbord',
  templateUrl: './profil-dashbord.component.html',
  styleUrls: ['./profil-dashbord.component.css']
})
export class ProfilDashbordComponent implements OnInit {

  myForm: FormGroup;
  user:any
  
  constructor(private fb: FormBuilder, private userService: UsersService, private toastr: ToastrService) { 
    let FormControls = {
      Nom : new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Z a-z .'-]+"),
        Validators.minLength(4)
      ]),
      NumeroDeTelephone : new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      Email : new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$")
      ]),
      Password : new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]) 
    }
    this.myForm = this.fb.group(FormControls);
  }

  get Nom() {
    return this.myForm.get('Nom');
  }
  get NumeroDeTelephone() {
    return this.myForm.get('NumeroDeTelephone');
  }
  get Email() {
    return this.myForm.get('Email');
  }
  get Password() {
    return this.myForm.get('Password');
  }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem('currentUser')).user.username;
    console.log(user)
    this.userService.getUser(user).subscribe(
      res=>{
          this.user = res;      
          this.myForm.patchValue({
            Nom : this.user.username,
            NumeroDeTelephone :this.user.numero,
            Email: this.user.email,
            Password: this.user.password
          })
        },
      err=>{
          console.log(err);
      })
  }

  updateAdmin() {
    var data = this.myForm.value; 
    var proprietaire = new Users(data.Nom,data.NumeroDeTelephone,data.Email,data.Password);
    var id = JSON.parse(localStorage.getItem('currentUser')).user.id;

    this.userService.updateUser(proprietaire, id).subscribe(
      res=>{
        this.toastr.success("Profile modifié avec succès ");
      },
      err=>{
        console.log(err);
      })
  }
}  
