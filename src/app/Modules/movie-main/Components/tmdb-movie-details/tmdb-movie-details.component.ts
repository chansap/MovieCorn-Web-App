import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators'
import { MovieServService } from '../../Services/movie-serv.service';
import { TmdbMovieSevService } from '../../Services/tmdb-movie-sev.service';

@Component({
  selector: 'app-tmdb-movie-details',
  templateUrl: './tmdb-movie-details.component.html',
  styleUrls: ['./tmdb-movie-details.component.css']
})
export class TmdbMovieDetailsComponent implements OnInit {
  imgPoster :String = "https://image.tmdb.org/t/p/original"
  detailAbout :any

  
  constructor(private router : Router,
              private activatedroute:ActivatedRoute,
              private tmdbmovieServService : TmdbMovieSevService) { }

  ngOnInit(): void {


    this.activatedroute.queryParamMap.pipe(
        mergeMap( (data) => this.tmdbmovieServService.tmdb_movie_in_details(data.get('tmdbId')))
      ).subscribe(  (movie) =>{ this.detailAbout = movie})

  }

  routeToImdb(imdb_id:any){
    this.router.navigate(['movieid'], { queryParams: {imdbId: imdb_id} })
  }
}
