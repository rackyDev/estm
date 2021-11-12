import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AjouterEtudiantComponent } from './components/administration/ajouter-etudiant/ajouter-etudiant.component';
import { EtudiantsComponent } from './components/etudiants/etudiants.component';
import { MoratoirComponent } from './components/etudiants/moratoir/moratoir.component';
import { SupervisseurComponent } from './components/supervisseur/supervisseur.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AgentComponent } from './components/agent/agent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AjouterEtudiantComponent,
    AdministrationComponent,
    EtudiantsComponent,
    MoratoirComponent,
    SupervisseurComponent,
    MoratoirComponent,
    AgentComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
