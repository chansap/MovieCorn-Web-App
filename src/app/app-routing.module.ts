import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './Modules/movie-main/Components/error404/error404.component';
import { MainDashboardComponent } from './Modules/movie-main/Components/main-dashboard/main-dashboard.component';
import { OmdbMoreDetailComponent } from './Modules/movie-main/Components/omdb-more-detail/omdb-more-detail.component';
import { TmdbMovieDetailsComponent } from './Modules/movie-main/Components/tmdb-movie-details/tmdb-movie-details.component';

const routes: Routes = [
  {path: 'dashboard', component: MainDashboardComponent},
  {path: 'movieid', component: OmdbMoreDetailComponent},
  {path: 'tmdb', component: TmdbMovieDetailsComponent},

  
  // {path: 'movieid/:imdbId', component: OmdbMoreDetailComponent},
  // { path: '', component:OmdbMoreDetailComponent },

  //Lazy loaded Module
  // {
  //   path: 'movie',
  //   loadChildren: () => import('./Modules/movie-main/movie-main.module').then(m => m.MovieMainModule)
  // },


  { path:'', redirectTo:'/dashboard', pathMatch:'full'},
  { path: "**", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
