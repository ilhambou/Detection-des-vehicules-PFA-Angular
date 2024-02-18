import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {RapportService} from "../rapport.service";

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
  rapportForm!: FormGroup; // Utilisation de l'opérateur de non-null assertion pour indiquer que rapportForm sera initialisé dans le ngOnInit()

  afficherFormulaire: boolean = false; // Variable pour suivre l'état de l'affichage du formulaire

  constructor(private formBuilder: FormBuilder,private rapportService: RapportService) { }

  ngOnInit(): void {
    // Initialisation du formulaire du rapport dans le ngOnInit()
    this.rapportForm = this.formBuilder.group({
      // Définir les contrôles de votre formulaire ici
      action: [''],
      description: ['']
    });
  }

  // Méthode pour afficher le formulaire lorsque le bouton est cliqué
  afficherFormulaireRapport() {
    this.afficherFormulaire = true;
  }

  // Méthode pour soumettre le rapport
  submitRapport() {
    // Logique pour soumettre le rapport ici
    console.log('Rapport soumis :', this.rapportForm.value);
    // Call the RapportService to create the rapport
    this.rapportService.createRapport(this.rapportForm.value)
        .subscribe(
            (response) => {
              console.log('Rapport créé avec succès:', response);
              // Additional logic if needed
            },
            (error) => {
              console.error('Erreur lors de la création du rapport:', error);
              // Handle error as needed
            }
        );

  }
}
