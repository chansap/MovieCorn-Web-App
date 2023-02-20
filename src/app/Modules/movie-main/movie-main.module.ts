import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { MainComponentComponent } from './Components/main-component/main-component.component';
import { MovieSearchComponent } from './Components/movie-search/movie-search.component';
import { OmdbMoreDetailComponent } from './Components/omdb-more-detail/omdb-more-detail.component';
import { MainDashboardComponent } from './Components/main-dashboard/main-dashboard.component';
import { Error404Component } from './Components/error404/error404.component';
import { MoviemainRoutingModule } from './movie-mainRouting.module';
import { TmdbMovieDetailsComponent } from './Components/tmdb-movie-details/tmdb-movie-details.component';


@NgModule({
  declarations: [
    MainComponentComponent,
    MovieSearchComponent,
    OmdbMoreDetailComponent,
    MainDashboardComponent,
    Error404Component,
    TmdbMovieDetailsComponent
  ],
  imports: [
    MoviemainRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatProgressBarModule
  ],
  exports:[
    MainComponentComponent
  ]
})  
export class MovieMainModule { }
