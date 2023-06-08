import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, mergeMap, startWith, tap } from 'rxjs';
import { MovieServService } from '../../Services/movie-serv.service';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  searchMoviesCtrl = new FormControl();

  filteredMovies: any =[];
  isLoading = false;
  errorMsg!: string;

  constructor(private _movieServ : MovieServService,
              private router : Router) { }

  ngOnInit(): void {
    this.searchMoviesCtrl.valueChanges
    .pipe(
      startWith(''),
      filter( (data:any) => data !== null && data.length >=  2),
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap( (movie:any) => this._movieServ.getSearchMovie(movie))
    )
    .subscribe( (data:any) => {
      // console.log(data.Search)
      this.filteredMovies = data.Search
    }),
    (err:any) =>{
      console.log(err);
    }
  }

  optionClick(movie:any){
    // console.log(movie);
    this.searchMoviesCtrl.reset()
    this.router.navigate(['movieid'], { queryParams: {imdbId: movie.imdbID} })
  }

  
}
