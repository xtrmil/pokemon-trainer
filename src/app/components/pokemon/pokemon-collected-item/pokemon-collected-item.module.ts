import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCollectedItemComponent } from '../pokemon-list-item/pokemon-collected-item.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: PokemonCollectedItemComponent
    }
];


@NgModule({
   declarations: [PokemonCollectedItemComponent],
   imports: [ RouterModule.forChild( routes ),CommonModule ],
   exports: [ RouterModule ] 
})
export class PokemonListItemModule{}