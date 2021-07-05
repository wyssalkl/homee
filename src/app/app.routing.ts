import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { EnligneComponent } from './Estimation/enligne/enligne.component';
import { ParagenceComponent } from './Estimation/paragence/paragence.component';
import { PourquoiComponent } from './Estimation/pourquoi/pourquoi.component';
import { AproposComponent } from './apropos/apropos.component';
import { EquipeComponent } from './equipe/equipe.component';
import { CompareComponent } from './compare/compare.component';
import { RechercherAgenceComponent } from './Estimation/rechercher-agence/rechercher-agence.component';
import { AideComponent } from './aide/aide.component';
import { AdresseDuBienComponent } from './Estimation/adresse-du-bien/adresse-du-bien.component';
import { AproposDuBienComponent } from './Estimation/apropos-du-bien/apropos-du-bien.component';
import { InformationDuBienComponent } from './Estimation/information-du-bien/information-du-bien.component';
import { BlogComponent } from './Blog/blog/blog.component';
import { SecondComponent } from './Blog/second/second.component';
import { ThirdComponent } from './Blog/third/third.component';
import { FourthComponent } from './Blog/fourth/fourth.component';
import { NewsletterComponent } from './Blog/newsletter/newsletter.component';
import { EnchereDuBienComponent } from './Estimation/enchere-du-bien/enchere-du-bien.component';
import { EspaceConnecteComponent } from './espace-connecte/espace-connecte.component';
import { EspacePreneurComponent } from './espace-preneur/espace-preneur.component';
import { ProfilPreneurComponent } from './profil-preneur/profil-preneur.component';
import { UsersComponent } from './users/users.component';
import { FirstComponent } from './Blog/first/first.component';
import { CommentComponent } from './acheter-louer/comment/comment.component';
import { LocationComponent } from './acheter-louer/location/location.component';
import { AnnoncelocationComponent } from './acheter-louer/annoncelocation/annoncelocation.component';
import { Annonceloc1Component } from './acheter-louer/annonceloc1/annonceloc1.component';
import { VenteComponent } from './acheter-louer/vente/vente.component';
import { AnnonceventeComponent } from './acheter-louer/annoncevente/annoncevente.component';
import { Annonce1Component } from './acheter-louer/annonce1/annonce1.component';
import { RegisterPreneurComponent } from './register/register-preneur/register-preneur.component';
import { RegisterProprietaireComponent } from './register/register-proprietaire/register-proprietaire.component';
import { EspaceAdminComponent } from './adminDashbord/espace-admin/espace-admin.component';
import { ActeursComponent } from './adminDashbord/acteurs/acteurs.component';
import { AgenceComponent } from './adminDashbord/agence/agence.component';
import { AnnonceComponent } from './adminDashbord/annonce/annonce.component';
import { EnchereComponent } from './adminDashbord/enchere/enchere.component';
import { NewslettersComponent } from './adminDashbord/newsletters/newsletters.component';
import { RendezVousComponent } from './adminDashbord/rendez-vous/rendez-vous.component';
import { ProfilDashbordComponent } from './adminDashbord/profil-dashbord/profil-dashbord.component';
import { ProfilProprietaireComponent } from './profil-proprietaire/profil-proprietaire.component';


const routes: Routes =[
    { path: 'home',     component: HomeComponent },
    { path: 'login',    component: LoginComponent },
    { path: 'contact',  component:ContactComponent},
    { path: 'enligne',  component:EnligneComponent},
    { path: 'paragence', component:ParagenceComponent},
    { path: 'pourquoi', component:PourquoiComponent},
    { path: 'apropos',  component:AproposComponent},
    { path: 'equipe',  component:EquipeComponent},
    { path: 'compare',  component:CompareComponent},
    { path: 'rechercheragence', component:RechercherAgenceComponent},
    { path: 'aide', component:AideComponent},
    { path: 'adresseDuBien', component:AdresseDuBienComponent},
    { path: 'aproposDuBien', component:AproposDuBienComponent},
    {path: 'informationDuBien', component:InformationDuBienComponent},
    {path: 'blog', component:BlogComponent},
    {path: 'first', component:FirstComponent},
    {path: 'second', component:SecondComponent},
    {path: 'third', component:ThirdComponent},
    {path: 'fourth', component:FourthComponent},
    {path: 'newsletter', component:NewsletterComponent},
    {path: 'enchéreDuBien', component:EnchereDuBienComponent},
    {path: 'espaceConnecté', component:EspaceConnecteComponent},
    {path: 'Profil', component:ProfilProprietaireComponent},
    {path: 'espacePreneur', component:EspacePreneurComponent},
    {path: 'profilPreneur', component:ProfilPreneurComponent},
    {path: 'users', component:UsersComponent},
    {path: 'comment', component:CommentComponent},
    {path: 'location', component:LocationComponent},
    {path: 'annoncelocation', component:AnnoncelocationComponent},
    {path: 'Annonceloc1', component:Annonceloc1Component},
    {path: 'vente', component:VenteComponent},
    {path: 'annoncevente', component:AnnonceventeComponent},
    {path: 'annonce1', component:Annonce1Component},
    {path: 'registerPreneur', component:RegisterPreneurComponent},
    {path: 'registerProprietaire', component:RegisterProprietaireComponent},
    {path: 'espaceAdmin', component:EspaceAdminComponent},
    {path: 'acteursTable', component:ActeursComponent},
    {path: 'agenceTable', component:AgenceComponent},
    {path: 'annonceTable', component:AnnonceComponent},
    {path: 'enchereTable', component:EnchereComponent},
    {path: 'newslettersTable', component:NewslettersComponent},
    {path: 'rendezVousTable', component:RendezVousComponent},
    {path: 'adminDashbord', component:ProfilDashbordComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
