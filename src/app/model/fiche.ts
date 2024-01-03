// models.ts

export interface Personne {
    id?: number;
    CIN: string;
    nom: string;
    prenom: string;
    adresse: string;
    numeroTelephone: string;
    email: string;
    age: number;
    sexe: string; // Assuming 'M' or 'F'
  }
  
  export interface Vehicule {
    id?: number;
    marque: string;
    modele: string;
    couleur: string;
    carburant: string;
    automatique: boolean;
    licenseplate: string;
  }
  
  export interface FicheDeRecherche {
    id?: number;
    vehicules: Vehicule[];
    personne: Personne;
  }
  
