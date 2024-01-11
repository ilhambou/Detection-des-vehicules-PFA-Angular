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

  showEnregistrerButton: boolean = false;

  constructor(private ficheService: FicheService) {}
  showPersonForm: boolean = false;
  showPersonButton: boolean= true;
  personButtonText: string = 'Ajouter personne';

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
  personButtonColor: string = 'success'; // 'success' for the default green color

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
    this.showEnregistrerButton = this.showPersonForm || this.fiche.vehicules.length > 0;

  }
  togglePersonForm() {
    this.showPersonForm = !this.showPersonForm;
    this.showPersonButton = false; // Set to false once the button is clicked
    this.showPersonButton = !this.showPersonForm; // Set to false once the button is clicked
    this.personButtonText = this.showPersonForm ? 'Fermer le formulaire' : 'Ajouter personne';
    this.personButtonColor = this.showPersonForm ? 'danger' : 'success'; // Change to red when the form is open
    this.showEnregistrerButton = this.showPersonForm || this.fiche.vehicules.length > 0;

  }


}
