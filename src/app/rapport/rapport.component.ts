import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RapportService } from "../rapport.service";

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
  rapportForm!: FormGroup;
  rapportSoumis: any; // Variable pour stocker le rapport soumis
  rapportAffiche: boolean = false; // Variable pour indiquer si le rapport doit être affiché

  constructor(private formBuilder: FormBuilder, private rapportService: RapportService) { }

  ngOnInit(): void {
    this.rapportForm = this.formBuilder.group({
      action: [''],
      description: ['']
    });
  }

  submitRapport() {
    console.log('Rapport soumis :', this.rapportForm.value);
    this.rapportService.createRapport(this.rapportForm.value)
      .subscribe(
        (response) => {
          console.log('Rapport créé avec succès:', response);
          // Stocker le rapport soumis pour l'afficher
          this.rapportSoumis = response;
        },
        (error) => {
          console.error('Erreur lors de la création du rapport:', error);
          // Handle error as needed
        }
      );
  }

  afficherRapport() {
    this.rapportAffiche = true;
  }
}
