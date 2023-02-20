import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbMovieSevService } from '../../Services/tmdb-movie-sev.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  popmovies: any;
  nowPlaying:any
  upcmng:any
  topRated:any
  tv_popular:any
  tv_top_rated:any
  imgPoster :String = "https://image.tmdb.org/t/p/original"

  constructor(private tmdbServ: TmdbMovieSevService,
              private router : Router) { }

  ngOnInit(): void {
    this.tmdbServ.tmdb_popular().subscribe( (popMovie) => {
      // console.log(popMovie.results);
      this.popmovies = popMovie.results
    })

    this.tmdbServ.tmdb_nowPlaying().subscribe( (nowPlaying) => {
      // console.log(nowPlaying.results);
      this.nowPlaying = nowPlaying.results
    })

    this.tmdbServ.tmdb_upcoming().subscribe( (upcmng) => {
      // console.log(upcmng.results);
      this.upcmng = upcmng.results
    })

    this.tmdbServ.tmdb_topRated().subscribe( (topRated) => {
      // console.log(topRated.results);
      this.topRated = topRated.results
    })

    this.tmdbServ.tmdb_tv_popular().subscribe( (tv_popular) => {
      console.log(tv_popular.results);
      this.tv_popular = tv_popular.results
    })

    this.tmdbServ.tmdb_tv_top_rated().subscribe( (tv_top_rated) => {
      // console.log(topRated.results);
      this.tv_top_rated = tv_top_rated.results
    })
  }


  openTmdbDetail(id:any){
    console.log(id);
    this.router.navigate(['tmdb'], { queryParams: {tmdbId: id} } )
  }
    // this.router.navigate(['movieid'], { queryParams: {imdbId: movie.imdbID} })
  
}
