import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardModule } from '../pokemon/pokemon-card/pokemon-card.module';
import { CollectionDashboardComponent } from './collection-dashboard.component';

const routes: Routes = [{
    path: '',
    component: CollectionDashboardComponent
}];

@NgModule({
    declarations:[CollectionDashboardComponent],
   imports: [ RouterModule.forChild( routes ), CommonModule,PokemonCardModule],
   exports: [ RouterModule ] 
})
export class CollectionDashboardModule{}