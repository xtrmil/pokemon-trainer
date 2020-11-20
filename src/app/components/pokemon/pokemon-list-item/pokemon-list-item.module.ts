import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListItemComponent } from '../pokemon-list-item/pokemon-list-item.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: PokemonListItemComponent
    }
];


@NgModule({
   declarations: [PokemonListItemComponent],
   imports: [ RouterModule.forChild( routes ),CommonModule ],
   exports: [ RouterModule ] 
})
export class PokemonListItemModule{}