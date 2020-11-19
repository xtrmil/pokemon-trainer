import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './components/pokemon/pokemon-detail/pokemon-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
{
path: 'register',
component: RegisterComponent
},
{
  path: 'details/:pokemonId',
  loadChildren: ()=> import('./components/pokemon/pokemon-detail/pokemon-detail.module').then(m => m.PokemonDetailModule),
  component: PokemonDetailComponent
},
{
  path: 'dashboard',
  loadChildren: ()=> import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [ AuthGuard ]
},
{
  path: 'pokemons',
  loadChildren: ()=> import('./components/pokemon/pokemon-list/pokemon-list.module').then(m=> m.PokemonListModule),
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
