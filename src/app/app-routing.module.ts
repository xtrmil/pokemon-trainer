import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/pokemon/pokemon-list/pokemon-list.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
{
path: 'register',
component: RegisterComponent
},
{
  path: 'pokemon/:pokemonId',
  loadChildren: ()=> import('./components/pokemon/pokemon-detail/pokemon-detail.module').then(m => m.PokemonDetailModule),
  canActivate: [ AuthGuard ]
},
{
  path: 'dashboard',
  loadChildren: ()=> import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [ AuthGuard ]
},
{
  path: 'pokemons',
  component: PokemonListComponent,
  canActivate: [ AuthGuard ]
},
{
path: '',
pathMatch: 'full',
redirectTo: '/register'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
