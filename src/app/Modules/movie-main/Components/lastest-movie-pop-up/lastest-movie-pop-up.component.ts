import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbMovieSevService } from '../../Services/tmdb-movie-sev.service';

@Component({
  selector: 'app-lastest-movie-pop-up',
  templateUrl: './lastest-movie-pop-up.component.html',
  styleUrls: ['./lastest-movie-pop-up.component.css']
})
export class LastestMoviePopUpComponent implements OnInit {

  constructor(private router : Router, private _tmdbServ :TmdbMovieSevService) { }

  imgPoster :String = "https://image.tmdb.org/t/p/original"

  latestMovieDetails:any
//   ={
//     "adult": false,
//     "backdrop_path": null,
//     "belongs_to_collection": null,
//     "budget": 0,
//     "genres": [],
//     "homepage": "",
//     "id": 1136529,
//     "imdb_id": null,
//     "original_language": "en",
//     "original_title": "Saving Private Joey",
//     "overview": "A group of friends overcome almost no hurdles at all as they race to rescue their brother in Christ from the United States military",
//     "popularity": 0.0,
//     "poster_path": "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
//     "production_companies": [],
//     "production_countries": [],
//     "release_date": "",
//     "revenue": 0,
//     "runtime": 16,
//     "spoken_languages": [],
//     "status": "Released",
//     "tagline": "",
//     "title": "Saving Private Joey",
//     "video": false,
//     "vote_average": 0.0,
//     "vote_count": 0
// }

  ngOnInit(): void {
    this._tmdbServ.tmdb_latest().subscribe( (latestMovie:any) => {
      console.log(latestMovie)
      this.latestMovieDetails = latestMovie
    })
  }


  routeToImdb(){
    // console.log("CLicked");
    this.router.navigate(['tmdb'], { queryParams: {tmdbId: this.latestMovieDetails.id} } )
  }
}
