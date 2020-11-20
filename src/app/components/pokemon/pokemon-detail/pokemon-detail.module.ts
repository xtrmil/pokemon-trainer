import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: PokemonDetailComponent
    }
];

@NgModule({
    declarations: [PokemonDetailComponent],
    imports: [RouterModule.forChild(routes), CommonModule],
    exports: [ RouterModule ]
})
export class PokemonDetailModule { }