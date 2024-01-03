import { Component } from '@angular/core';
import { FicheService } from '../_services/fiche.service';
import { FicheDeRecherche, Personne, Vehicule } from '../model/fiche';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent {
  fiche: FicheDeRecherche = {
    id: undefined,
    vehicules: [],
    personne: {} as Personne
  };

  constructor(private ficheService: FicheService) {}
  showPersonForm: boolean = false;

  addFiche() {
    this.ficheService.addFiche(this.fiche).subscribe(
      (response) => {
        console.log('Fiche added successfully', response);
      },
      (error) => {
        console.error('Error adding fiche', error);
      }
    );
  }

  addVehicule() {
    const newVehicule: Vehicule = {
      marque: '',
      modele: '',
      couleur: '',
      carburant: '',
      automatique: false,
      licenseplate: ''
    };
    this.fiche.vehicules.push(newVehicule);
  }
  togglePersonForm() {
    this.showPersonForm = !this.showPersonForm;
  }
 
  
}