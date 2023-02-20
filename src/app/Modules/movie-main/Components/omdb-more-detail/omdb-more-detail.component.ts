import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, switchMap, tap } from 'rxjs/operators'
import { MovieServService } from '../../Services/movie-serv.service';

@Component({
  selector: 'app-omdb-more-detail',
  templateUrl: './omdb-more-detail.component.html',
  styleUrls: ['./omdb-more-detail.component.css']
})
export class OmdbMoreDetailComponent implements OnInit {

  imdbid:any
  detailAbout:any
//   detailAbout :any = {
//     "Title": "The Incredible Hulk",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "13 Jun 2008",
//     "Runtime": "112 min",
//     "Genre": "Action, Adventure, Sci-Fi",
//     "Director": "Louis Leterrier",
//     "Writer": "Zak Penn, Stan Lee, Jack Kirby",
//     "Actors": "Edward Norton, Liv Tyler, Tim Roth",
//     "Plot": "Depicting the events after the Gamma Bomb. 'The Incredible Hulk' tells the story of Dr Bruce Banner, who seeks a cure to his unique condition, which causes him to turn into a giant green monster under emotional stress. Whilst on the run from military which seeks his capture, Banner comes close to a cure. But all is lost when a new creature emerges: The Abomination.",
//     "Language": "English, Portuguese, Spanish",
//     "Country": "United States",
//     "Awards": "1 win & 10 nominations",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "6.6/10"
//         },
//         {
//             "Source": "Rotten Tomatoes",
//             "Value": "67%"
//         },
//         {
//             "Source": "Metacritic",
//             "Value": "61/100"
//         }
//     ],
//     "Metascore": "61",
//     "imdbRating": "6.6",
//     "imdbVotes": "497,277",
//     "imdbID": "tt0800080",
//     "Type": "movie",
//     "DVD": "21 Oct 2008",
//     "BoxOffice": "$134,806,913",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }

  constructor(private activatedroute:ActivatedRoute,
              private movieServService : MovieServService,
              private router:Router) { }

  ngOnInit(): void {

    // const heroId = this.activatedroute.snapshot.paramMap.get('imdbId');
    // console.log(heroId);

    // this.Activatedroute.paramMap.subscribe(
    //   (params) => {
    //     console.log(params.get('imdbId'));
    //   }
    // )
    
    
    // .pipe(
    //   switchMap(params => {
    //     this.selectedId = Number(params.get('id'));
    //     return this.service.getHeroes();
    //   })
    // );


    // this.Activatedroute.snapshot
    // .queryParams['imdbId'].subscribe((data :any) => {
    //   console.log(data);
    // })


    // this.activatedroute.queryParamMap.subscribe(
    //   (data :any) => {
    //     console.log(data);
    //    var l = data.get('imdbId')
    //     console.log("OmdbMoreDetailComponent",l);
    //   }
    // )


    this.activatedroute.queryParamMap.pipe(
      mergeMap( (data) => this.movieServService.getOMDBMovieById(data.get('imdbId')))
    ).subscribe(  (movie) =>{ this.detailAbout = movie})



  }

}
