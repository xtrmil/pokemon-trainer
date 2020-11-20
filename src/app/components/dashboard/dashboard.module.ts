import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCollectedItemComponent } from '../pokemon/pokemon-collected-item/pokemon-collected-item.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
    path: '',
    component: DashboardComponent

}];


@NgModule({
    declarations:[DashboardComponent, PokemonCollectedItemComponent],
   imports: [ RouterModule.forChild( routes ), CommonModule],
   exports: [ RouterModule ] 
})
export class DashboardModule{}