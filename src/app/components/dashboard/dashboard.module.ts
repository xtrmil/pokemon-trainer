import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardModule } from '../pokemon/pokemon-card/pokemon-card.module';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
    path: '',
    component: DashboardComponent
}];

@NgModule({
    declarations:[DashboardComponent],
   imports: [ RouterModule.forChild( routes ), CommonModule,PokemonCardModule],
   exports: [ RouterModule ] 
})
export class DashboardModule{}