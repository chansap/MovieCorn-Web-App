import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from 'src/app/Constants';

@Injectable({
  providedIn: 'root'
})
export class TmdbMovieSevService {

  constructor(private _http: HttpClient) { }


  tmdb_popular(){
    let uri = `${URL.tmdb_main_URl}/popular?api_key=${URL.tmdb_api_key}&language=en-US`
    return this._http.get<any>(uri)
  }

  tmdb_movie_in_details(id:any){
    let uri = `${URL.tmdb_main_URl}/${id}?api_key=${URL.tmdb_api_key}&language=en-US`
    return this._http.get<any>(uri)
  }

  tmdb_latest(){
    let uri = `${URL.tmdb_main_URl}/latest?api_key=${URL.tmdb_api_key}&language=en-US`
    return this._http.get<any>(uri)
  }

  tmdb_nowPlaying(){
    let uri = `${URL.tmdb_main_URl}/now_playing?api_key=${URL.tmdb_api_key}&language=en-US`
    return this._http.get<any>(uri)
  }

  tmdb_topRated(){
    let uri = `${URL.tmdb_main_URl}/top_rated?api_key=${URL.tmdb_api_key}&language=en-US`
    return this._http.get<any>(uri)
  }

  tmdb_upcoming(){
    let uri = `${URL.tmdb_main_URl}/upcoming?api_key=${URL.tmdb_api_key}&language=en-US`
    return this._http.get<any>(uri)
  }

  // TV Related Info
  tmdb_tv_popular(){
    let uri = `${URL.tmdb_tv_main_URl}/popular?api_key=${URL.tmdb_api_key}&language=en-US`
    return this._http.get<any>(uri)
  }

  tmdb_tv_top_rated(){
    let uri = `${URL.tmdb_tv_main_URl}/top_rated?api_key=${URL.tmdb_api_key}&language=en-US`
    return this._http.get<any>(uri)
  }

  tmdb_tv_in_details(id:any){
    let uri = `${URL.tmdb_tv_main_URl}/${id}?api_key=${URL.tmdb_api_key}&language=en-US`
    return this._http.get<any>(uri)
  }

}
