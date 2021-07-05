import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Agence } from 'src/app/models/Agence';
import { AgenceService } from 'src/app/services/agence.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
  
  myForm: FormGroup;
  closeResult = '';
  allAgence:any
  agence:any
  one:any

  public popoverTitle:string='Confirmation';
  public popoverMessage:string='voulez-vous vraiment supprimer cet Agence ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  constructor(private fb: FormBuilder,private agenceService:AgenceService, private router: Router, private toastr: ToastrService, private modalService: NgbModal) { 
    let FormControls = {
      agenceName : new FormControl('',[
  
      ]),
      Ville : new FormControl('',[

      ]),
      directeur : new FormControl('',[

      ]),
      Description : new FormControl('',[

      ]),
      satisfaction : new FormControl('',[

      ]),
      vente : new FormControl('',[

      ]),
      Contact : new FormControl('',[

      ])   
    }
    this.myForm = this.fb.group(FormControls);
  }

  get agenceName() {
    return this.myForm.get('agenceName');
  }
  get Ville() {
    return this.myForm.get('Ville');
  }
  get directeur() {
    return this.myForm.get('directeur');
  }
  get Description() {
    return this.myForm.get('Description');
  }
  get satisfaction() {
    return this.myForm.get('satisfaction');
  }
  get vente() {
    return this.myForm.get('vente');
  }
  get Contact() {
    return this.myForm.get('Contact');
  }

  ngOnInit(): void { 
    this.affiche()
  }

  openModifier(contentModifier) {
    this.modalService.open(contentModifier, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openAjouter(contentAjouter) {
    this.modalService.open(contentAjouter, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openUpdateData(agence) {
      this.agence = agence;
      this.myForm.patchValue({
      agenceName: this.agence.nomAgence,
      Ville: this.agence.ville,
      directeur: this.agence.nomDirecteur,
      Description:this.agence.description,
      satisfaction: this.agence.nbSatisfaction,
      vente: this.agence.nbVente,
      Contact: this.agence.contact
    })
  }
  
  affiche(){
    this.agenceService.getAgences().subscribe(
      response => {
        this.allAgence=response;
      },
      error => {
        console.log(error);
      }
    );
  }
  
  addAgence(a) {
    var data = this.myForm.value; 
    let oneAgence = new Agence(data.agenceName,data.Ville,data.directeur,data.Description, data.satisfaction, data.vente, data.Contact);
    this.agenceService.ajouterAgence(oneAgence).subscribe(
      err =>{
        console.log(err);
      },
      res=>{
        this.toastr.success("Agence ajoutée avec succès");
        this.ngOnInit();
      }
    );
  }

  modifierAgence(e) {
    var data = this.myForm.value; 
    this.agence = new Agence(data.agenceName,data.Ville,data.directeur,data.Description, data.satisfaction, data.vente, data.Contact);
    this.agenceService.modifierAgence(e, this.agence).subscribe(
      res=>{
        this.toastr.success("Agence modifié avec succès");
        this.ngOnInit();
      },
      err=>{
        console.log(err);
      }
    );
  }

  delete(agence) {
    this.agenceService.supprimerAgence(agence).subscribe(
      res=>{
        this.toastr.success("Agence supprimé avec succès");
        this.affiche();
      },
      err=>{
        console.log(err);
      }
    );
  }

}
