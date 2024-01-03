import { Component } from '@angular/core';
import {AjouterPoliceTService} from "../_services/ajouter-police-t.service";
import {VehiculeService} from "../_services/vehicule.service";
import {PersonneService} from "../_services/personne.service";
import { WebSocketServiceService } from '../_services/web-socket-service.service';

@Component({
  selector: 'app-lister-vehicule',
  templateUrl: './lister-vehicule.component.html',
  styleUrl: './lister-vehicule.component.css'
})
export class ListerVehiculeComponent {
  notifications: any[] = [];
  studentDetails =null;
  itemsPerPage: number = 8;
  currentPage: number = 1;
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

  constructor(private clientService: VehiculeService,private webSocketService: WebSocketServiceService) {
    this.getProjetDetails();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSuccessAlert = false;
    }, 5000);
    this.clientService.getFiche().subscribe(
      (secteurs) => {
        // @ts-ignore
        this.sectors = secteurs;
      },
      (error: any) => {
        console.log(error);
      }
    );
    // Connect to the WebSocket server when the component is initialized
    this.webSocketService.connect();
    // Listen for notifications from the WebSocket service
    this.webSocketService.listenForNotifications().subscribe((data: any) => {
      console.log('Notification received:', data);
      this.notifications.unshift(data);
      // Display the information in your Angular component as needed
      this.displayAlert(data.message);

    });

  }
  private displayAlert(message: string): void {
    alert(message);
  }
  sectors: string[] = [];
  sectors2: string[] = [];


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

  deleteProjet(client: any){
    // @ts-ignore
    this.clientService.deleteFiche(client.id).subscribe(
      (resp)=>{
        console.log(resp);
        alert("Projet a bien été supprimé");
        this.getProjetDetails();
      },
      (err)=> console.log(err)
    );
  }
  get paginatedItems(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    //   return this.users?.slice(startIndex, endIndex);
    // @ts-ignore
    return this.studentDetails.slice(startIndex, endIndex);
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  get totalPages(): number {
    // @ts-ignore
    return Math.ceil(this.studentDetails.length / this.itemsPerPage);
  }
  /*  edit(client: any) {
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
