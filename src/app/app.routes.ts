import { Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitsComponent } from './add-produits/add-produits.component';

export const routes: Routes = [
    {path: "produits", component : ProduitsComponent},
    {path: "add-produits", component : AddProduitsComponent},
    {path: "", redirectTo: "produits", pathMatch: "full"}

];
