import { Component } from '@angular/core';
import {VehiculeService} from "../_services/vehicule.service";
import {NgForm} from "@angular/forms";
import {PersonneService} from "../_services/personne.service";

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrl: './personne.component.css'
})
export class PersonneComponent {
  studentDetails =null;
  clientToUpdate: {
    id:string,
    code: string;
    date_Debut: string;
    date_Fin: string;
    statutProjet: string;
    creeLe: string;
    budget: string
  } ={
    id:"",
    code:"",
    date_Debut:"",
    date_Fin:"",
    statutProjet:"",
    creeLe:"",
    budget:""
  };
  selectedProjet: any = {
    id: "",
    code: "",
    date_Debut: "",
    date_Fin: "",
    statutProjet: "",
    creeLe: "",
    budget: "",
    client: {
      id: "",
      nom: "",
      // other client properties
    }
  };
  showSuccessAlert: boolean = false;

  constructor(private clientService: PersonneService, ) {
    this.getProjetDetails();
  }

  ngOnInit(): void {
    this.clientService.getFiche().subscribe(
      (secteurs) => {
        // @ts-ignore
        this.sectors = secteurs;
      },
      (error: any) => {
        console.log(error);
      }
    );

  }
  sectors: string[] = [];
  sectors2: string[] = [];

  register(registerForm: NgForm): void {
    const formData = {
      ...registerForm.value,


      // other properties

    };
    if (!registerForm.value.CIN) {
      alert('Le champ "CIN" est obligatoire.');
      //this.errorMessage = 'Le champ "Nom" est obligatoire.';
    } if (!registerForm.value.nom) {
      alert('Le champ "nom" est obligatoire.');
      //this.errorMessage = 'Le champ "Nom" est obligatoire.';
    }
    if (!registerForm.value.prenom) {
      alert('Le champ "prenom" est obligatoire.');
      //this.errorMessage = 'Le champ "Nom" est obligatoire.';
    }
    if (!registerForm.value.adresse) {
      alert('Le champ "adresse" est obligatoire.');
      //this.errorMessage = 'Le champ "Nom" est obligatoire.';
    }
    if (!registerForm.value.numeroTelephone) {
      alert('Le champ "numeroTelephone" est obligatoire.');
      //this.errorMessage = 'Le champ "Nom" est obligatoire.';
    }
    if (!registerForm.value.email) {
      alert('Le champ "email" est obligatoire.');
      //this.errorMessage = 'Le champ "Nom" est obligatoire.';
    }
    if (!registerForm.value.age) {
      alert('Le champ "age" est obligatoire.');
      //this.errorMessage = 'Le champ "Nom" est obligatoire.';
    }
    if (!registerForm.value.sexe) {
      alert('Le champ "sexe" est obligatoire.');
      //this.errorMessage = 'Le champ "Nom" est obligatoire.';
    }
    else {

      this.clientService.EnregistrerFiche(formData).subscribe(
        (resp: any) => {
          console.log(resp);
          //  alert("Projet a bien été enregistré");
          this.showSuccessAlert = true; // Affichez l'alerte de succès
          setTimeout(() => {
            this.showSuccessAlert = false;
          },3000);
          registerForm.reset(); // Reset the form
          this.getProjetDetails();
          // Handle the success response if needed
        },
        (err: any) => {
          console.log(err);
          // Handle the error response if needed
        }
      );
    }
  }
  getProjetDetails() {
    this.clientService.getFiche().subscribe(
      (resp) => {
        console.log(resp);
        // @ts-ignore
        this.studentDetails = resp;

        // Assuming the project details include the client details
        // @ts-ignore
        if (this.studentDetails && this.studentDetails.length > 0) {
          this.selectedProjet = this.studentDetails[0]; // Select the first project
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /*deleteProjet(client: any){
    // @ts-ignore
    this.projetService.deleteProjet(client.id).subscribe(
      (resp)=>{
        console.log(resp);
        alert("Projet a bien été supprimé");
        this.getProjetDetails();
      },
      (err)=> console.log(err)
    );
  }*/
  /*edit(client: any) {
    this.clientToUpdate.id=client.id;
    // When editing, copy the client's data to clientToUpdate
    this.clientToUpdate.code = client.code;
    this.clientToUpdate.date_Debut = client.date_Debut.split('T')[0];
    this.clientToUpdate.date_Fin = client.date_Fin.split('T')[0];

    this.clientToUpdate.creeLe = client.creeLe.split('T')[0];
    this.clientToUpdate.statutProjet = client.statutProjet;
    this.clientToUpdate.budget = client.budget;
  }
  updateClient(registerForm: NgForm): void{
    const formData = { ...registerForm.value,
      code: registerForm.value.code,

    };
    this.projetService.updateProjet(formData).subscribe(
      (resp)=>{

        console.log(resp);
        alert("Client a bien été modifier");
        this.getProjetDetails();
      },
      (err)=>{
        console.log(err);
      }
    )
  }*/

}
