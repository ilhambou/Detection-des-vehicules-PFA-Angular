// list-fiche.component.ts

import { Component, OnInit } from '@angular/core';
import { FicheService } from '../_services/fiche.service';
import { FicheDeRecherche, Vehicule } from '../model/fiche';

@Component({
  selector: 'app-lister-fiche',
  templateUrl: './lister-fiche.component.html',
  styleUrls: ['./lister-fiche.component.css']
})
export class ListerFicheComponent implements OnInit {
  fiches: FicheDeRecherche[] = [];
  selectedFiche: FicheDeRecherche | null = null;

  constructor(private ficheService: FicheService) {}

  ngOnInit() {
    this.loadFiches();
  }

  loadFiches() {
    this.ficheService.getFiches().subscribe(
      (data) => {
        this.fiches = data;
      },
      (error) => {
        console.error('Error loading fiches', error);
      }
    );
  }

  getVehiculeList(vehicules: Vehicule[]): string {
    return vehicules.map(v => `${v.marque} ${v.modele}`).join(', ');
  }

  showVehicleDetails(fiche: FicheDeRecherche) {
    this.selectedFiche = fiche;
  }
}
