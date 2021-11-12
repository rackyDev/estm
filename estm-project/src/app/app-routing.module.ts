import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './components/administration/administration.component';
import { AjouterEtudiantComponent } from './components/administration/ajouter-etudiant/ajouter-etudiant.component';
import { AgentComponent } from './components/agent/agent.component';
import { EtudiantsComponent } from './components/etudiants/etudiants.component';
import { LoginComponent } from './components/login/login.component';
import { SupervisseurComponent } from './components/supervisseur/supervisseur.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'creerCompte', component: AjouterEtudiantComponent},
  {path: 'admin', component: AdministrationComponent},
  {path: 'superviseur', component: SupervisseurComponent},
  {path: 'etudiant', component: EtudiantsComponent},
  {path: 'agent', component: AgentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
