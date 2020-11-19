import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListItemComponent } from '../pokemon-list-item/pokemon-list-item.component';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

const routes: Routes = [
    {
        path: '',
        component: PokemonListItemComponent
    }
];


@NgModule({
   declarations: [PokemonListItemComponent, PokemonDetailComponent],
   imports: [ RouterModule.forChild( routes ),CommonModule ],
   exports: [ RouterModule ] 
})
export class PokemonListItemModule{}