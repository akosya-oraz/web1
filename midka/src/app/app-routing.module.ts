import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailedComponent } from './film-detailed/film-detailed.component';


const routes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: "full"},
  { path: 'films', component: FilmListComponent },
  { path: 'films/:id', component: FilmDetailedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
