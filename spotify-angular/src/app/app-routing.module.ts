import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'artist-search', component: ArtistSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
