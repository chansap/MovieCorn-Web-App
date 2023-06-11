import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';



import { MainComponentComponent } from './Components/main-component/main-component.component';
import { MovieSearchComponent } from './Components/movie-search/movie-search.component';
import { OmdbMoreDetailComponent } from './Components/omdb-more-detail/omdb-more-detail.component';
import { MainDashboardComponent } from './Components/main-dashboard/main-dashboard.component';
import { Error404Component } from './Components/error404/error404.component';
import { MoviemainRoutingModule } from './movie-mainRouting.module';
import { TmdbMovieDetailsComponent } from './Components/tmdb-movie-details/tmdb-movie-details.component';
import { TmdbTvDetailsComponent } from './Components/tmdb-tv-details/tmdb-tv-details.component';

// scroll
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LastestMoviePopUpComponent } from './Components/lastest-movie-pop-up/lastest-movie-pop-up.component';
import { MovieProviderComponent } from './Components/movie-provider/movie-provider.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    MainComponentComponent,
    MovieSearchComponent,
    OmdbMoreDetailComponent,
    MainDashboardComponent,
    Error404Component,
    TmdbMovieDetailsComponent,
    TmdbTvDetailsComponent,
    LastestMoviePopUpComponent,
    MovieProviderComponent
  ],
  imports: [
    MoviemainRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatTooltipModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports:[
    MainComponentComponent
  ]
})  
export class MovieMainModule { }
