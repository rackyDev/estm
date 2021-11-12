import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  etudiants: any = [];
  agents: any = [];
  superviseur: any = [];
  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
  this. getEtudiant();
  this. getAgent();
  this. getsuperviseur();
  }

  getEtudiant()
  {
    this.etudiantService.getUsers().subscribe(
      (allEtudiant: any) => {
        if (allEtudiant) {
          allEtudiant['data'].forEach((element : any) => {
            if(element.idRole == 4) this.etudiants.push(element)
          });
        }
      }
    );
    return this.etudiants;
  }

  getAgent()
  {
    this.etudiantService.getUsers().subscribe(
      (allEtudiant: any) => {
        if (allEtudiant) {
          allEtudiant['data'].forEach((element : any) => {
            if(element.idRole == 3) this.agents.push(element)
          });
        }
      }
    );
    return this.agents;
  }


  getsuperviseur()
  {
    this.etudiantService.getUsers().subscribe(
      (allEtudiant: any) => {
        if (allEtudiant) {
          allEtudiant['data'].forEach((element : any) => {
            if(element.idRole == 2) this.superviseur.push(element)
          });
        }
      }
    );
    return this.agents;
  }



}
