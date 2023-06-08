import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, mergeMap, startWith, tap } from 'rxjs';
import { MovieServService } from '../../Services/movie-serv.service';
import { MatDialog } from '@angular/material/dialog';
import { LastestMoviePopUpComponent } from '../lastest-movie-pop-up/lastest-movie-pop-up.component';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  searchMoviesCtrl = new FormControl();

  filteredMovies: any =[];
  isLoading = false;
  errorMsg!: string;
  


  constructor(private _movieServ : MovieServService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.searchMoviesCtrl.valueChanges
    .pipe(
      startWith(''),
      filter( (data:any) => data !== null && data.length >=  3),
      debounceTime(1000),
      distinctUntilChanged(),
      mergeMap( (movie:any) => this._movieServ.getSearchMovie(movie))
    )
    .subscribe( (data:any) => {
      console.log(data.Search)
      this.filteredMovies = data.Search
    }),
    (err:any) =>{
      console.log(err);
    }
  }


  optionClick(){
    const dialogRef = this.dialog.open(LastestMoviePopUpComponent,{
      height: '400px',
      width: '600px',
    });
  }

}
