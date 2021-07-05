import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
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
import { FirstComponent } from './Blog/first/first.component';
import { SecondComponent } from './Blog/second/second.component';
import { ThirdComponent } from './Blog/third/third.component';
import { FourthComponent } from './Blog/fourth/fourth.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { NewsletterComponent } from './Blog/newsletter/newsletter.component';
import { EnchereDuBienComponent } from './Estimation/enchere-du-bien/enchere-du-bien.component';
import { EspaceConnecteComponent } from './espace-connecte/espace-connecte.component';
import { EspacePreneurComponent } from './espace-preneur/espace-preneur.component';
import { ProfilPreneurComponent } from './profil-preneur/profil-preneur.component';
import { UsersComponent } from './users/users.component';
import { CommentComponent } from './acheter-louer/comment/comment.component';
import { LocationComponent } from './acheter-louer/location/location.component';
import { AnnoncelocationComponent } from './acheter-louer/annoncelocation/annoncelocation.component';
import { Annonceloc1Component } from './acheter-louer/annonceloc1/annonceloc1.component';
import { VenteComponent } from './acheter-louer/vente/vente.component';
import { AnnonceventeComponent } from './acheter-louer/annoncevente/annoncevente.component';
import { Annonce1Component } from './acheter-louer/annonce1/annonce1.component';
import { RegisterPreneurComponent } from './register/register-preneur/register-preneur.component';
import { RegisterProprietaireComponent } from './register/register-proprietaire/register-proprietaire.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { EspaceAdminComponent } from './adminDashbord/espace-admin/espace-admin.component';
import { ActeursComponent } from './adminDashbord/acteurs/acteurs.component';
import { AgenceComponent } from './adminDashbord/agence/agence.component';
import { AnnonceComponent } from './adminDashbord/annonce/annonce.component';
import { EnchereComponent } from './adminDashbord/enchere/enchere.component';
import { NewslettersComponent } from './adminDashbord/newsletters/newsletters.component';
import { RendezVousComponent } from './adminDashbord/rendez-vous/rendez-vous.component';
import { ProfilDashbordComponent } from './adminDashbord/profil-dashbord/profil-dashbord.component';
import { ProfilProprietaireComponent } from './profil-proprietaire/profil-proprietaire.component';
import { JwtInterceptor } from './interceptor/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ContactComponent,
    EnligneComponent,
    ParagenceComponent,
    PourquoiComponent,
    AproposComponent,
    EquipeComponent,
    CompareComponent,
    RechercherAgenceComponent,
    AideComponent,
    AdresseDuBienComponent,
    AproposDuBienComponent,
    InformationDuBienComponent,
    BlogComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    NewsletterComponent,
    EnchereDuBienComponent,
    EspaceConnecteComponent,
    EspacePreneurComponent,
    ProfilPreneurComponent,
    UsersComponent,
    CommentComponent,
    LocationComponent,
    AnnoncelocationComponent,
    Annonceloc1Component,
    VenteComponent,
    AnnonceventeComponent,
    Annonce1Component,
    RegisterPreneurComponent,
    RegisterProprietaireComponent,
    EspaceAdminComponent,
    ActeursComponent,
    AgenceComponent,
    AnnonceComponent,
    EnchereComponent,
    NewslettersComponent,
    RendezVousComponent,
    ProfilDashbordComponent,
    ProfilProprietaireComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    FormsModule , 
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', 
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
