import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from 'src/app/Constants';

@Injectable({
  providedIn: 'root'
})
export class MovieServService {

  constructor(private _http : HttpClient) { }

  getSearchMovie(movieName:any){
    let url = `${URL.movie_search}=${movieName}${URL.plot}&apikey=${URL.omdb_api_key}`
    return this._http.get<any>(url)
  }

  getOMDBMovieById(imdbId:any){
    let urlWithId = `${URL.movie_with_id}=${imdbId}${URL.plot}&apikey=${URL.omdb_api_key}`
    return this._http.get<any>(urlWithId)
  }
}
