import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonListItemComponent } from '../pokemon-list-item/pokemon-list-item.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: PokemonListComponent
    }
];


@NgModule({
   declarations: [PokemonListComponent, PokemonListItemComponent],
   imports: [ RouterModule.forChild( routes ),CommonModule ],
   exports: [ RouterModule ] 
})
export class PokemonListModule{}