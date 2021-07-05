import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-acteurs',
  templateUrl: './acteurs.component.html',
  styleUrls: ['./acteurs.component.css']
})
export class ActeursComponent implements OnInit {

  alluser:any
  public popoverTitle:string='Confirmation';
  public popoverMessage:string='voulez-vous vraiment supprimer cet acteur ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  constructor(private userService:UsersService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.affiche()
  }
  
  affiche(){
    this.userService.getUsers().subscribe(
      response => {
        this.alluser= response;
      },
      error => {
        console.log(error);
      }
    );
  }

  delete(user) {
    this.userService.deleteUser(user).subscribe(
      res=>{
        this.toastr.success("Acteur supprimé avec succès");
        this.affiche();
      },
      err =>{
        console.log(err);
      }
    )
  }

}
