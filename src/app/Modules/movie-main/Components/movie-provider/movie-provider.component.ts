import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TmdbMovieSevService } from '../../Services/tmdb-movie-sev.service';

@Component({
  selector: 'app-movie-provider',
  templateUrl: './movie-provider.component.html',
  styleUrls: ['./movie-provider.component.css']
})
export class MovieProviderComponent implements OnInit {

  imgPoster :String = "https://image.tmdb.org/t/p/original"
  rentBuyUsData :any;

  constructor( public dialogRef: MatDialogRef<MovieProviderComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private _tmdbMovieSevService : TmdbMovieSevService) { }

  ngOnInit(): void {
    console.log(this.data.id);
    this._tmdbMovieSevService.tmdb_movie_provider(this.data.id).subscribe( (providerData:any) =>{
      console.log(providerData);
      this.rentBuyUsData = providerData.results
    })
  }

}
