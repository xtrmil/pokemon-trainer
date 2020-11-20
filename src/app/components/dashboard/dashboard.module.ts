import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListItemComponent } from '../pokemon/pokemon-list-item/pokemon-list-item.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{
    path: '',
    component: DashboardComponent

}];


@NgModule({
    declarations:[DashboardComponent],
   imports: [ RouterModule.forChild( routes ) ],
   exports: [ RouterModule ] 
})
export class DashboardModule{}